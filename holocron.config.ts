import { defineConfig } from "@theholocron/cli";
import { compose, nodeDocs, wikiCapability as wiki } from "@theholocron/holocron-config";

const preset = compose(nodeDocs(), wiki());
export default defineConfig({
	...preset,
	description:
		"A modern NodeJS template with pre-configured tools, best practices, and CI/CD setup for rapid project development.",
	homepage: "https://docs.theholocron.dev/node-template/",
	repo: {
		...preset.repo,
		name: "theholocron/node-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["nodejs", "template", "typescript", "library"],
		properties: {
			...preset.repo?.properties,
			uses_external_packages: false,
		},
	},
	tasks: [
		...preset.tasks,
		{ name: "audit", required: true, with: { "run-knip": true } },
		{ name: "release", with: { "run-build": true } },
		"sync",
		{ name: "deploy", with: { type: "docs", name: "node-template" }, paths: ["docs/**"] },
	],
	providers: {
		...preset.providers,
		secrets: "github",
		wiki: ["fern", { domain: "wiki.theholocron.dev", fernOrg: "holocron", icon: "fa-duotone fa-copy" }],
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
});
