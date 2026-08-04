import { defineConfig } from "@theholocron/semantic-release-config";

export default defineConfig({
	assets: ["CHANGELOG.md", "docs/package.json", "package.json"],
	branches: ["main", { name: "alpha", prerelease: true }],
	exec: {
		prepareCmd: "pnpm exec holocron npm bump-versions ${nextRelease.version}",
		publishCmd: "pnpm --filter @theholocron/node-template-site publish --access public --no-git-checks",
	},
	npm: { access: "public" },
});
