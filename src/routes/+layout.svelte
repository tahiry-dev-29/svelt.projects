<script lang="ts">
	let { children } = $props();
	import Footer from '$lib/components/shared/Footer.svelte';
	import Header from '$lib/components/shared/Header.svelte';
	import Breadcrumbs from '$lib/components/shared/Breadcrumbs.svelte';
	import '../app.css';
</script>

<div class="flex min-h-screen flex-col bg-gray-900 text-white">
	<Header />
	<Breadcrumbs />
	<main class="container mx-auto flex-grow px-4 py-8">
		{@render children()}
	</main>
	<Footer />
</div>

<style lang="postcss">
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
