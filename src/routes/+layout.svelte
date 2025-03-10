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
	<main class="container mx-auto flex-grow p-4">
		{@render children()}
	</main>
	<Footer />
</div>
