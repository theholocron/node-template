import { library } from "@theholocron/eslint-config/bundles/library";
import type { Linter } from "eslint";

const config = [
	...library(),
	{ ignores: ["dist/**", "coverage/**", "docs/**"] },
	{ rules: { "package-json/prefer-shorthand": "off" } },
] satisfies Linter.Config[];

export default config;
