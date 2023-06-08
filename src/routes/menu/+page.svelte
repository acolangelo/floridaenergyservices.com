<svelte:head>
	<title>Florida Energy Services, Inc. - Menu</title>
</svelte:head>

<script>
	import { page } from '$app/stores';
	import { navItems } from '../../stores.js';
</script>

<section class="max-w-7xl mx-auto p-4">
	<nav class="md:block font-bold text-md">
		<ul>
			{#each $navItems as navItem}
			<li class="mb-4"><a href={navItem.url} class="px-2 no-underline border-l-4 border-transparent hover:border-yellow">{navItem.title}</a></li>
			{/each}
		</ul>
	</nav>
</section>