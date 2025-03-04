import { writable } from 'svelte/store';
import { projectService } from '$lib/services/ProjectService';
import type { Project } from '$lib/types/Project';

export const searchQuery = writable('');
export const searchResults = writable<Project[]>([]);

export const performSearch = async (query: string) => {
	await new Promise((resolve) => setTimeout(resolve, 500));
	const results = projectService.searchProjects(query);
	searchResults.set(results);
};
