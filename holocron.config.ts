import { defineConfig } from "@theholocron/cli";
import { node } from "@theholocron/holocron-config";

const { repo, workflows, providers } = node();
export default defineConfig({
	description:
		"A modern NodeJS template with pre-configured tools, best practices, and CI/CD setup for rapid project development.",
	homepage: "https://docs.theholocron.dev/node-template/",
	repo: {
		name: "theholocron/node-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["nodejs", "template", "typescript", "library"],
		...repo,
		protection: "strict",
		requiredChecks: ["audit / Knip", "audit / Audit the bundle size", "codecov/patch", "codecov/project"],
		properties: {
			...repo.properties,
			runtime_environment: "node",
			open_source: true,
			uses_external_packages: false,
		},
	},
	workflows: [
		...workflows,
		{ name: "audit", with: { "run-knip": true } },
		{ name: "release", with: { "run-build": true } },
		{ name: "deploy", with: { type: "docs", name: "node-template" }, paths: ["docs/**"] },
	],
	providers: {
		...providers,
		secrets: "github",
	},
	docs: { build: "workflow", https: true },
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
});
