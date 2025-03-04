<script lang="ts">
	import type { Project } from '$lib/types/Project';
	export let project: Project;
</script>

<a
	href={project.route}
	class="group relative flex flex-col overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
>
	<div class="relative h-48 w-full overflow-hidden">
		<img
			src={project.imageUrl}
			alt={project.title}
			class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
		/>
		<div class="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0"></div>
	</div>
	<div class="flex flex-col gap-2 p-5">
		<h3 class="text-2xl font-bold text-white transition-colors group-hover:text-blue-400">
			{project.title}
		</h3>
		<p class="text-gray-300">{project.description}</p>
	</div>
</a>
