import type { KnipConfig } from "knip";

const config: KnipConfig = {
	entry: ["src/index.ts", "commitlint.config.ts", "holocron.config.ts"],
	project: ["src/**/*.ts", "*.config.ts"],
	ignoreDependencies: [
		// tsconfig.json "extends" — not a module import
		"@theholocron/tsconfig",
		// commitlint uses string-based "extends", not a module import
		"@theholocron/commitlint-config",
		// passed as --config arg to lint-staged in .husky/pre-commit
		"@theholocron/lint-staged-config",
		// binary tools — invoked via CLI or hooks, not module imports
		"husky",
	],
	ignoreExportsUsedInFile: true,
};

export default config;
