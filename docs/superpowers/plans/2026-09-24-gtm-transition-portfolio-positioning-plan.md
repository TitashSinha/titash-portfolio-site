# GTM Transition Portfolio Positioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the portfolio around Titash's proven B2B content and marketing-operations experience while making the move toward GTM, Growth, and Founder's Office opportunities visible without claiming established GTM, RevOps, CRM, or automation ownership.

**Architecture:** Keep the existing static HTML/CSS/vanilla-JavaScript site. Extend `window.PORTFOLIO` with explicit positioning and grouped-tool fields, update the existing render functions to consume them, and add a small Node verification script that protects evidence-bound copy, metadata, routes, and the CV contract. Preserve the current visual system and all project pages.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node.js verification, PowerShell, Git, Poppler/PDF tooling.

## Global Constraints

- Preserve `Content Associate` as the official LexiConn title.
- Preserve `Mar 2023 — Sep 2026` and `Acting Team Lead · Feb 2025 – Aug 2025`.
- Do not claim GTM Engineer, Growth, RevOps, CRM administration, lead-routing ownership, lifecycle ownership, revenue attribution ownership, or production automation ownership.
- Use only claims supported by `B:\Downloads\Titash Sinha — Resume 2026.pdf` or already verified portfolio evidence.
- Do not add a demand-generation case-study page in this pass; the resume does not contain enough public-safe detail for a full case study. Reorder existing projects to foreground marketing/search proof before systems proof.
- Preserve all 12 project routes, the homepage, and the stable repository CV path.
- Use `apply_patch` for text edits. Use `Copy-Item -LiteralPath` only for the binary PDF replacement.
- Do not push until the full local verification suite passes.

---

## Task 1: Add a positioning contract test

**Files:**

- Create: `scripts/verify-positioning.mjs`
- Test: `scripts/verify-positioning.mjs`

- [ ] Create `scripts/verify-positioning.mjs` with the following complete content:

```js
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8');
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};
const check = (condition, message) => {
  if (!condition) fail(message);
};

const contentSource = read('assets/js/content.js');
const sandbox = { window: {} };
vm.runInNewContext(contentSource, sandbox, { filename: 'assets/js/content.js' });
const P = sandbox.window.PORTFOLIO;

check(P.role === 'B2B Content & Marketing Operations', 'approved primary role is missing');
check(P.roleFocus === 'Content Strategy · Demand Generation · SEO/GEO · AI Workflows', 'approved supporting line is missing');
check(P.transition === 'Building on six years in content and marketing operations while developing deeper capability in GTM systems, experimentation, and workflow automation.', 'transition statement is missing');
check(P.opportunity === "Open to GTM, Growth, and Founder's Office internships and transition opportunities.", 'opportunity statement is missing');

const lexiconn = P.roles.find((role) => role.company === 'LexiConn Content Services Pvt Ltd');
check(Boolean(lexiconn), 'LexiConn role is missing');
if (lexiconn) {
  check(lexiconn.title === 'Content Associate', 'official LexiConn title changed');
  check(lexiconn.date === 'Mar 2023 — Sep 2026', 'LexiConn dates changed');
  check(lexiconn.functionalScope === 'B2B Marketing · Content Operations · Demand Generation', 'LexiConn functional scope is missing');
  check(lexiconn.subRole === 'Acting Team Lead · Feb 2025 – Aug 2025', 'bounded leadership period changed');
  check(lexiconn.responsibilities.some((item) => item.includes('15–20 SEO articles and 5+ long-form assets per month')), 'resume-backed production volume is missing');
}

check(Array.isArray(P.toolGroups) && P.toolGroups.length === 4, 'four grouped tool categories are required');
check(P.skills.includes('CRM & Pipeline Tracking'), 'CRM and pipeline exposure must be described as a skill, not ownership');

const combinedCopy = JSON.stringify(P);
for (const forbidden of [
  'AI Content Strategist',
  'Systems Engineering',
  '25–30 optimized articles',
  '10+ long-form assets per month',
]) {
  check(!combinedCopy.includes(forbidden), `superseded copy remains: ${forbidden}`);
}

for (const role of P.roles) {
  for (const project of role.projects || []) {
    check(fs.existsSync(path.join(root, project.href)), `missing project route: ${project.href}`);
  }
}

const resumePath = decodeURIComponent(P.assets.resume);
check(fs.existsSync(path.join(root, resumePath)), `missing CV: ${resumePath}`);

const appSource = read('assets/js/app.js');
check(appSource.includes('esc(P.roleFocus)'), 'hero does not render the supporting line');
check(appSource.includes('esc(P.transition)'), 'summary does not render the transition statement');
check(appSource.includes('esc(P.opportunity)'), 'summary does not render the opportunity statement');
check(appSource.includes('role.functionalScope'), 'experience does not render functional scope');
check(appSource.includes('P.toolGroups.map'), 'skills section does not render grouped tools');
check(appSource.includes('download="Titash_Sinha_Resume_2026.pdf"'), 'CV download filename is outdated');

const indexSource = read('index.html');
check(indexSource.includes('<title>Titash Sinha — B2B Content & Marketing Operations</title>'), 'browser title is inconsistent');
check(indexSource.includes('<meta property="og:title" content="Titash Sinha — B2B Content & Marketing Operations" />'), 'Open Graph title is inconsistent');
check(indexSource.includes('"jobTitle": "B2B Content and Marketing Operations"'), 'structured-data job title is inconsistent');
check(indexSource.includes('?v=20260924'), 'asset cache version was not updated');

if (!process.exitCode) console.log('PASS: positioning, evidence, routes, metadata, and CV contract verified');
```

