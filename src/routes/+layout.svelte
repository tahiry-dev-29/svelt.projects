<script>
	let { children } = $props();
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />

{@render children()}
<!-- <slot /> -->
<Footer />
