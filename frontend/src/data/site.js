export const navItems = [
  { path: '/', title: 'Home' },
  { path: '/work', title: 'Case Studies' },
  { path: '/resume', title: 'Resume' },
  { path: '/writing', title: 'Writing' },
  { path: '/about', title: 'About' },
  { path: '/contact', title: 'Contact' }
];

export const hero = {
  headline: 'Ship what matters. Measure what moves.',
  subhead: 'Customer-obsessed Associate PM with 1+ year in B2B SaaS. I turn messy feedback into sharp PRDs, partner with Eng/Design to ship, and track adoption to iterate fast.',
  badges: [
    'Customer → PRD → Delivery → Adoption',
    'AI/Automation for Ops',
    'B2B SaaS • FSM • Payments • Routing'
  ],
  primaryCta: { label: 'View Case Studies', href: '/work' },
  secondaryCta: { label: 'Email Me', href: 'mailto:dilithdinesh007@gmail.com' }
};

export const copy = {
  homeCta: 'I turn customer feedback into shipped features and measurable adoption.',
  metricsBanner: [
    '2h → 2m onboarding',
    '+25% feature adoption',
    '100+ CX hours saved/mo'
  ],
  contactBlurb: 'If you care about tight PRDs, reliable delivery, and clean adoption metrics, we’ll get along.'
};

export const homeSections = [
  {
    id: 'impact-metrics',
    title: 'Selected Outcomes',
    bullets: [
      'Onboarding setup: 2 hours → 2 minutes via internal AI-assisted tool (80% faster across 15+ enterprise accounts).',
      'Golden Account (industry template): onboarding cycle cut from 12 weeks → 4 weeks; enabled repeatable scale.',
      'Routing/Dispatch adoption: +25% within 6 weeks via targeted activation metrics & comms.',
      'Automation suite saved 100+ CX hours/month (Checklist Builder, Workflow Cloner, Knowledge-Agent).'
    ]
  },
  {
    id: 'operating-system',
    title: 'How I Work',
    pillars: [
      { name: 'Discovery', desc: 'Personas, JTBD, problem framing, qualitative + quantitative signals.' },
      { name: 'PRDs', desc: 'Crisp use cases, acceptance criteria, edge cases, analytics instrumentation plan.' },
      { name: 'Delivery', desc: 'Agile backlog, risk surfacing, unblockers, UAT, launch checklists.' },
      { name: 'Metrics', desc: 'Activation, adoption, retention, time-to-value, error/latency; close the loop.' }
    ]
  }
];

export const about = {
  short: 'Customer Product Manager at Zuper bridging CX ↔ Product. I design feedback pipelines, write PRDs, and partner with Eng/Design to ship. I also build AI/automation tools when that’s the fastest path to value.',
  details: [
    'B.Tech CSE — VIT Vellore',
    'Awards: Rising Star; Zuper HEROES; introduced as CX “AI Wizard”',
    'Interests: AI-first product thinking, security/compliance workflows, field operations'
  ]
};

export const resume = {
  file: '/Dilith_Dinesh_Resume.pdf',
  sections: [
    {
      title: 'Experience — Zuper (Chennai) — Customer Product Manager (CX ↔ Product)',
      bullets: [
        'Scoped & triaged 50+ FR/SR monthly; aligned CX signals to roadmap.',
        'Authored PRDs for Routing, Payments, Dispatch Board; co-owned lifecycle with Eng/Design.',
        'Built AI-assisted onboarding + internal tools (Checklist Builder, Workflow Cloner, Knowledge-Agent).',
        'Defined adoption KPIs; improved Routing/Dispatch adoption by 25% in 6 weeks.'
      ]
    },
    {
      title: 'Skills',
      bullets: [
        'Discovery: Personas/JTBD, gap analysis, competitive intel',
        'Delivery: PRDs, acceptance criteria, agile backlog, stakeholder comms',
        'Analytics: activation, adoption, retention, performance',
        'Tools: Figma, SQL, APIs, n8n, JavaScript'
      ]
    }
  ]
};

export const posts = [
  { slug: 'from-noise-to-backlog', title: 'From Noise to Backlog', summary: 'Structuring feedback funnels that scale.', tag: 'Feedback Ops' },
  { slug: 'prds-people-read', title: 'PRDs People Read', summary: 'Use cases, acceptance criteria, and analytics plan—tight and testable.', tag: 'PRD' },
  { slug: 'activation-before-adoption', title: 'Activation Before Adoption', summary: 'A simple ladder for time-to-value.', tag: 'Metrics' }
];

export const contact = {
  cta: 'Open to Associate PM roles in B2B SaaS (security/compliance-adjacent preferred).',
  email: 'dilithdinesh007@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/dilithdinesh' }
  ]
};
