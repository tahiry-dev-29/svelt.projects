import type { Project } from '../types/Project';

class ProjectService {
	private projects: Project[] = [
		{
			title: 'Todo App',
			description: 'A simple todo application with filtering capabilities',
			imageUrl: '/src/lib/images/projects/todo-app.png',
			route: '/projects/todo'
		}
	];

	getProjects(): Project[] {
		return this.projects;
	}
}

export const projectService = new ProjectService();
