// import { ManifestOptions } from "some-module-path"; // Adjust the module path as necessary

export const manifest = {
	name: "Culqi Web App",
	short_name: "st-webapp-mysells",
	description: "App Oficial de Culqi",
	theme_color: "#FFFFFF",
	background_color: "#d5ff00",
	display: "fullscreen",
	icons: [
		{
			src: "pwa-192x192.png",
			sizes: "192x192",
			type: "image/png",
		},
		{
			src: "pwa-512x512.png",
			sizes: "512x512",
			type: "image/png",
		},
		{
			src: "pwa-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable",
		},
	],
};
