# `@theholocron/node-template`

<!-- holocron:description -->

A Node template.

<!-- /holocron:description -->

## Installation

```bash
pnpm install --save-dev @theholocron/node-template
```

## Usage

<!-- prettier-ignore -->
```typescript
import { doSomething, type SomethingOptions } from "@theholocron/node-template";

function App(options: SomethingOptions) {
  return doSomething(options);
}
```

## Development

This repo uses [pnpm workspaces](https://pnpm.io/workspaces).

```bash
pnpm install       # install all deps
pnpm build         # build all packages
pnpm test          # test all packages
pnpm typecheck     # typecheck all packages
pnpm lint          # lint all packages
```

## Releases

Releases are automated via [semantic-release](https://semantic-release.gitbook.io) on push to `main`. All packages are versioned and published in lockstep. See [CHANGELOG.md](CHANGELOG.md) for the release history.

## Documentation

Check out [The Holocron Archive](https://docs.theholocron.dev/projects/node-template/) for more information.
