<script lang="ts">
	import { page } from '$app/stores';

	interface Crumb {
		text: string;
		href: string;
	}

	$: path = $page.url.pathname;
	$: crumbs = path
		.split('/')
		.filter(Boolean)
		.map((part, index, array) => {
			const text = part
				.split('-')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ');
			const href = '/' + array.slice(0, index + 1).join('/');
			return { text, href };
		});
</script>

<nav aria-label="Breadcrumb" class="container mx-auto bg-gray-900 px-4 py-2">
	<ol class="flex items-center space-x-2 text-sm">
		<li>
			<a href="/" class="text-indigo-400 transition-colors duration-200 hover:text-indigo-300">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
					/>
				</svg>
				<span class="sr-only">Home</span>
			</a>
		</li>

		{#each crumbs as crumb, index}
			<li class="flex items-center">
				<svg class="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
				<a
					href={crumb.href}
					class="ml-2 text-indigo-400 transition-colors duration-200 hover:text-indigo-300"
					class:font-medium={index === crumbs.length - 1}
					class:text-white={index === crumbs.length - 1}
					aria-current={index === crumbs.length - 1 ? 'page' : undefined}
				>
					{crumb.text}
				</a>
			</li>
		{/each}
	</ol>
</nav>
