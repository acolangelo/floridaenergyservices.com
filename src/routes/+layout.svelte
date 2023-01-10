<script>
	import { page } from '$app/stores';
	import "../app.css";
</script>

<header class="relative my-8 lg:mt-16 py-10 text-center">
	<h1>Florida Energy Services,&nbsp;Inc.</h1>
	<p class="absolute top-0 left-0 w-full text-center tracking-widest uppercase text-gray text-xs font-bold">Est. 1982</p>
	<p class="absolute bottom-0 left-0 w-full text-center tracking-widest uppercase text-gray text-xs font-bold">Estero, Florida</p>
</header>

<main class="max-w-xl mx-auto p-4">
	<slot />
</main>

<footer class="max-w-xl mx-auto px-4 py-8 text-center tracking-widest text-xs text-gray uppercase font-bold">
	<ul class="text-center">
		<li class="inline-block mx-2"><a href="tel://+12393195713" title="Call Florida Energy Services, Inc." class="block no-underline p-2 opacity-80 hover:opacity-100 text-blue"><img src="/img/phone-square.svg" alt="Phone" class="inline w-4 h-4 fill-blue align-top"> +1 239-319-5713</a></li>
		<li class="inline-block mx-2"><a href="https://www.linkedin.com/company/florida-energy-services-inc./" class="block no-underline p-2 opacity-80 hover:opacity-100 text-blue"><img src="/img/linkedin.svg" alt="LinkedIn" class="inline w-4 h-4 fill-blue align-top"> LinkedIn</a></li>
	</ul>

	<p>&copy; 2022 Florida Energy Services,&nbsp;Inc.</p>
</footer>