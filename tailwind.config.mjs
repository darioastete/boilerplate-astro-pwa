/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-green-100': '#CBF7F6',
				'primary-green-200': '#6CD3CF',
				'primary-green-300': '#00A19B',
				'primary-green-400': '#007A76',
				'primary-green-500': '#00524F',
				'primary-orange-100': '#FDE7D9',
				'primary-orange-200': '#F3A87C',
				'primary-orange-300': '#EB6F25',
				'primary-orange-400': '#CD5713',
				'primary-orange-500': '#95400E',
				'primary-purple-100': '#F1E2F4',
				'primary-purple-200': '#BE7BCC',
				'primary-purple-300': '#763383',
				'primary-purple-400': '#4F2258',
				'primary-purple-500': '#35173B',
				'neutrals-plate-100': '#677487',
				'neutrals-plate-200': '#4E5D73',
				'neutrals-plate-300': '#3E4B61',
				'neutrals-plate-400': '#1F263E',
				'neutrals-plate-500': '#151929',
				'neutrals-sky-100': '#FFF',
				'neutrals-sky-200': '#F4F5F6',
				'neutrals-sky-300': '#E7E9EC',
				'neutrals-sky-400': '#D4D8DD',
				'neutrals-sky-500': '#B1B8C1',
				'neutrals-dark-500': '#141414',
				'neutrals-night-200': '#616770',
				'neutrals-night-400': '#27292C',
				'support-positive-100': '#E5FCE0',
				'support-positive-200': '#9BD98C',
				'support-positive-300': '#5BBC43',
				'support-positive-400': '#499636',
				'support-positive-500': '#2F6621',
				'support-warning-100': '#FFF8D8',
				'support-warning-300': '#F0CC10',
				'support-warning-400': '#499636',
				'support-negative-100': '#FFD0D0',
				'support-negative-200': '#FC6E6E',
				'support-negative-300': '#D20808',
				'support-negative-400': '#9D0606',
				'support-negative-500': '#7A0B0B',
				'secondary-lightblue-100': '#E2F6FF',
				'secondary-lightblue-200': '#93D6F0',
				'secondary-lightblue-300': '#3CB4E5',
				'secondary-lightblue-400': '#169CD0',
				'secondary-lightblue-500': '#167AA2',
			  },
			  fontFamily: {
				'lexend-deca': ['Lexend Deca', 'sans-serif'],
			  },
			  fontSize: {
				nano: '0.6875rem',
				micro: '0.75rem',
				'2xs': '0.875rem',
				xs: '1.0rem',
				sm: '1.125rem',
				md: '1.5rem',
				lg: '2.0rem',
				xl: '2.5rem',
				'2xl': '3.0rem',
				'3xl': '4.0rem',
				'4xl': '6.0rem',
			  },
			  fontWeight: {
				light: 300,
				regular: 400,
				medium: 500,
				semibold: 600,
			  },
			  lineHeight: {
				tight: 1,
				fair: 1.28,
				confy: 1.52,
			  },
			  boxShadow: {
				'fixed-navbar': '0px -3px 15px 0px rgba(32, 51, 50, 0.07)',
				'nav-drawer':
				  '0px 1px 10px 0px rgba(188, 198, 212, 0.20), 0px 4px 5px 0px rgba(188, 198, 212, 0.12), 0px 2px 4px 0px rgba(188, 198, 212, 0.14)',
				popup:
				  '0px 4px 5px 0px rgba(188, 198, 212, 0.20), 0px 3px 14px 0px rgba(188, 198, 212, 0.12), 0px 8px 10px 0px rgba(188, 198, 212, 0.14)',
				receipt: '0px 0px 10px 6px rgba(9, 30, 66, 0.1)',
				tab: '0px 2px 0px 0px rgb(231, 233, 236)',
				selectedTab: '0px 2px 0px 0px rgb(0, 161, 155)',
			  },
			  opacity: {
				intense: '.6',
				light: '.16',
			  },
			  width: {
				fit: 'fit-content',
			  },
			  height: {
				fit: 'fit-content',
				'custom-main': 'calc(100vh - 56px)',
			  },
		},
	},
	plugins: [
		function ({ addBase }) {
			addBase({
			  html: { fontSize: '16px' },
			});
		  },
		  function ({ addVariant }) {
			addVariant('child', '& > *');
			addVariant('child-hover', '& > *:hover');
		  },
	],
}
