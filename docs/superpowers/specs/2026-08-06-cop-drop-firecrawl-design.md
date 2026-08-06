# COP/DROP Firecrawl Research Design

## Goal

Make Firecrawl the preferred research route when COP/DROP evaluates an identifiable live role or company, while preserving reliable evaluation when Firecrawl is unavailable.

## Scope

Update `C:\Users\titas\.codex\skills\cop-drop\SKILL.md` with a concise research-routing rule. Do not copy the full Firecrawl onboarding guide into COP/DROP and do not retain the session API key contained in the supplied material.

## Behavior

1. For a live role or identifiable company, prefer Firecrawl in this order:
   - Search when the official posting or source URL must be discovered.
   - Scrape known job-posting and company URLs.
   - Interact only when navigation or page controls block ordinary extraction.
2. Continue prioritizing official postings and company sources over aggregators, snippets, or employee-review sites.
3. If Firecrawl is unavailable, unauthenticated, rate-limited, or unsuccessful, use the available web-research tools.
4. If no research route succeeds, evaluate the supplied JD, label missing facts as unknown, and lower confidence.
5. A Firecrawl failure must not prevent or decide a COP/DROP verdict.

## Security

- Never embed API keys or session credentials in the skill.
- Use credentials supplied through the runtime environment or an already-authorized Firecrawl installation.
- Do not trigger installation or browser authorization during an ordinary job evaluation unless Titash explicitly asks for setup.

## Validation

- Baseline-test whether the current skill gives agents any consistent Firecrawl routing.
- After the edit, verify that an agent prefers Firecrawl when available, falls back cleanly when unavailable, prioritizes official sources, and does not expose or request hard-coded credentials.
- Run the skill validator and inspect the final diff.
