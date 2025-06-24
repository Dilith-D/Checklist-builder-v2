const express = require('express');
const router = express.Router();
const multer = require('multer');

const upload = require('../middleware/upload');
const validation = require('../middleware/validation');
const excelParser = require('../services/excelParser');
const aiService = require('../services/aiService');
const zuperService = require('../services/zuperService');

// Multer error handler middleware
const handleUploadErrors = (error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    let message = 'File upload error';
    let code = 'UPLOAD_ERROR';
    
    switch (error.code) {
      case 'LIMIT_FILE_SIZE':
        message = `File too large. Maximum size allowed is ${(process.env.MAX_FILE_SIZE || 20971520) / 1024 / 1024}MB`;
        code = 'FILE_TOO_LARGE';
        break;
      case 'LIMIT_FILE_COUNT':
        message = 'Too many files. Only one file is allowed';
        code = 'TOO_MANY_FILES';
        break;
      case 'LIMIT_UNEXPECTED_FILE':
        message = 'Unexpected field name. Use "file" as the field name';
        code = 'UNEXPECTED_FIELD';
        break;
      default:
        message = error.message;
    }
    
    return res.status(400).json({
      success: false,
      error: message,
      code: code,
      details: { 
        multerCode: error.code,
        field: error.field || 'file'
      }
    });
  } else if (error.code === 'INVALID_FILE_TYPE') {
    return res.status(400).json({
      success: false,
      error: error.message,
      code: error.code,
      details: { 
        allowedTypes: ['.xlsx', '.xls'],
        receivedType: req.file ? require('path').extname(req.file.originalname) : 'unknown'
      }
    });
  }
  
  next(error);
};

/**
 * GET /api/ai-status
 * Get AI service status and configuration
 */
router.get('/ai-status', (req, res) => {
  try {
    const status = aiService.getStatus();
    
    res.status(200).json({
      success: true,
      message: 'AI service status retrieved',
      status: status
    });
  } catch (error) {
    console.error('❌ Error getting AI status:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get AI service status',
      code: 'AI_STATUS_ERROR'
    });
  }
});

/**
 * POST /api/extract-checklist
 * Extract checklist from uploaded Excel file using AI
 */
router.post('/extract-checklist', (req, res, next) => {
  upload.single('file')(req, res, (error) => {
    if (error) {
      return handleUploadErrors(error, req, res, next);
    }
    next();
  });
}, validation.validateExtractRequest, async (req, res, next) => {
  try {
    console.log('📄 Processing checklist extraction request');
    
    const { categoryUid, statusUid, apiKey, region } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        error: 'No file uploaded',
        code: 'NO_FILE',
        details: { message: 'Please upload an Excel file (.xlsx or .xls)' }
      });
    }

    console.log(`📊 Processing file: ${file.originalname} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);

    // Step 1: Parse Excel file
    console.log('🔍 Parsing Excel file...');
    const excelText = await excelParser.extractExcelText(file.path);
    
    if (!excelText || excelText.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Excel file appears to be empty or unreadable',
        code: 'EMPTY_FILE',
        details: { message: 'Please ensure the Excel file contains data in the correct format' }
      });
    }

    console.log(`📝 Extracted text (${excelText.length} characters)`);

    // Step 2: Extract checklist using AI service
    console.log('🤖 Processing with AI...');
    const extractedChecklist = await aiService.extractChecklist(excelText);

    // Step 3: Validate extracted checklist
    const validation = aiService.validateChecklist(extractedChecklist);
    
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        error: 'Extracted checklist contains errors',
        code: 'VALIDATION_FAILED',
        details: { 
          errors: validation.errors,
          warnings: validation.warnings
        }
      });
    }

    if (extractedChecklist.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'No valid checklist items could be extracted from the file',
        code: 'NO_ITEMS_EXTRACTED',
        details: { 
          message: 'Please check that your Excel file follows the correct format: question|type|option|required',
          excelPreview: excelText.substring(0, 200) + '...',
          warnings: validation.warnings
        }
      });
    }

    console.log(`✅ Successfully extracted ${extractedChecklist.length} checklist items`);

    // Cleanup uploaded file
    await excelParser.cleanupFile(file.path);

    res.status(200).json({
      success: true,
      message: `Successfully extracted ${extractedChecklist.length} checklist items`,
      checklist: extractedChecklist,
      validation: {
        warnings: validation.warnings,
        itemCount: extractedChecklist.length
      },
      metadata: {
        fileName: file.originalname,
        fileSize: file.size,
        itemCount: extractedChecklist.length,
        aiProvider: aiService.getStatus().provider,
        processedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('❌ Error in extract-checklist:', error);
    next(error);
  }
});

/**
 * POST /api/submit-checklist
 * Submit checklist to Zuper FSM API
 */
router.post('/submit-checklist', validation.validateSubmitRequest, async (req, res, next) => {
  try {
    console.log('🚀 Processing checklist submission to Zuper');
    
    const { checklist, config } = req.body;
    const { categoryUid, statusUid, apiKey, region } = config;

    console.log(`📋 Submitting ${checklist.length} items to region: ${region}`);

    // Step 1: Generate Zuper payload
    const zuperPayload = zuperService.generateZuperPayload(checklist, config);
    
    console.log('📦 Generated Zuper payload');

    // Step 2: Submit to Zuper API
    const result = await zuperService.submitToZuper(zuperPayload, apiKey, region);

    console.log('✅ Successfully submitted to Zuper');

    res.status(200).json({
      success: true,
      message: 'Checklist submitted successfully to Zuper',
      result: result,
      metadata: {
        itemCount: checklist.length,
        region: region,
        submittedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('❌ Error in submit-checklist:', error);
    next(error);
  }
});

/**
 * POST /api/preview-payload
 * Generate Zuper payload preview without submitting
 */
router.post('/preview-payload', validation.validateSubmitRequest, async (req, res, next) => {
  try {
    console.log('👁️ Generating payload preview');
    
    const { checklist, config } = req.body;

    // Generate Zuper payload
    const zuperPayload = zuperService.generateZuperPayload(checklist, config);
    
    res.status(200).json({
      success: true,
      message: 'Payload generated successfully',
      payload: zuperPayload,
      metadata: {
        itemCount: checklist.length,
        generatedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('❌ Error in preview-payload:', error);
    next(error);
  }
});

module.exports = router;