<script lang="ts">
	import { projectService } from '$lib/services/ProjectService';
	import ProjectCard from '$lib/components/pages/ProjectCard.svelte';
	import { searchQuery, searchResults } from '$lib/stores/searchStore';

	const allProjects = projectService.getProjects();

	$: displayedProjects = $searchQuery ? $searchResults : allProjects;
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="py-1">
	<h1 class="mb-12 text-center text-2xl font-bold text-white">My Projects</h1>
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
