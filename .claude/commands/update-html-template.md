---
name: update-html-template
description: Workflow command scaffold for update-html-template in neo-stream.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /update-html-template

Use this workflow when working on **update-html-template** in `neo-stream`.

## Goal

Updates or modifies HTML template files, often for SEO, analytics, or UI changes.

## Common Files

- `templates/index.html`
- `templates/input.html`
- `templates/sitemap.xml`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Edit one or more files in the templates/ directory (e.g., index.html, input.html, sitemap.xml).
- Optionally, update related server logic if needed (e.g., server.js).
- Commit the changes with a descriptive message.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.