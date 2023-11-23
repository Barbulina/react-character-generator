import Character from "../entities/character/Character";

export interface CharacterRepository {
	getAll: () => Promise<Character[]>;
	save: (character: Character) => Promise<void>;
}
