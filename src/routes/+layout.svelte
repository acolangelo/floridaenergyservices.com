<script>
	import { page } from '$app/stores';
	import { navItems } from '../stores.js';
	import "../app.css";
	
	let navShown = false;
</script>

<header class="relative flex justify-between items-center p-4 py-8 sm:p-6 md:p-8">
	<a href="/" title="Florida Energy Services" class="block w-32 md:w-48 flex-initial"><img src="/img/fes.svg" alt="Florida Energy Services" ></a>
	{#if $page.url.pathname != '/menu'}
	{@const navClass = navShown ? 'block' : 'hidden'}
	<a href="/menu" class="sm:hidden relative block top-[-9px] bg-menu w-6 h-6 bg-no-repeat bg-right pl-6 box-content indent-[-13000px]" on:click|preventDefault={() => (navShown = !navShown)}>Menu</a>
	<nav class="{navClass} fixed bg-[rgba(255,255,255,0.97)] w-full h-full top-0 left-0 z-50 flex-initial sm:block sm:static sm:w-auto sm:h-auto font-bold md:text-md">
		<p class="sm:hidden flex px-4 py-8 justify-between">
			<a href="/" title="Florida Energy Services" class="w-24 flex-initial"><img src="/img/fes-letters.svg" alt="Florida Energy Services" ></a>
			<a href={$page.url} class="flex-initial text-gray no-underline hover:underline" on:click|preventDefault={() => (navShown = !navShown)}>Close</a>
		</p>
		<ul class="p-4 text-center sm:flex sm:gap-6 sm:p-0 md:pb-6">
			{#each $navItems as navItem}
			{@const navItemClass = $page.url.pathname == navItem.url ? 'border-t-yellow hover:border-t-yellow' : ''}
			<li class="mb-12 sm:mb-0"><a href={navItem.url} class="no-underline border-y-4 border-transparent hover:border-t-lightgray hover:text-black py-1 {navItemClass}">{navItem.title}</a></li>
			{/each}
		</ul>
	</nav>
	{/if}
</header>

<main>
	<slot />
</main>

{#if $page.url.pathname != '/menu'}
<footer class="px-4 pt-16 pb-8 sm:p-6 md:px-8 sm:pt-24 sm:flex sm:gap-4 sm:justify-between">
	<div>
		<a href="/" title="Florida Energy Services" class="block w-24 sm:w-32"><img src="/img/fes-letters.svg" alt="Florida Energy Services" class="max-h-full" ></a>
		<nav class="mt-4 font-bold">
			<ul>
				{#each $navItems as navItem}
				<li class="inline-block mr-4"><a href={navItem.url} class="no-underline hover:underline hover:text-black">{navItem.title}</a></li>
				{/each}
			</ul>
		</nav>
	</div>
	<div class="max-w-[300px] sm:max-w-none mt-8 pt-4 sm:mt-0 sm:w-64 md:w-80 border-black border-t-4">
		<h5 class="mb-1">Florida Energy Services, Inc.</h5>
		<p class="my-0"><a href="tel:+12393195713" title="Call Florida Energy Services, Inc.">239.319.5713</a> | <a href="https://www.linkedin.com/company/florida-energy-services-inc./">LinkedIn</a></p>
		<p class="my-0">&copy; 2023</p>

	</div>
</footer>
{/if}