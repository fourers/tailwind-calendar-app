# Tailwind Calendar App

A responsive calendar website.

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Oxc formatting and linting tools

## Getting started

### Prerequisites

- [Bun](https://bun.sh/) installed
- [Just](https://just.systems/) installed for the command shortcuts below

Install dependencies

```bash
just install
```

Start the local development server:

```bash
just dev
```

Then open the local URL printed by Vite in your browser.

## Commands

Run these commands from the project root:

| Command        | Description                                         |
| -------------- | --------------------------------------------------- |
| `just install` | Install dependencies with Bun                       |
| `just dev`     | Start the Vite development server                   |
| `just build`   | Type-check and create a production build            |
| `just preview` | Preview the production build locally                |
| `just lint`    | Format the code and run the linter                  |
| `just update`  | Update the Bun lockfile without installing packages |
