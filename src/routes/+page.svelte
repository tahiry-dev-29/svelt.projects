<script lang="ts">
	import { projectService } from '$lib/services/ProjectService';
	import ProjectCard from '$lib/components/pages/ProjectCard.svelte';
	import { searchQuery, searchResults } from '$lib/stores/searchStore';

	const allProjects = projectService.getProjects();

	// Utilisez les résultats de recherche s'il y a une requête, sinon affichez tous les projets
	$: displayedProjects = $searchQuery ? $searchResults : allProjects;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main class="min-h-screen bg-gray-900 py-16">
	<div class="container mx-auto px-4">
		<h1 class="mb-12 text-center text-4xl font-bold text-white">My Projects</h1>
		{#if displayedProjects.length === 0}
			<p class="text-center text-gray-400">No projects found</p>
		{:else}
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each displayedProjects as project (project.route)}
					<ProjectCard {project} />
				{/each}
			</div>
		{/if}
	</div>
</main>
