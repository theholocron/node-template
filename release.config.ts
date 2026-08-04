import { defineConfig } from "@theholocron/semantic-release-config";

export default defineConfig({
	branches: ["main", { name: "alpha", prerelease: true }],
	npm: { access: "public" },
	exec: {
		prepareCmd:
			"node -e \"const fs=require('fs'),p=JSON.parse(fs.readFileSync('docs/package.json','utf8'));p.version='${nextRelease.version}';fs.writeFileSync('docs/package.json',JSON.stringify(p,null,2)+'\\n')\"",
		publishCmd: "pnpm --filter @theholocron/node-template-site publish --access public --no-git-checks",
	},
	assets: ["CHANGELOG.md", "package.json", "docs/package.json"],
});
