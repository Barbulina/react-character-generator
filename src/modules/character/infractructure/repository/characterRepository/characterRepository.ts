import Character from "../../../domain/entities/character/Character";
import { CharacterRepository } from "../../../domain/repository/CharacterRepository";

const LOCAL_STORAGE_KEYS = {
	CHARACTERS: "characters",
};

export default function createCharacterLocalStorageRepository(): CharacterRepository {
	return {
		getAll,
		save,
	};
}

async function save(character: Character) {
	const currentCharacters = getAllFromLocalStorage();
	currentCharacters.set(character.id, character);

	localStorage.setItem(
		LOCAL_STORAGE_KEYS.CHARACTERS,
		JSON.stringify(Array.from(currentCharacters.entries()))
	);

	await Promise.resolve();
}

async function getAll() {
	const characters = getAllFromLocalStorage();

	return Promise.resolve(Array.from(characters.values()));
}

function getAllFromLocalStorage(): Map<string, Character> {
	const characters = localStorage.getItem(LOCAL_STORAGE_KEYS.CHARACTERS);
	if (characters === null) {
		return new Map();
	}

	const map = new Map(JSON.parse(characters) as Iterable<[string, Character]>);

	return map;
}
