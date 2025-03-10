export type Task = {
	id: string;
	title: string;
	done: boolean;
};

export type Filter = 'all' | 'todo' | 'done';
