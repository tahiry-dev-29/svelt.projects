<script lang="ts">
	let newTodo = '';
	let todos: { id: number; text: string; completed: boolean }[] = [];
	let nextId = 1;
	let activeFilter: 'all' | 'active' | 'completed' = 'all';

	function addTodo() {
		if (newTodo.trim()) {
			todos = [...todos, { id: nextId++, text: newTodo.trim(), completed: false }];
			newTodo = '';
		}
	}

	function deleteTodo(id: number) {
		todos = todos.filter((todo) => todo.id !== id);
	}

	function toggleTodo(id: number) {
		todos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
	}

	$: filteredTodos = todos.filter((todo) => {
		if (activeFilter === 'active') return !todo.completed;
		if (activeFilter === 'completed') return todo.completed;
		return true;
	});
</script>

<section class="body-font min-h-screen bg-gray-900 text-gray-400">
	<div class="container mx-auto px-5 py-24">
		<div class="mx-auto max-w-2xl">
			<h1 class="mb-8 text-center text-3xl font-bold text-white">Todo List</h1>

			<!-- Input form -->
			<form class="mb-8 flex gap-4" on:submit|preventDefault={addTodo}>
				<input
					type="text"
					bind:value={newTodo}
					placeholder="Add a new todo..."
					class="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:outline-none"
				/>
				<button
					type="submit"
					class="rounded-lg bg-indigo-500 px-6 py-2 font-semibold text-white hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-900 focus:outline-none"
				>
					Add
				</button>
			</form>

			<!-- Filter buttons -->
			<div class="mb-6 flex justify-center gap-4">
				<button
					class="rounded px-4 py-2 {activeFilter === 'all' ? 'bg-indigo-500' : 'bg-gray-700'}"
					on:click={() => (activeFilter = 'all')}
				>
					All
				</button>
				<button
					class="rounded px-4 py-2 {activeFilter === 'active' ? 'bg-indigo-500' : 'bg-gray-700'}"
					on:click={() => (activeFilter = 'active')}
				>
					Active
				</button>
				<button
					class="rounded px-4 py-2 {activeFilter === 'completed' ? 'bg-indigo-500' : 'bg-gray-700'}"
					on:click={() => (activeFilter = 'completed')}
				>
					Completed
				</button>
			</div>

			<!-- Todo list -->
			<div class="space-y-4">
				{#each filteredTodos as todo (todo.id)}
					<div
						class="flex items-center justify-between rounded-lg bg-gray-800 px-4 py-3 transition-all hover:bg-gray-700"
					>
						<div class="flex items-center gap-3">
							<span class="text-sm text-gray-500">#{todo.id}</span>
							<input
								type="checkbox"
								checked={todo.completed}
								on:change={() => toggleTodo(todo.id)}
								class="h-5 w-5 rounded border-gray-600 bg-gray-700 text-indigo-500 focus:ring-2 focus:ring-indigo-900"
							/>
							<span class="text-lg" class:line-through={todo.completed}>
								{todo.text}
							</span>
						</div>
						<button
							on:click={() => deleteTodo(todo.id)}
							class="text-red-400 hover:text-red-300 focus:outline-none"
							aria-label="Delete todo"
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
			</div>

			<!-- Empty state -->
			{#if filteredTodos.length === 0}
				<div class="text-center text-gray-500">
					<p>
						{#if todos.length === 0}
							No todos yet. Add one to get started!
						{:else}
							No {activeFilter} todos found.
						{/if}
					</p>
				</div>
			{/if}
		</div>
	</div>
</section>
