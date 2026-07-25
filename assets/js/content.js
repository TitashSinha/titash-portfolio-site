/* content.js — all copy + structured data for the portfolio.
   This is the single file to edit when updating content. To add a project,
   append to a role's `projects` array; to add a role, append to `roles`.
   The `visual` key maps to a hand-tuned SVG in app.js (PROJECT_VISUALS).

   Original Work by Titash Sinha — AI Content Strategist. Please retain attribution. */

window.PORTFOLIO = {
  /* asset paths — change here, not in markup */
  assets: {
    portrait: 'assets/images/portrait.png',
    resume: 'assets/files/Titash_Sinha_ContentStrategist_Master.pdf',
    sheet: 'https://docs.google.com/spreadsheets/d/1XShVbjFH53N-KIyUOIot3x3_7_Daw5x_9LvM_J0KsUo/edit?gid=361504315#gid=361504315',
  },

  name: { first: 'Titash', last: 'Sinha' },
  role: 'AI Content Strategist',
  status: 'Open to work',

  contact: {
    email: 'titash9sinha@gmail.com',
    phone: '+91 9709 659 565',
    location: 'West Bengal, India',
    availability: 'Remote · On-site · Worldwide',
  },

  tagline: 'I think in systems before sentences.',

  summary: [
    "I bridge the gap between complex product value and scalable content execution. With six years of experience in high-regulation sectors—fintech, BFSI, and enterprise SaaS—I don't just write; I engineer the systems that govern, produce, and distribute high-impact content.",
    "My work is AI-native by design. I build end-to-end workflows—from automated prompt engineering and QC pipelines to GEO (Generative Engine Optimization) strategies eliminating bottlenecks and ensure brand consistency at scale.",
    "The tooling took the repetition. The judgement stays mine.",
  ],

  quote: {
    text: 'Good content strategy is invisible. What you notice is that the product suddenly makes sense — and stays that way after you leave.',
  },

  competencies: [
    { title: 'Systems Engineering', desc: 'Built proprietary QC tools that reduced content revision cycles by 40–50% (now a commercialized product, Auditor Pro).' },
    { title: 'Product Marketing & GTM', desc: 'Led the end-to-end content and distribution infrastructure for seed-stage AI products (Card2Connect), including sales enablement, objection handling, and buyer-segmented journeys.' },
    { title: 'Content Operations', desc: 'Governance, CMS management, and workflow automation that transforms fragmented editorial efforts into a unified, high-output machine.' },
    { title: 'GEO & AI Strategy', desc: 'Architecting content models specifically for AI-generated answer engines to ensure brand visibility where traditional search metrics fall short.' },
  ],

  roles: [
    {
      id: 'lexiconn',
      title: 'AI Content Strategist',
      company: 'LexiConn Content Services Pvt Ltd',
      location: 'Remote',
      subRole: 'Acting Team Lead · Feb 2025 – Aug 2025',
      date: 'Mar 2022 — Present',
      scope: "AI-first from brief to handoff. Content strategy, editorial systems, and LLM-based tooling built for enterprise B2B clients across fintech, BFSI, IT services, and SaaS. In 2026, LexiConn launched an AI automation suite and the role shifted into product marketing — building content and distribution infrastructure for a four-product suite at seed stage, from zero. Day-to-day work spans UX copy, industry reports, product marketing, and landing pages — anchored by AI workflows which compound quality across every account touched.",
      projects: [
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
          name: 'Marezi · AI-Driven Web Copywriting',
          visual: 'marezi',
          href: 'projects/marezi.html',
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
          name: 'Worldline · Payment Gateway API Developer Guide',
          badge: 'Featured snippet',
          visual: 'worldline',
          href: 'projects/worldline.html',
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
        'Shifted into product marketing for LexiConn AI at seed stage — built end-to-end content and distribution infrastructure for Card2Connect across sales enablement, objection handling, multi-audience segmented content, and channel-mapped distribution, all oriented around a single conversion metric.',
        'Designed and shipped an AI content QC system now used daily by 19 strategists, editors, and writers; revision rounds reduced by 40–50%.',
        'Owned editorial direction on enterprise accounts including HDFC, FutureGenerali, Marezi, Micron India, Hexaware, and Sakon.',
        'Authored voice frameworks and content models that survived agency-to-in-house handovers without rework.',
        'Acted as Team Lead Feb–Aug 2025: managed 3 writers and 1 graphic designer, ran feedback cycles, and maintained delivery timelines across all concurrent accounts.',
        'Built brief-to-handoff templates and prompt systems that cut average kickoff time by roughly 40%.',
        'Shipped landing pages, in-product copy, UI/UX copy, and social media assets for 3–5 B2B SaaS clients on weekly cadences.',
        'Coordinated a 3-writer overnight desk for MediaCo — a LexiConn engagement that became a yearlong contract — publishing 200+ sub-500-word articles per month via WordPress for syndicated Yahoo and MSN brands, using AI-assisted drafting with human-in-the-loop QC.',
        'Delivered 25–30 optimized articles and 10+ long-form assets per month, including insurance content for FutureGenerali published via Strapi CMS.',
        'Ran content audits and keyword and search-intent research in SEMrush and Search Console to close content gaps and inform on-page SEO — contributing to 2× organic traffic growth for banking and insurance clients.',
      ],
    },
    {
      id: 'matrix',
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
      id: 'freelance',
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
    'AI Workflow Development',
    'Prompt Engineering & Context Design',
    'Content Operations',
    'Data-Driven Content Strategy',
    'SEO & Search-Intent Research',
    'Content Performance Analysis',
    'Answer Engine Optimization (GEO)',
    'Editorial QC & Style Guides',
    'Voice & Brand Systems',
    'UX Writing & Microcopy',
  ],

  tools: [
    { name: 'Claude',           logo: 'assets/logos/claude.svg' },
    { name: 'ChatGPT',          logo: 'assets/logos/chatgpt.svg' },
    { name: 'Perplexity',       logo: 'assets/logos/perplexity.svg' },
    { name: 'Notebook LM',      logo: 'assets/logos/notebooklm.svg' },
    { name: 'Semrush',          logo: 'assets/logos/semrush.svg' },
    { name: 'Google Analytics', logo: 'assets/logos/google-analytics.svg' },
    { name: 'WordPress',        logo: 'assets/logos/wordpress.svg' },
    { name: 'Figma',            logo: 'assets/logos/figma.svg' },
    { name: 'Notion',           logo: 'assets/logos/notion.svg' },
    { name: 'Canva',            logo: 'assets/logos/canva.svg' },
    { name: 'ElevenLabs',       logo: 'assets/logos/elevenlabs.svg' },
    { name: 'Claude Design',    logo: 'assets/logos/claude-design.svg' },
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
