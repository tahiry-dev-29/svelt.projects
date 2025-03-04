<script lang="ts">
	import { projectService } from '$lib/services/ProjectService';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';

	const projects = projectService.getProjects();
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main class="min-h-screen bg-gray-900 py-16">
	<div class="container mx-auto px-4">
		<h1 class="mb-12 text-center text-4xl font-bold text-white">My Projects</h1>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project (project.route)}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</main>
