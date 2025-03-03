<!-- component -->
<div class="flex min-h-screen items-center justify-center bg-gray-100 p-4">
	<div class="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
		<h2 class="mb-6 text-center text-2xl font-bold text-gray-900">Sign In</h2>

		<form class="space-y-4">
			<div>
				<label class="mb-1 block text-sm font-medium text-gray-700">Email</label>
				<input
					type="email"
					class="w-full rounded-lg border border-gray-300 px-4 py-2 transition-all outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
					placeholder="your@email.com"
				/>
			</div>

			<div>
				<label class="mb-1 block text-sm font-medium text-gray-700">Password</label>
				<input
					type="password"
					class="w-full rounded-lg border border-gray-300 px-4 py-2 transition-all outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
					placeholder="••••••••"
				/>
			</div>

			<div class="flex items-center justify-between">
				<label class="flex items-center">
					<input
						type="checkbox"
						class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
					/>
					<span class="ml-2 text-sm text-gray-600">Remember me</span>
				</label>
				<a href="#" class="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
			</div>

			<button
				class="w-full rounded-lg bg-indigo-600 py-2.5 font-medium text-white transition-colors hover:bg-indigo-700"
			>
				Sign In
			</button>
		</form>

		<div class="mt-6 text-center text-sm text-gray-600">
			Don't have an account?
			<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a>
		</div>
	</div>
</div>
