<script lang="ts">
	import type { Project } from '$lib/types/Project';

	export let project: Project;
</script>

<a
	href={project.route}
	class="group relative block h-80 w-64 overflow-hidden rounded-lg border border-gray-700 bg-gray-900/60 px-4 py-2 shadow-md backdrop-blur-sm transition-transform hover:shadow-lg"
>
	<div class="relative mb-2 h-40 w-full overflow-hidden rounded-md">
		<img
			src={project.imageUrl}
			alt={project.title}
			class="h-full w-full object-cover
				 transition-transform duration-300
				 group-hover:scale-105"
		/>
	</div>

	<div class="flex h-[calc(100%-10rem)] flex-col">
		<h3 class="mb-2 text-xl font-semibold text-white">
			{project.title}
		</h3>
		<p class="line-clamp-3 text-sm text-gray-400">
			{project.description}
		</p>
	</div>
</a>
