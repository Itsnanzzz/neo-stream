```markdown
# neo-stream Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill provides guidance for contributing to the `neo-stream` codebase, a JavaScript project using the Express framework. It covers coding conventions, common workflows, and testing patterns, enabling consistent and effective collaboration.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `serverLogic.js`, `userRoutes.js`

### Import Style
- Use **relative imports** for modules.
  - Example:
    ```js
    const api = require('./lib/api');
    ```

### Export Style
- Use **named exports**.
  - Example:
    ```js
    // lib/api.js
    function fetchData() { /* ... */ }
    function saveData() { /* ... */ }
    module.exports = { fetchData, saveData };
    ```

### Commit Patterns
- Commit messages are **freeform** and typically short (~12 characters).
  - Example: `fix input`, `add route`

## Workflows

### Update HTML Template
**Trigger:** When you need to change the site's HTML templates (e.g., add tags, update SEO, modify forms).  
**Command:** `/update-html-template`

1. Edit one or more files in the `templates/` directory (e.g., `index.html`, `input.html`, `sitemap.xml`).
2. Optionally, update related server logic if needed (e.g., `server.js`).
3. Commit the changes with a descriptive message.

**Example:**
```sh
# Edit templates/index.html
# Optionally edit server.js
git add templates/index.html server.js
git commit -m "update meta tags in index.html"
```

### Update Server Logic
**Trigger:** When you want to add, fix, or update backend/server-side behavior.  
**Command:** `/update-server`

1. Edit `server.js` to implement new logic or fix bugs.
2. Optionally, modify related files (e.g., `lib/api.js`, `templates/*`) as needed.
3. Commit the changes.

**Example:**
```sh
# Edit server.js and lib/api.js
git add server.js lib/api.js
git commit -m "add new API endpoint"
```

## Testing Patterns

- Test files use the pattern: `*.test.*`
  - Example: `api.test.js`
- The testing framework is **unknown**; check existing test files for conventions.
- To run tests, look for scripts in `package.json` or documentation in the repo.

**Example test file:**
```js
// api.test.js
const { fetchData } = require('./lib/api');

test('fetchData returns expected result', () => {
  // ...test logic...
});
```

## Commands

| Command                | Purpose                                             |
|------------------------|-----------------------------------------------------|
| /update-html-template  | Use when modifying HTML templates                   |
| /update-server         | Use when updating server-side logic                 |
```