- [ ] Run the contract test before implementation and confirm it fails on the old positioning:

```powershell
node scripts/verify-positioning.mjs
```

Expected: one or more `FAIL:` lines for the primary role, supporting line, renderer fields, metadata, and download filename.

---

## Task 2: Replace the content model with evidence-bound GTM-transition copy

**Files:**

- Modify: `assets/js/content.js`
- Test: `scripts/verify-positioning.mjs`

- [ ] Update the file attribution, top-level positioning fields, summary, and opportunity fields to exactly:

```js
  Original Work by Titash Sinha — B2B Content & Marketing Operations. Please retain attribution. */

window.PORTFOLIO = {
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

  tagline: 'I build campaigns, content systems, and AI-assisted workflows that help technical products reach, engage, and convert the right buyers.',

  summary: [
    'I work across B2B content and marketing operations, turning technical products into clear campaigns, landing pages, search content, email, LinkedIn, case studies, and sales material for business and technical buyers.',
    'My experience spans demand generation, SEO/GEO/AEO, outbound support, analytics, editorial governance, and AI-assisted workflows across SaaS, fintech, BFSI, payments, and enterprise technology.',
  ],
```

- [ ] Replace the four competency entries with exactly:

```js
  competencies: [
    { title: 'B2B Campaigns & Demand Generation', desc: 'Campaign planning and production across search, landing pages, email, LinkedIn, case studies, product pages, and sales collateral.' },
    { title: 'SEO, GEO & Content Strategy', desc: 'Keyword research, intent mapping, content audits, answer-first structures, and optimization for organic and AI-assisted discovery.' },
    { title: 'AI Workflows & Governance', desc: 'Auditor Pro, reusable prompt systems, source-grounded review, and human approval workflows that support quality at scale.' },
    { title: 'Content Operations & Leadership', desc: 'Concurrent delivery, editorial systems, cross-functional handoffs, and bounded Acting Team Lead coordination.' },
  ],
```

- [ ] Update the LexiConn fields and responsibilities to exactly:

```js
      title: 'Content Associate',
      company: 'LexiConn Content Services Pvt Ltd',
      location: 'Remote',
      functionalScope: 'B2B Marketing · Content Operations · Demand Generation',
      subRole: 'Acting Team Lead · Feb 2025 – Aug 2025',
      date: 'Mar 2023 — Sep 2026',
      scope: 'My official title was Content Associate, with functional work spanning multi-channel B2B campaigns, content operations, demand generation, SEO/GEO/AEO, outbound support, marketing analytics, sales enablement, and AI-assisted editorial governance.',
```

```js
      responsibilities: [
        'Planned and produced multi-channel B2B programs across SEO, landing pages, email, LinkedIn, case studies, reports, product pages, sales collateral, and executive content for SaaS, AI, fintech, payments, and enterprise-technology accounts.',
        'Supported a six-month demand-generation program for an AI SaaS product within a $5,000 monthly budget, spanning paid search, landing pages, conversion-focused content, and campaign reporting.',
        'Supported outbound targeting to 200+ pre-seed and Series A founders, contributing to two startup conversions into paying clients.',
        'Ran keyword, search-intent, and content-gap research that contributed to approximately 2× organic traffic growth, Google AI Overview visibility for Worldline, and a first-place target-query ranking for Marezi.',
        'Designed and shipped Auditor Pro, an AI-assisted content QC system used by 19 strategists, editors, and writers, reducing revision rounds by approximately 40–50%.',
        'Produced 15–20 SEO articles and 5+ long-form assets per month across regulated and technical sectors.',
        'Coordinated work across writers, design, development, sales, and client teams; served as Acting Team Lead from Feb 2025 to Aug 2025, managing three writers and one graphic designer.',
      ],
```

