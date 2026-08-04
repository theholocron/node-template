import { defineConfig } from "@theholocron/semantic-release-config";

export default defineConfig({
	branches: ["main", { name: "alpha", prerelease: true }],
	npm: { access: "public" },
	exec: {
		prepareCmd: "pnpm exec holocron npm bump-versions ${nextRelease.version}",
		publishCmd: "pnpm --filter @theholocron/node-template-site publish --access public --no-git-checks",
	},
	assets: ["CHANGELOG.md", "package.json", "docs/package.json"],
});
