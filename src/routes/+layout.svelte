<script>
	let { children } = $props();
	import Footer from '$lib/components/shared/Footer.svelte';
	import Header from '$lib/components/shared/Header.svelte';
	import '../app.css';
</script>

<Header />

{@render children()}
<!-- <slot /> -->
<Footer />