- [ ] Reorder the LexiConn `projects` array without altering any project object so the existing routes appear in this order:

1. `Marezi · AI-Driven Web Copywriting`
2. `Worldline · Payment Gateway API Developer Guide`
3. `AI-Powered Content QC Tool`
4. `Content Pipeline Tracker`
5. `HDFC · Figma UI/UX Microcopy`
6. `Website Lifecycle Copy & AI Chatbot Enablement`
7. `Signifikant · Social Media Content Strategy`
8. `Mastertrust · Trading Platform Copy`
9. `Avalani Insurance · Website Copy`

- [ ] Replace `skills` and `tools` with the following exact structures:

```js
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
```

- [ ] Run a syntax check:

```powershell
node --check assets/js/content.js
```

Expected: exit code `0`, no output.

---

## Task 3: Render the new positioning and grouped tool model

**Files:**

- Modify: `assets/js/app.js:281-344`
- Modify: `assets/js/app.js:418-443`
- Modify: `assets/css/portfolio.css:155-159`
- Modify: `assets/css/portfolio.css:237-260`
- Modify: `assets/css/portfolio.css:307-376`
- Modify: `assets/css/portfolio.css:505-533`
- Modify: `assets/css/portfolio.css:719-794`
- Test: `scripts/verify-positioning.mjs`

- [ ] In `renderHero()`, render the supporting line immediately after `.hero-role`:

```js
          '<p class="hero-role">' + esc(P.role) + '</p>' +
          '<p class="hero-focus">' + esc(P.roleFocus) + '</p>' +
```

- [ ] In `renderSummary()`, build and render the two explicit direction notes:

```js
    var direction = '<div class="positioning-notes">' +
      '<p class="transition-note">' + esc(P.transition) + '</p>' +
      '<p class="opportunity-note">' + esc(P.opportunity) + '</p>' +
      '</div>';
```

Replace the summary content line with:

```js
      '<div class="reveal reveal-d1"><p class="summary-tagline">' + tagline + '</p>' + paras + direction + '</div>' +
```

- [ ] In `roleBlock()`, add functional scope before the bounded leadership marker:

```js
    var functionalScope = role.functionalScope
      ? '<div class="role-functional">' + esc(role.functionalScope) + '</div>'
      : '';
```

Render `functionalScope + subRole` immediately after `.role-company`.

- [ ] Replace the old `P.tools.map` block in `renderSkills()` with:

```js
    var toolGroups = P.toolGroups.map(function (group) {
      var tools = group.tools.map(function (tool) {
        var logo = tool.logo
          ? '<img src="' + esc(tool.logo) + '" alt="" loading="lazy">'
          : '';
        return '<div class="tool-chip">' + logo + '<span>' + esc(tool.name) + '</span></div>';
      }).join('');
      return '<div class="tool-group"><div class="tool-group-label">' + esc(group.name) + '</div>' +
        '<div class="tool-chips">' + tools + '</div></div>';
    }).join('');
```

Replace the old daily-driver label and `.tools-row` output with:

```js
      '<div class="selected-label tools-label">Toolbox by function</div>' +
      '<div class="tool-groups reveal">' + toolGroups + '</div>' +
```

- [ ] Add these styles beside the existing hero, summary, experience, and tools sections:

```css
.hero-focus{
  max-width:680px;
  margin:-8px 0 32px;
  color:var(--text-dim);
  font-size:clamp(16px, 1.6vw, 21px);
  line-height:1.45;
  letter-spacing:.01em;
}
.positioning-notes{
  display:grid;
  gap:12px;
  max-width:720px;
  margin-top:36px;
}
.transition-note,
.opportunity-note{
  padding:16px 18px;
  border:1px solid rgba(255,179,71,.18);
  border-radius:14px;
  background:rgba(255,179,71,.05);
  color:var(--text-dim);
  font-size:14px;
  line-height:1.55;
}
.opportunity-note{
  color:var(--amber-2);
  border-color:rgba(255,179,71,.3);
}
.role-functional{
  grid-column:2;
  margin-top:10px;
  color:var(--text-dim);
  font-size:12px;
  line-height:1.5;
  letter-spacing:.1em;
  text-transform:uppercase;
}
.tools-label{margin:0 0 24px}
.tool-groups{
  display:grid;
  gap:28px;
  max-width:820px;
}
.tool-group-label{
  margin-bottom:12px;
  color:var(--amber);
  font-size:11px;
  font-weight:500;
  letter-spacing:.16em;
  text-transform:uppercase;
}
.tool-chips{display:flex;flex-wrap:wrap;gap:10px}
.tool-chip{
  display:inline-flex;
  align-items:center;
  gap:8px;
  min-height:38px;
  padding:8px 12px;
  border:1px solid rgba(255,255,255,.08);
  border-radius:999px;
  background:rgba(255,255,255,.025);
  color:var(--text-dim);
  font-size:13px;
}
.tool-chip img{width:20px;height:20px;object-fit:contain}
```

