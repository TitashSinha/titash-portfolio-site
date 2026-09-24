/* content.js — all copy + structured data for the portfolio.
   This is the single file to edit when updating content. To add a project,
   append to a role's `projects` array; to add a role, append to `roles`.
   The `visual` key maps to a hand-tuned SVG in app.js (SHAPES).

   Original Work by Titash Sinha — B2B Content & Marketing Operations. Please retain attribution. */

window.PORTFOLIO = {
  /* asset paths — change here, not in markup */
  assets: {
    portrait: 'assets/images/portrait.png',
    resume: 'assets/files/Content%20Strategy%20and%20Operations_Titash_2026.pdf',
  },

  name: { first: 'Titash', last: 'Sinha' },
  role: 'B2B Content & Marketing Operations',
  roleFocus: 'Content Strategy · Demand Generation · SEO/GEO · AI Workflows',
  status: 'Open to work',
  transition: 'Building on six years in content and marketing operations while developing deeper capability in GTM systems, experimentation, and workflow automation.',
  opportunity: "Open to GTM, Growth, and Founder's Office internships and transition opportunities.",

  contact: {
    email: 'titash9sinha@gmail.com',
    phone: '+91 9709 659 565',
    location: 'West Bengal, India',
    availability: 'Remote · On-site · Worldwide',
  },

  tagline: 'I build campaigns, content systems, and AI-assisted workflows that help technical products reach, engage, and convert the right buyers.',

  summary: [
    'I work across B2B content and marketing operations, turning technical products into clear campaigns, landing pages, search content, email, LinkedIn, case studies, and sales material for business and technical buyers.',
    'My experience spans demand generation, SEO/GEO/AEO, outbound support, analytics, editorial governance, and AI-assisted workflows across SaaS, fintech, BFSI, payments, and enterprise technology.',
  ],

  quote: {
    text: 'Good content strategy is invisible. What you notice is that the product suddenly makes sense — and stays that way after you leave.',
  },

  competencies: [
    { title: 'B2B Campaigns & Demand Generation', desc: 'Campaign planning and production across search, landing pages, email, LinkedIn, case studies, product pages, and sales collateral.' },
    { title: 'SEO, GEO & Content Strategy', desc: 'Keyword research, intent mapping, content audits, answer-first structures, and optimization for organic and AI-assisted discovery.' },
    { title: 'AI Workflows & Governance', desc: 'Auditor Pro, reusable prompt systems, source-grounded review, and human approval workflows that support quality at scale.' },
    { title: 'Content Operations & Leadership', desc: 'Concurrent delivery, editorial systems, cross-functional handoffs, and bounded Acting Team Lead coordination.' },
  ],

  roles: [
    {
      title: 'Content Associate',
      company: 'LexiConn Content Services Pvt Ltd',
      location: 'Remote',
      functionalScope: 'B2B Marketing · Content Operations · Demand Generation',
      subRole: 'Acting Team Lead · Feb 2025 – Aug 2025',
      date: 'Mar 2023 — Sep 2026',
      scope: 'My official title was Content Associate, with functional work spanning multi-channel B2B campaigns, content operations, demand generation, SEO/GEO/AEO, outbound support, marketing analytics, sales enablement, and AI-assisted editorial governance.',
      projects: [
        {
          name: 'Marezi · AI-Driven Web Copywriting',
          visual: 'marezi',
          href: 'projects/marezi.html',
        },
        {
          name: 'Worldline · Payment Gateway API Developer Guide',
          badge: 'Featured snippet',
          visual: 'worldline',
          href: 'projects/worldline.html',
        },
        {
          name: 'AI-Powered Content QC Tool',
          badge: 'Flagship build',
          featured: true,
          visual: 'qc',
          href: 'projects/ai-qc-tool.html',
        },
        {
          name: 'Content Pipeline Tracker',
          badge: 'Flagship build',
          featured: true,
          visual: 'pipeline',
          href: 'projects/content-pipeline-tracker.html',
        },
        {
          name: 'HDFC · Figma UI/UX Microcopy',
          badge: 'Flagship build',
          featured: true,
          visual: 'hdfc',
          href: 'projects/hdfc.html',
        },
        {
          name: 'Website Lifecycle Copy & AI Chatbot Enablement',
          visual: 'generali',
          href: 'projects/futuregenerali.html',
        },
        {
          name: 'Signifikant · Social Media Content Strategy',
          visual: 'signifikant',
          href: 'projects/signifikant.html',
        },
        {
          name: 'Mastertrust · Trading Platform Copy',
          visual: 'mastertrust',
          href: 'projects/mastertrust.html',
        },
        {
          name: 'Avalani Insurance · Website Copy',
          visual: 'avalani',
          href: 'projects/avalani.html',
        },
      ],
      responsibilities: [
        'Planned and produced multi-channel B2B programs across SEO, landing pages, email, LinkedIn, case studies, reports, product pages, sales collateral, and executive content for SaaS, AI, fintech, payments, and enterprise-technology accounts.',
        'Supported a six-month demand-generation program for an AI SaaS product within a $5,000 monthly budget, spanning paid search, landing pages, conversion-focused content, and campaign reporting.',
        'Supported outbound targeting to 200+ pre-seed and Series A founders, contributing to two startup conversions into paying clients.',
        'Ran keyword, search-intent, and content-gap research that contributed to approximately 2× organic traffic growth, Google AI Overview visibility for Worldline, and a first-place target-query ranking for Marezi.',
        'Designed and shipped Auditor Pro, an AI-assisted content QC system used by 19 strategists, editors, and writers, reducing revision rounds by approximately 40–50%.',
        'Produced 15–20 SEO articles and 5+ long-form assets per month across regulated and technical sectors.',
        'Coordinated work across writers, design, development, sales, and client teams; served as Acting Team Lead from Feb 2025 to Aug 2025, managing three writers and one graphic designer.',
      ],
    },
    {
      title: 'Content Writer & UI/UX Copywriter',
      company: 'Matrix Tech Solutions Pvt Ltd',
      date: 'Sep 2019 — Jan 2022',
      location: 'Kolkata, India',
      scope: "Wrote across the full B2B SaaS content stack — product copy, sales enablement, blogs, and landing pages — for a roster of fast-moving Indian startups. The work that built the discipline: shipping copy weekly and keeping voice consistent across surfaces.",
      projects: [
        {
          name: 'Jupiter Money · Product & Brand Copy',
          visual: 'jupiter',
          href: 'projects/jupiter-money.html',
        },
        {
          name: 'Paperflite · Sales Enablement',
          visual: 'paperflite',
          href: 'projects/paperflite.html',
        },
        {
          name: 'Advertorial & Editorial Content',
          visual: 'advertorial',
          href: 'projects/advertorial.html',
        },
      ],
      responsibilities: [
        'Shipped landing pages, in-product copy, and email sequences for 8+ B2B SaaS clients on weekly cadences.',
        'Produced whitepapers, eBooks, and case studies for US, UK, and Middle East B2B software clients on a weekly cadence, adapting brand voice across multiple industries.',
        'Built and maintained per-client style sheets and tone-of-voice documents.',
        'Worked directly with product, design, and marketing teams across India and South Asia.',
      ],
    },
    {
      title: 'Freelance Copywriter',
      company: 'Self-Employed',
      date: '2016 — 2019',
      location: 'Remote',
      scope: "Cut on a wide mix of brief-driven work: website copy and brochures for SME clients, and a steady run of YouTube podcast scripts for independent creators. The variety rendered an early discipline — reading a brief properly and writing to the audience which actually exists, rather than the one assumed.",
      responsibilities: [
        'Website copy and brochure projects for SME clients across India.',
        'Long-form YouTube podcast scripts for independent content creators.',
        'Built the personal editorial standards which later carried into agency work.',
      ],
    },
  ],

  skills: [
    'B2B Campaign Planning',
    'Content & Marketing Operations',
    'Demand Generation',
    'SEO, GEO & AEO',
    'Landing Pages & Conversion Optimization',
    'Marketing Analytics',
    'CRM & Pipeline Tracking',
    'Sales Enablement',
    'AI Workflow Development',
    'Editorial Governance',
  ],

  toolGroups: [
    {
      name: 'AI & Automation',
      tools: [
        { name: 'ChatGPT', logo: 'assets/logos/chatgpt.svg' },
        { name: 'Claude', logo: 'assets/logos/claude.svg' },
        { name: 'Gemini' },
        { name: 'Perplexity', logo: 'assets/logos/perplexity.svg' },
        { name: 'Ollama' },
        { name: 'Cursor' },
        { name: 'Firecrawl' },
        { name: 'n8n' },
      ],
    },
    {
      name: 'Marketing & Analytics',
      tools: [
        { name: 'Google Ads' },
        { name: 'GA4', logo: 'assets/logos/google-analytics.svg' },
        { name: 'Google Tag Manager' },
        { name: 'Google Search Console' },
        { name: 'SEMrush', logo: 'assets/logos/semrush.svg' },
        { name: 'Ahrefs' },
        { name: 'Looker Studio' },
        { name: 'Microsoft Clarity' },
      ],
    },
    {
      name: 'CRM & Outbound',
      tools: [
        { name: 'HubSpot' },
        { name: 'Apollo' },
        { name: 'LinkedIn Sales Navigator' },
        { name: 'Hunter.io' },
        { name: 'Skylead' },
      ],
    },
    {
      name: 'Content & Production',
      tools: [
        { name: 'WordPress', logo: 'assets/logos/wordpress.svg' },
        { name: 'Strapi' },
        { name: 'Canva', logo: 'assets/logos/canva.svg' },
        { name: 'Figma', logo: 'assets/logos/figma.svg' },
        { name: 'ElevenLabs', logo: 'assets/logos/elevenlabs.svg' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Git' },
        { name: 'GitHub', logo: 'assets/logos/github.svg' },
      ],
    },
  ],

  languages: [
    { name: 'English', level: 'Professional', value: 95 },
    { name: 'Hindi',   level: 'Native',       value: 100 },
    { name: 'Bengali', level: 'Native',       value: 100 },
  ],

  education: [
    { name: 'B.Sc — Mathematics',                   detail: 'Mahamaya Technical University (MTUN), Noida, India — 2019' },
    { name: 'Professional Copywriting Certificate', detail: 'Alan Sharpe, Udemy — 2025' },
    { name: 'Introduction to Generative AI',        detail: 'Google Cloud Skills Boost — 2024' },
  ],

  /* `key` maps to a branded glyph tile in app.js (SOCIALS) */
  socials: [
    { key: 'LinkedIn', href: 'https://linkedin.com/in/titashsinha13' },
    { key: 'X',        href: 'https://x.com/IamGlitchedAF' },
    { key: 'GitHub',   href: 'https://github.com/TitashSinha' },
    { key: 'Sheets',   href: 'https://docs.google.com/spreadsheets/d/1XShVbjFH53N-KIyUOIot3x3_7_Daw5x_9LvM_J0KsUo/edit?gid=361504315#gid=361504315' },
  ],
};

/* Content data — Original Work by Titash Sinha. Please retain attribution. */
