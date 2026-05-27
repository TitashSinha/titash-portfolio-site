/* content.js — all copy + structured data for the portfolio.
   This is the single file to edit when updating content. To add a project,
   append to a role's `projects` array; to add a role, append to `roles`.
   The `visual` key maps to a hand-tuned SVG in app.js (PROJECT_VISUALS).

   Original Work by Titash Sinha — AI Content Strategist. Please retain attribution. */

window.PORTFOLIO = {
  /* asset paths — change here, not in markup */
  assets: {
    portrait: 'assets/images/portrait.png',
    resume: 'assets/files/Titash_Sinha_Resume_Master.pdf',
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
    "I build AI content systems: prompt workflows, content QC pipelines, and tooling for fintech, BFSI, enterprise IT, and B2B SaaS. Six years of writing inside regulated industries shaped how those systems should work. The engineering makes them run at scale. This portfolio itself was built end-to-end with AI tools, without a traditional development workflow.",
    "Last year I shipped a QC tool that is now used daily by nineteen people on my team. It reduced revision rounds by forty to fifty percent by combining a configurable rules engine with editorial judgment built over years of hands-on work.",
    "The work now extends into GEO: structuring content to surface inside AI-generated answers, not simply rank in search. Style guides that scale. Content models that stay consistent. Voice frameworks that survive handoffs.",
    "The tooling took the repetition. The judgement stays mine.",
  ],

  quote: {
    text: 'Good content strategy is invisible. What you notice is that the product suddenly makes sense — and stays that way after you leave.',
  },

  roles: [
    {
      id: 'lexiconn',
      title: 'AI Content Strategist',
      company: 'LexiConn Content Services Pvt Ltd',
      subRole: 'Acting Team Lead · Feb 2025 – Aug 2025',
      date: 'Mar 2022 — Present',
      scope: "AI-first from brief to handoff. Content strategy, editorial systems, and LLM-based tooling built for enterprise B2B clients across fintech, BFSI, IT services, and SaaS. Day-to-day work spans UX copy, industry reports, and landing pages — anchored by AI workflows which compound quality across every account touched, and a QC system which now runs as live infrastructure for the team.",
      projects: [
        {
          name: 'AI-Powered Content QC Tool',
          desc: 'A live editorial QC system — adopted by 19 team members — that catches voice, factual, and structural issues before client review.',
          badge: 'Flagship build',
          featured: true,
          visual: 'qc',
          href: 'projects/ai-qc-tool.html',
        },
        {
          name: 'Content Pipeline Tracker',
          desc: 'A content operations dashboard with role-based workflows, project tracking, and administrative oversight — built to replace spreadsheet-based delivery management.',
          badge: 'Flagship build',
          featured: true,
          visual: 'pipeline',
          href: 'projects/content-pipeline-tracker.html',
        },
        {
          name: 'Marezi · AI-Driven Web Copywriting',
          desc: 'Full website copy for an Africa-focused customer experience platform (formerly Q-SYS) serving banks, hospitals, and restaurants — written and structured using an AI-assisted research and drafting workflow.',
          visual: 'marezi',
          href: 'projects/marezi.html',
        },
        {
          name: 'FutureGenerali · Website Lifecycle Copy & AI Chatbot Enablement',
          desc: 'Website copy and AI chatbot conversational flows — designed in Figma, structured around pre-determined decision trees for a regulated insurance context.',
          visual: 'generali',
          href: 'projects/futuregenerali.html',
        },
        {
          name: 'Signifikant · Social Media Content Strategy',
          desc: 'LinkedIn content strategy and execution for a B2B industrial tech brand — including carousels, thought leadership posts, and employer branding.',
          visual: 'signifikant',
          href: 'projects/signifikant.html',
        },
      ],
      responsibilities: [
        'Designed and shipped an AI content QC system now used daily by 19 strategists, editors, and writers; revision rounds reduced by 40–50%.',
        'Owned editorial direction on enterprise accounts including HDFC, FutureGenerali, Marezi, Micron India, Hexaware, and Sakon.',
        'Authored voice frameworks and content models that survived agency-to-in-house handovers without rework.',
        'Acted as Team Lead Feb–Aug 2025: managed 3 writers and 1 graphic designer, ran feedback cycles, and maintained delivery timelines across all concurrent accounts.',
        'Built brief-to-handoff templates and prompt systems that cut average kickoff time by roughly 40%.',
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
          desc: 'Onboarding flows, microcopy, and brand-led launch pages for the Jupiter Money neobank.',
          visual: 'jupiter',
          href: 'projects/jupiter-money.html',
        },
        {
          name: 'Paperflite · Sales Enablement',
          desc: 'Sales content stories, landing pages, and product walkthroughs for the Paperflite content intelligence platform.',
          visual: 'paperflite',
          href: 'projects/paperflite.html',
        },
        {
          name: 'Advertorial & Editorial Content',
          desc: 'Research-driven advertorials and product reviews published on Geeky Gadgets, Amazon Business, and India.com — written to inform and convert.',
          visual: 'advertorial',
          href: 'projects/advertorial.html',
        },
      ],
      responsibilities: [
        'Shipped landing pages, in-product copy, and email sequences for 8+ B2B SaaS clients on weekly cadences.',
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
    'LLM Tool Development & Deployment',
    'Content Operations',
    'Answer Engine Optimization (GEO)',
    'Editorial QC & Style Guides',
    'Voice & Brand Systems',
    'UX Writing & Microcopy',
  ],

  tools: [
    { name: 'Claude',             logo: 'assets/logos/claude.svg' },
    { name: 'Claude Code',        logo: 'assets/logos/claude-code.svg' },
    { name: 'Claude Design',      logo: 'assets/logos/claude-design.svg' },
    { name: 'ChatGPT',            logo: 'assets/logos/chatgpt.svg' },
    { name: 'Notebook LM',        logo: 'assets/logos/notebooklm.svg' },
    { name: 'ElevenLabs',         logo: 'assets/logos/elevenlabs.svg' },
    { name: 'Figma',              logo: 'assets/logos/figma.svg' },
    { name: 'Google Antigravity', logo: 'assets/logos/antigravity.svg' },
    { name: 'Notion',             logo: 'assets/logos/notion.svg' },
    { name: 'Canva',              logo: 'assets/logos/canva.svg' },
    { name: 'Perplexity',         logo: 'assets/logos/perplexity.svg' },
    { name: 'GitHub Copilot',     logo: 'assets/logos/github-copilot.svg' },
  ],

  languages: [
    { name: 'English', level: 'Professional', value: 95 },
    { name: 'Hindi',   level: 'Native',       value: 100 },
    { name: 'Bengali', level: 'Native',       value: 100 },
  ],

  education: [
    { name: 'B.Sc Computer Science',               detail: "St. Xavier's College, Ranchi — 2016" },
    { name: 'Professional Copywriting Certificate', detail: 'Alan Sharpe, Udemy — 2025' },
    { name: 'Introduction to Generative AI',        detail: 'Google Cloud Skills Boost' },
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
