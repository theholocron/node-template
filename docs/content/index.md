---
title: Overview
description: A Node.js library starter template with pre-configured tools, best practices, and CI/CD setup for rapid project development.
---

A modern Node.js library starter template for `@theholocron` repos.

## What's included

- TypeScript with strict config via `@theholocron/tsconfig`
- ESLint + Prettier via `@theholocron/eslint-config` and `@theholocron/prettier-config`
- Vitest for testing with coverage via `@theholocron/vitest-config`
- Semantic release via `@theholocron/semantic-release-config`
- Husky + lint-staged via `@theholocron/lint-staged-config`
- Full CI/CD via reusable workflows in `theholocron/.github`
- Docs site via Astro + Starlight

## Usage

```typescript
import { doSomething, type SomethingOptions } from "@theholocron/node-template";

function App(options: SomethingOptions) {
	return doSomething(options);
}
```
