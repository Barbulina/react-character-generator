import { Characteristic } from "../../domain/entities/Characteristic";
import { CharacteristicRepository } from "../../domain/repository/CharacteristicRepository";

export async function findCharacteristics(
	characteristicsRepository: CharacteristicRepository
): Promise<Characteristic[]> {
	return characteristicsRepository.getAll();
}
