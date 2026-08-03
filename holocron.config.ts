import { defineConfig } from "@theholocron/cli";
import { node } from "@theholocron/holocron-config";

const { workflows, providers } = node();
export default defineConfig({
	description: "<description>",
	homepage: "<homepage>",
	repo: {
		name: "theholocron/<name>",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		protection: "balanced",
		topics: [],
		properties: {
			lifecycle: "active",
			open_source: true,
			runtime_environment: "<runtime_environment>",
			uses_external_packages: false,
		},
	},
	workflows: [
		...workflows,
		"audit",
		{ name: "release", with: { "run-build": true } },
		{
			name: "deploy-docs",
			with: { name: "clients" },
			paths: ["docs/**"],
		},
	],
	providers: {
		...providers,
		secrets: "github",
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review", "holocron-skill-client"],
});