- [ ] Remove the now-unused `.tools-row`, `.tool`, `.tool-icon`, and `.tool-name` rules. Remove the mobile `.tools-row` override. Add this mobile adjustment inside the existing media query:

```css
  .hero-focus{margin-top:-10px}
  .tool-groups{gap:24px}
```

- [ ] Update the four comments above `DECOS` so they match the new competency names. Do not alter the decorative SVGs.

- [ ] Remove logo files that become unreferenced after the grouped-tool change:

```powershell
$unusedLogos = @(
  'assets\logos\claude-design.svg',
  'assets\logos\notebooklm.svg',
  'assets\logos\notion.svg'
)
foreach ($logo in $unusedLogos) {
  if (Select-String -Path index.html,assets\js\*.js,projects\*.html -Pattern ([regex]::Escape((Split-Path $logo -Leaf))) -Quiet) {
    throw "Still referenced: $logo"
  }
}
Remove-Item -LiteralPath $unusedLogos
```

- [ ] Run syntax and positioning checks:

```powershell
node --check assets/js/content.js
node --check assets/js/app.js
node scripts/verify-positioning.mjs
```

Expected before Tasks 4–5: syntax checks pass; the positioning test may still report only metadata, cache version, and CV download filename failures.

---

## Task 4: Align metadata and cache versions

**Files:**

- Modify: `index.html:7-39`
- Modify: `index.html:31,63-64`
- Test: `scripts/verify-positioning.mjs`

- [ ] Set the browser and Open Graph titles to:

```html
<title>Titash Sinha — B2B Content & Marketing Operations</title>
<meta property="og:title" content="Titash Sinha — B2B Content & Marketing Operations" />
```

- [ ] Set both the standard and Open Graph descriptions to:

```text
Titash Sinha works across B2B content and marketing operations, demand generation, SEO/GEO, and AI-assisted workflows for SaaS and technical products.
```

- [ ] Set the JSON-LD job title to:

```json
"jobTitle": "B2B Content and Marketing Operations"
```

- [ ] Change all three asset query versions from `20260725` to `20260924`.

- [ ] Run:

```powershell
node scripts/verify-positioning.mjs
```

Expected before Task 5: only the CV download filename check may remain failing.

- [ ] Commit the positioning implementation and contract test:

```powershell
git add -- scripts/verify-positioning.mjs assets/js/content.js assets/js/app.js assets/css/portfolio.css assets/logos index.html
git commit -m "Reposition portfolio for GTM transition"
```

---

## Task 5: Replace and verify the downloadable resume

**Files:**

- Source: `B:\Downloads\Titash Sinha — Resume 2026.pdf`
- Replace: `assets/files/Content Strategy and Operations_Titash_2026.pdf`
- Modify: `assets/js/app.js:482-484`
- Test: `scripts/verify-positioning.mjs`

- [ ] Verify the source exists and record its SHA-256:

```powershell
$resumeSource = 'B:\Downloads\Titash Sinha — Resume 2026.pdf'
$resumeTarget = 'B:\Holy Grails\titash-portfolio-site\assets\files\Content Strategy and Operations_Titash_2026.pdf'
Get-Item -LiteralPath $resumeSource | Select-Object FullName,Length,LastWriteTime
Get-FileHash -Algorithm SHA256 -LiteralPath $resumeSource
```

- [ ] Copy the supplied resume to the stable site path:

```powershell
Copy-Item -LiteralPath $resumeSource -Destination $resumeTarget -Force
```

- [ ] Change the CV anchor download filename in `renderCVButton()` to:

```js
download="Titash_Sinha_Resume_2026.pdf"
```

- [ ] Prove byte identity:

```powershell
$sourceHash = (Get-FileHash -Algorithm SHA256 -LiteralPath $resumeSource).Hash
$targetHash = (Get-FileHash -Algorithm SHA256 -LiteralPath $resumeTarget).Hash
if ($sourceHash -ne $targetHash) { throw 'Resume copy is not byte-identical to the supplied PDF.' }
Write-Output "PASS: $targetHash"
```

