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

const siteSource = contentSource + appSource + indexSource + read('assets/css/portfolio.css');
check(!siteSource.includes('AI Content Strategist'), 'superseded AI Content Strategist attribution remains');

if (!process.exitCode) console.log('PASS: positioning, evidence, routes, metadata, and CV contract verified');
