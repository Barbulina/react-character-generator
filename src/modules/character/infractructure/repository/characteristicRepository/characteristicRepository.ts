import { CharacteristicRepository } from "../../../domain/repository/CharacteristicRepository";
import { characteristicsData } from "./data";

export default function createCharacteristicRepository(): CharacteristicRepository {
	return {
		getAll,
	};
}

async function getAll() {
	return Promise.resolve(characteristicsData);
}
