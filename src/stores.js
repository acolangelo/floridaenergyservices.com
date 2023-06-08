import { readable, writable } from 'svelte/store';

export const navItems = readable([
	{
		url: "/services",
		title: "Services"
	},
	{
		url:"/projects",
		title: "Projects"
	},
	{
		url:"/safety",
		title: "Safety"
	},
	{
		url:"/about",
		title: "About"
	},
	{
		url:"/contact",
		title: "Contact"
	}
], function start(set) {

	return function stop() {
	};
});
