import React, { useContext, useEffect, useState } from "react";

import { createCharacter } from "../../modules/character/application/useCases/createCharacter";
import { findCharacteristics } from "../../modules/character/application/useCases/findCharacteristics";
import { findCharacters } from "../../modules/character/application/useCases/findCharacters";
import Character from "../../modules/character/domain/entities/character/Character";
import { Characteristic } from "../../modules/character/domain/entities/Characteristic";
import { CharacteristicRepository } from "../../modules/character/domain/repository/CharacteristicRepository";
import { CharacterRepository } from "../../modules/character/domain/repository/CharacterRepository";

export interface ContextState {
	characters: Character[];
	characteristics: Characteristic[];
	createCharacter: (character: Character) => Promise<void>;
}

export const CharactersContext = React.createContext({} as ContextState);

export const CharactersContextProvider = ({
	children,
	characterRepository,
	characteristicsRepository,
}: React.PropsWithChildren<{
	characterRepository: CharacterRepository;
	characteristicsRepository: CharacteristicRepository;
}>) => {
	const [characters, setCharacter] = useState<Character[]>([]);
	const [characteristics, setCharacteristics] = useState<Characteristic[]>([]);

	async function create(character: Character): Promise<void> {
		await createCharacter(characterRepository, character);
		await getCharacters();

		return Promise.resolve();
	}

	async function getCharacters() {
		const characters = await findCharacters(characterRepository);
		setCharacter(characters);
	}
	async function getCharacteristics() {
		const characteristics = await findCharacteristics(characteristicsRepository);
		setCharacteristics(characteristics);
	}

	useEffect(() => {
		void getCharacters();
		void getCharacteristics();
	}, []);

	return (
		<CharactersContext.Provider value={{ characters, createCharacter: create, characteristics }}>
			{children}
		</CharactersContext.Provider>
	);
};

export const useCharactersContext = () => useContext(CharactersContext);
