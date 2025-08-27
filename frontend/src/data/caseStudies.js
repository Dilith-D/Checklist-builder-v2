export const caseStudies = [
  {
    slug: 'checklist-builder',
    title: 'Checklist Builder — Onboarding in Minutes, Not Hours',
    problem: 'Customer onboarding checklists were bespoke and time-consuming; high variance caused delays and errors.',
    approach: [
      'Interviewed implementation engineers and success managers to map top tasks and failure modes.',
      'Authored PRD with use cases, acceptance criteria, and telemetry plan.',
      'Built internal automation (n8n + JS) to templatize and pre-fill steps.',
      'Launched iteratively; added guardrails from error logs.'
    ],
    outcomes: [
      'Setup time: 2 hours → 2 minutes (~98% faster).',
      'Adopted by 15+ enterprise accounts within first quarter.',
      'Reduced onboarding variance; fewer handoff errors.'
    ],
    tags: ['PRD', 'Automation', 'Adoption', 'Onboarding']
  },
  {
    slug: 'workflow-cloner',
    title: 'Workflow Cloner — Best Practices at the Speed of Copy',
    problem: 'Rolling out proven workflows to new accounts required manual rebuilds.',
    approach: [
      'Catalogued high-performing workflows; defined param schema.',
      'PRD: idempotent cloning, conflict handling, audit trail.',
      'Implemented with API orchestrations; added preflight checks.'
    ],
    outcomes: [
      'Deployment time reduced by ~50%.',
      'Improved cross-account consistency and auditability.'
    ],
    tags: ['Scale', 'Reliability', 'APIs']
  },
  {
    slug: 'knowledge-agent',
    title: 'Knowledge-Agent — Faster Answers for CX',
    problem: 'Scattered docs increased time-to-answer for support.',
    approach: [
      'Mapped top search intents; designed retrieval flows.',
      'PRD included relevancy metrics and feedback loop.',
      'Shipped LLM-assisted retrieval with human-in-the-loop.'
    ],
    outcomes: [
      'Issue resolution time down ~25%.',
      'Higher first-contact resolution; improved team productivity.'
    ],
    tags: ['LLM', 'Search', 'Ops']
  },
  {
    slug: 'roofing-golden-account',
    title: 'Golden Account — Industry Template for Faster Time-to-Value',
    problem: 'New industry segment required repeatable, compliant setup at scale.',
    approach: [
      'Partnered with PM/Eng to define minimal viable template: workflows, configs, automations.',
      'Wrote PRD; designed telemetry for template coverage and drift.',
      'Clonable package with guardrails and versioning.'
    ],
    outcomes: [
      'Onboarding time reduced from ~12 weeks → ~4 weeks.',
      'Enabled repeatable scale and clearer success criteria.'
    ],
    tags: ['Templates', 'Time-to-Value', 'Telemetry']
  }
];
