import "./list.scss";

import { Link } from "wouter";

import Character from "../../../../modules/character/domain/entities/character/Character";
import { useCharactersContext } from "../../CharacterContext";

export function CharacterList() {
	const { characters } = useCharactersContext();

	return (
		<section className="character-list">
			<h2 className="character-list__title">CHARACTER LIST</h2>
			<ul>
				{characters.map((character: Character) => (
					<li>{character.id}</li>
				))}
			</ul>
			<div className="character-list__actions">
				<Link href="/character-creator">CREATE</Link>
			</div>
		</section>
	);
}
