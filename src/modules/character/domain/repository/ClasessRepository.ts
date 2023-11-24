export interface ClassesRepository {
	getAll: () => Promise<string[]>;
}
