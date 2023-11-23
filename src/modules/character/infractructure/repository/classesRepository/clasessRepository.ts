import { ClassesEnum } from "../../../domain/entities/Classes";
import { ClassesRepository } from "../../../domain/repository/ClasessRepository";

const availableClasses = Object.keys(ClassesEnum).map((key) => key);

export default function createClassesRepository(): ClassesRepository {
	return {
		getAll,
	};
}

async function getAll() {
	return Promise.resolve(availableClasses);
}
