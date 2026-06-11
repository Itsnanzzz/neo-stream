---
name: update-server-logic
description: Workflow command scaffold for update-server-logic in neo-stream.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /update-server-logic

Use this workflow when working on **update-server-logic** in `neo-stream`.

## Goal

Makes changes to the main server logic, often in conjunction with other feature or bugfix work.

## Common Files

- `server.js`
- `lib/api.js`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Edit server.js to implement new logic or fix bugs.
- Optionally, modify related files (e.g., lib/api.js, templates/*) as needed.
- Commit the changes.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.