- [ ] Use the PDF skill/runtime to inspect page count, render every page to a temporary directory, and visually check for clipping, missing fonts, blank pages, or corrupted elements. Delete only the exact temporary render directory after inspection.

- [ ] Run the full contract test:

```powershell
node scripts/verify-positioning.mjs
```

Expected:

```text
PASS: positioning, evidence, routes, metadata, and CV contract verified
```

- [ ] Commit the resume update:

```powershell
git add -- assets/files/Content Strategy and Operations_Titash_2026.pdf assets/js/app.js
git commit -m "Update portfolio resume download"
```

---

## Task 6: Run complete regression checks and publish

**Files:**

- Verify: `index.html`
- Verify: `projects/*.html`
- Verify: `assets/**/*`
- Verify: Git local and remote state

- [ ] Run JavaScript and positioning verification from a clean shell:

```powershell
node --check assets/js/content.js
node --check assets/js/app.js
node scripts/verify-positioning.mjs
```

- [ ] Scan for superseded positioning and removed production claims:

```powershell
$forbidden = @(
  'AI Content Strategist',
  'Systems Engineering',
  '25–30 optimized articles',
  '10+ long-form assets per month',
  'Titash_Sinha_Content_Strategy_and_Operations.pdf'
)
foreach ($term in $forbidden) {
  $matches = Select-String -Path index.html,assets\js\*.js,assets\css\*.css -Pattern $term -SimpleMatch
  if ($matches) { $matches; throw "Superseded term remains: $term" }
}
Write-Output 'PASS: superseded positioning is absent'
```

- [ ] Start a local static server and verify the homepage, all 12 project pages, and the CV return HTTP 200:

```powershell
$server = Start-Process -FilePath python -ArgumentList '-m','http.server','8765','--bind','127.0.0.1' -WorkingDirectory 'B:\Holy Grails\titash-portfolio-site' -WindowStyle Hidden -PassThru
try {
  $urls = @('http://127.0.0.1:8765/')
  $urls += Get-ChildItem -LiteralPath 'projects' -Filter '*.html' | ForEach-Object { "http://127.0.0.1:8765/projects/$($_.Name)" }
  $urls += 'http://127.0.0.1:8765/assets/files/Content%20Strategy%20and%20Operations_Titash_2026.pdf'
  foreach ($url in $urls) {
    $response = Invoke-WebRequest -Uri $url -UseBasicParsing
    if ($response.StatusCode -ne 200) { throw "$($response.StatusCode): $url" }
    Write-Output "200 $url"
  }
} finally {
  Stop-Process -Id $server.Id -ErrorAction SilentlyContinue
}
```

Expected: fourteen `200` lines: one homepage, twelve project pages, and one CV.

- [ ] Inspect the rendered homepage at desktop and mobile widths. Confirm:

  - supporting line does not collide with the name;
  - transition and opportunity cards are readable;
  - official title, functional scope, dates, and leadership marker are visually distinct;
  - grouped tool chips wrap without horizontal overflow;
  - every project card opens its existing page;
  - Download CV downloads as `Titash_Sinha_Resume_2026.pdf`.

- [ ] Confirm only intended files changed and the tree is clean after commits:

```powershell
git status --short
git log -3 --oneline
```

Expected: no `git status --short` output.

- [ ] Push local `main`, then verify local and remote commit identity:

```powershell
git push origin main
$localMain = git rev-parse main
$remoteMain = (git ls-remote origin refs/heads/main).Split("`t")[0]
if ($localMain -ne $remoteMain) { throw 'Remote main does not match local main.' }
Write-Output "PASS: origin/main = $remoteMain"
```

- [ ] Verify the remotely served resume bytes match the repository copy and check the final branch list:

```powershell
$remoteResume = Join-Path $env:TEMP 'Titash_Sinha_Resume_2026.remote.pdf'
Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/TitashSinha/titash-portfolio-site/main/assets/files/Content%20Strategy%20and%20Operations_Titash_2026.pdf' -OutFile $remoteResume
try {
  $repoHash = (Get-FileHash -Algorithm SHA256 -LiteralPath 'assets\files\Content Strategy and Operations_Titash_2026.pdf').Hash
  $remoteHash = (Get-FileHash -Algorithm SHA256 -LiteralPath $remoteResume).Hash
  if ($repoHash -ne $remoteHash) { throw 'Remote resume bytes do not match the repository copy.' }
  git ls-remote --heads origin
  Write-Output "PASS: remote resume SHA-256 = $remoteHash"
} finally {
  Remove-Item -LiteralPath $remoteResume -ErrorAction SilentlyContinue
}
```

Expected: remote CV hash matches, and the remote branch list reflects the intended clean repository state.
