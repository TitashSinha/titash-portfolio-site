# COP/DROP Firecrawl Role Discovery and Research Design

## Goal

Add a proactive live-role discovery mode to COP/DROP and make Firecrawl the preferred research route for both discovery and evaluation, while preserving reliable operation when Firecrawl is unavailable.

## Scope

Update `C:\Users\titas\.codex\skills\cop-drop\SKILL.md` so the skill triggers when Titash asks to find suitable live roles as well as when he supplies a role for evaluation. Add concise discovery, source-routing, compliance, deduplication, and evaluation rules. Do not copy the full Firecrawl onboarding guide into COP/DROP and do not retain the session API key contained in the supplied material.

## Modes

### Discover live roles

1. Infer search criteria from the candidate profile and current conversation: target role families, location, work mode, seniority, experience, and any stated constraints.
2. Use Firecrawl Search for broad discovery, then Map or Crawl only on domains that permit automated access.
3. Search source classes in this order:
   - Official employer career sites and public applicant-tracking-system pages.
   - Public, crawl-permitted job-board pages, including relevant Indian boards.
   - Search-engine results and restricted-board snippets as discovery signals only.
4. Treat LinkedIn as discovery-only unless explicit crawling permission exists. Apply the same rule to Indeed, Naukri, Foundit, or any other board whose terms, robots policy, login wall, or technical controls prohibit the requested access.
5. Never bypass authentication, CAPTCHA, robots exclusions, rate limits, or anti-bot controls.
6. Deduplicate roles by canonical posting URL; otherwise use normalized company, title, and location.
7. Prefer postings whose live page and publication date can be verified. Label freshness unknown when no reliable date is available.
8. Return a concise shortlist rather than an unfiltered dump. Run the normal COP/DROP evaluation on every shortlisted role before comparison.

### Research a supplied role

1. Prefer Firecrawl in this order:
   - Search when the official posting or source URL must be discovered.
   - Scrape known job-posting and company URLs.
   - Interact only when permitted navigation or page controls block ordinary extraction.
2. Continue prioritizing official postings and company sources over aggregators, snippets, or employee-review sites.
3. Treat restricted-board pages and search snippets as incomplete signals, not verified job descriptions.

### Fallback behavior

1. If Firecrawl is unavailable, unauthenticated, rate-limited, prohibited for the target, or unsuccessful, use the available web-research tools.
2. If discovery remains incomplete, disclose which source classes could not be checked and continue with accessible sources.
3. If research for a supplied role fails, evaluate the supplied JD, label missing facts as unknown, and lower confidence.
4. A Firecrawl or job-board access failure must not determine a COP/DROP verdict by itself.

## Security

- Never embed API keys or session credentials in the skill.
- Use credentials supplied through the runtime environment or an already-authorized Firecrawl installation.
- Do not trigger installation or browser authorization during an ordinary job evaluation unless Titash explicitly asks for setup.
- Do not automate applications, messaging, or account activity as part of role discovery.

## Validation

- Baseline-test whether the current skill consistently handles proactive role discovery, Firecrawl routing, restricted boards, deduplication, and freshness.
- After the edit, verify that an agent prefers Firecrawl when available, prioritizes official sources, respects restricted-board boundaries, deduplicates results, verifies freshness when possible, evaluates every shortlisted role, and falls back cleanly.
- Verify that the skill neither exposes or requests hard-coded credentials nor automates applications or account actions.
- Run the skill validator and inspect the final diff.
