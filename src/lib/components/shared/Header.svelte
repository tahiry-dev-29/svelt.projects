<script lang="ts">
	import Search from './Search.svelte';
	import { page } from '$app/stores';

	let searchResults: any[] = [];

	async function handleSearch(event: CustomEvent) {
		const searchQuery = event.detail.query;
		if (!searchQuery) {
			searchResults = [];
			return;
		}

		try {
		} catch (error) {
			searchResults = [];
		}
	}

	$: isActive = (path: string) => $page.url.pathname.startsWith(path);
</script>

<header class="body-font bg-gray-900 text-gray-400">
	<div class="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
		<a class="title-font mb-4 flex items-center font-medium text-white md:mb-0" href="/projects">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				class="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
				viewBox="0 0 24 24"
			>
				<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
			</svg>
			<span class="ml-3 text-xl">Tailblocks</span>
		</a>
		<nav class="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-auto">
			<a class="mr-5 hover:text-white {isActive('/projects') ? 'active' : ''}" href="/projects"
				>Projects</a
			>
			<a class="mr-5 hover:text-white {isActive('/contact') ? 'active' : ''}" href="/contact"
				>Contact</a
			>
		</nav>
		<div class="flex items-center gap-4">
			<Search on:search={handleSearch} />
		</div>
	</div>
</header>
