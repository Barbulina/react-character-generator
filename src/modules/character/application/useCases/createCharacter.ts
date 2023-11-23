import Character from "../../domain/entities/character/Character";
import { CharacterRepository } from "../../domain/repository/CharacterRepository";

export async function createCharacter(
	characterRepository: CharacterRepository,
	character: Character
): Promise<void> {
	// TODO validation
	await characterRepository.save(character);
}
