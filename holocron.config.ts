import { defineConfig } from "@theholocron/cli";
import { node } from "@theholocron/holocron-config";

const { workflows, providers } = node();
export default defineConfig({
	description: "Node.js library starter template.",
	homepage: "https://docs.theholocron.dev/node-template/",
	repo: {
		name: "theholocron/node-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["nodejs", "template", "typescript", "library"],
		...node().repo,
		protection: "balanced",
		properties: {
			...node().repo.properties,
			runtime_environment: "node",
			open_source: true,
			uses_external_packages: false,
		},
	},
	workflows: [
		...workflows,
		"audit",
		{ name: "release", with: { "run-build": true } },
		{
			name: "deploy-docs",
			with: { name: "node-template" },
			paths: ["docs/**"],
		},
	],
	providers: {
		...providers,
		secrets: "github",
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
});
