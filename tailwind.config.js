/** @type {import('tailwindcss').Config} */
// module.exports = {
export default {
	content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				azulGB: '#00788c',
			}
		},
	},
	plugins: [],
}

// import tailwind from "@astrojs/tailwind";

// export default defineConfig({
// 	integrations: [tailwind()],
// });
