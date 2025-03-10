<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { Filter, Task } from './task-interface';
	import TasksForm from './Tasks-form.svelte';
	import TasksList from './Tasks-list.svelte';

	let title = 'Todo List';
	let tasks = $state<Task[]>([]);
	let currentFilter = $state<Filter>('all');

	let totalDone = $derived(tasks.reduce((total, task) => total + Number(task.done), 0));
	let filteredTasks = $derived.by(() => {
		switch (currentFilter) {
			case 'all': {
				return tasks;
			}
			case 'todo': {
				return tasks.filter((task) => !task.done);
			}
			case 'done': {
				return tasks.filter((task) => task.done);
			}
		}
	});

	function addTask(newTask: string) {
		tasks.push({
			id: crypto.randomUUID(),
			title: newTask,
			done: false
		});
	}

	function toggleDone(task: Task) {
		task.done = !task.done;
	}

	function removeTask(id: string) {
		const index = tasks.findIndex((task) => task.id === id);
		tasks.splice(index, 1);
	}
</script>

{#snippet filterButton(filter: Filter)}
	<button
		class="rounded px-4 py-2 font-bold text-white capitalize {currentFilter === filter
			? 'bg-indigo-500'
			: 'bg-gray-700'}"
		onclick={() => (currentFilter = filter)}>{filter}</button
	>
{/snippet}

<section class="body-font min-h-screen bg-gray-900 text-gray-400">
	<div class="container mx-auto px-5 py-10">
		<div class="mx-auto max-w-2xl">
			<h1 class="mb-8 text-center text-3xl font-bold text-white">{title}</h1>
			<!-- Input form -->
			<TasksForm {addTask} />

			<!-- Filter buttons -->
			{#if !tasks.length}
				<!-- Empty state -->
				<div class="text-center text-gray-500">
					<p>Add a task to get started...</p>
				</div>
			{:else}
				<div class="mb-6 flex items-center justify-around gap-4" transition:slide>
					<p>{totalDone} / {tasks.length} tasks completed</p>
					<div class="flex justify-between gap-1.5">
						{@render filterButton('all')}
						{@render filterButton('todo')}
						{@render filterButton('done')}
					</div>
				</div>
			{/if}

			<!-- Todo list -->
			<TasksList tasks={filteredTasks} {toggleDone} {removeTask} />
		</div>
	</div>
</section>
