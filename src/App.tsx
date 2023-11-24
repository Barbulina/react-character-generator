import { Route } from "wouter";

import createCharacteristicRepository from "./modules/character/infractructure/repository/characteristicRepository/characteristicRepository";
import createCharacterLocalStorageRepository from "./modules/character/infractructure/repository/characterRepository/characterRepository";
import { CharactersContextProvider } from "./UI/characters/CharacterContext";
import { CreateCharacter } from "./UI/characters/pages/create/Create";
import { CharacterList } from "./UI/characters/pages/list/List";

export function App() {
	const characterRepository = createCharacterLocalStorageRepository();
	const characteristicRepository = createCharacteristicRepository();

	return (
		<div className="App">
			<h1>OSR</h1>
			<CharactersContextProvider
				characteristicsRepository={characteristicRepository}
				characterRepository={characterRepository}
			>
				<Route path="/" component={CharacterList} />
				<Route path="/characters-list" component={CharacterList} />
				<Route path="/character-creator" component={CreateCharacter} />
			</CharactersContextProvider>
		</div>
	);
}
