<script lang="ts">
	let newTask = $state('');
	let {
		addTask
	}: {
		addTask: (newTask: string) => void;
	} = $props();

	function OnTaskSubmit(e: SubmitEvent) {
		e.preventDefault();
		addTask(newTask);
		newTask = '';
	}
</script>

<form class="mb-8 flex gap-4" onsubmit={OnTaskSubmit}>
	<input
		type="text"
		placeholder="Add a new todo..."
		class="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:outline-none"
		bind:value={newTask}
	/>
	<button
		type="submit"
		class="cursor-pointer rounded-lg bg-indigo-500 px-6 py-2 font-semibold text-white hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-900 focus:outline-none"
	>
		Add
	</button>
</form>
