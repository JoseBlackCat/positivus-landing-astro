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
		fontSize: {
			'h1-desktop': '3.75rem',
			'h1-mobile': '2.688rem',
			'h2-desktop': '2.5rem',
			'h2-mobile': '2.25rem',
			'h3-desktop': '1.875rem',
			'h3-mobile': '1.625rem',
			'h4-desktop': '1.25rem',
			'h4-mobile': '1.125rem',
			'p-desktop': '1.125rem',
			'p-mobile': '1rem',
		},
		extend: {},
	},
	plugins: [],
}
