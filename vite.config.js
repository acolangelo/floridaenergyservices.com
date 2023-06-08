import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	server: {
		hmr: {
			host: 'localhost'
		}
	},
	plugins: [sveltekit()]
};

export default config;
