import starlight from "@astrojs/starlight";
import { docsTheme } from "@theholocron/docs-theme";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://theholocron.github.io",
	base: "/node-template",
	integrations: [
		starlight({
			title: "Node Template",
			plugins: [docsTheme()],
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/theholocron/node-template",
				},
			],
			sidebar: [{ label: "Overview", slug: "" }],
		}),
	],
});
