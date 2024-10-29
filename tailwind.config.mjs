/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Space Grotesk', 'sans-serif'],
		},
		colors: {
			'primary': '#B9FF66',
			'secondary': '#191A23',
			'tertiary': '#F3F3F3',
		},
		extend: {},
	},
	plugins: [],
}
