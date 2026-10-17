# Project context

This is a static HTML/CSS/JavaScript portfolio with no build step or package dependencies.
- `index.html`: page structure and UI containers.
- `css/style.css`: styling and responsive layout.
- `js/script.js`: portfolio content, rendering, interactions, and GitHub stats.

## Project memory

Shared Obsidian vault: `C:/Users/USER/Documents/Project Knowledge`.
Project notes: `Projects/Portfolio/Portfolio.md` and `Projects/Portfolio/Portfolio Current Work.md`.
Read only those notes when resuming; load decisions on demand. Keep handoffs under 250 words and omit personal data, credentials, and chat transcripts.

## Graphify

Use `C:/Users/USER/.local/bin/graphify.exe` in PowerShell if `graphify` is not on PATH.
- Build: `graphify extract . --code-only --max-workers 2`
- Refresh after meaningful code changes: `graphify update .`
- Architecture questions: `graphify query "QUESTION" --budget 1200`
- Browser graph: `graphify export html`
- Refresh Obsidian navigation: `graphify export obsidian --dir "C:/Users/USER/Documents/Project Knowledge/Projects/Portfolio/Graph"`

Prefer direct lookups for known files or symbols. Verify graph findings against source. Avoid bulk-reading graph JSON or generated symbol notes. Code-only extraction is the default; semantic docs/media indexing is opt-in. Generated output is ignored by Git.
