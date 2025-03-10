<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Task } from './task-interface';

	let {
		tasks,
		toggleDone,
		removeTask
	}: {
		tasks: Task[];
		toggleDone: (task: Task) => void;
		removeTask: (id: string) => void;
	} = $props();
</script>

<article class="space-y-4">
	{#each tasks as task}
		<div
			class="flex items-center justify-between rounded-lg bg-gray-800 px-4 py-3 hover:bg-gray-700"
			transition:fade
		>
			<div class="flex items-center gap-3">
				<input
					type="checkbox"
					class="h-5 w-5 cursor-pointer rounded border-gray-600 bg-gray-700 text-indigo-500 focus:ring-2 focus:ring-indigo-900 done:{task.done}"
					checked={task.done}
					onchange={() => toggleDone(task)}
				/>
				<span class="text-lg" class:line-through={task.done}>{task.title}</span>
			</div>
			<button
				class="cursor-pointer text-red-400 hover:text-red-300 focus:outline-none"
				aria-label="Delete todo"
				onclick={() => removeTask(task.id)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>
	{/each}
</article>
