import Character from "../../domain/entities/character/Character";
import { CharacterRepository } from "../../domain/repository/CharacterRepository";

export async function findCharacters(
	characterRepository: CharacterRepository
): Promise<Character[]> {
	return characterRepository.getAll();
}
