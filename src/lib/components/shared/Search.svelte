<script lang="ts">
	import { searchQuery, performSearch } from '$lib/stores/searchStore';
	import { fade } from 'svelte/transition';
	import Spinner from './Spinner.svelte';
	import { onDestroy } from 'svelte';

	export let placeholder = 'Search projects...';
	let isExpanded = false;
	let searchInput: HTMLInputElement;
	let isSearching = false;

	function toggleSearch() {
		isExpanded = !isExpanded;
		if (isExpanded) {
			setTimeout(() => searchInput?.focus(), 100);
		}
	}

	async function handleSubmit() {
		if ($searchQuery) {
			isSearching = true;
			await performSearch($searchQuery);
			isSearching = false;
		}
	}

	let searchTimer: number;
	$: {
		if ($searchQuery) {
			clearTimeout(searchTimer);
			isSearching = true;
			searchTimer = setTimeout(async () => {
				await performSearch($searchQuery);
				isSearching = false;
			}, 300);
		}
	}

	onDestroy(() => {
		clearTimeout(searchTimer);
	});
</script>

<div class="relative flex items-center">
	<button
		class="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
		on:click={toggleSearch}
		aria-label="Search"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	</button>

	{#if isExpanded}
		<div class="absolute top-0 right-0" transition:fade={{ duration: 200 }}>
			<form class="flex items-center" on:submit|preventDefault={handleSubmit}>
				<input
					bind:this={searchInput}
					bind:value={$searchQuery}
					type="text"
					{placeholder}
					class="h-10 w-64 rounded-lg border border-gray-700 bg-gray-800 pr-10 pl-4 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:outline-none"
				/>
				<button
					type="button"
					class="absolute right-2 text-gray-400 hover:text-gray-200"
					on:click={toggleSearch}
					aria-label="Close search"
				>
					{#if isSearching}
						<Spinner size="24" />
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{/if}
				</button>
			</form>
		</div>
	{/if}
</div>
