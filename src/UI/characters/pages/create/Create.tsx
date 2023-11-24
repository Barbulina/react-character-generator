import { useState } from "react";
import { useLocation } from "wouter";

import createCharacteristicsValues from "../../../../modules/character/application/useCases/createCharacteristicsValues";
import { CharacterCharacteristic } from "../../../../modules/character/domain/entities/character/Character";
import { AvailableClassType } from "../../../../modules/character/domain/entities/Classes";
import { useCharactersContext } from "../../CharacterContext";
import { Characteristics } from "../../components/Characteristics/Characteristics";
import ClassSelector from "../../components/ClassrSelector/ClassSelector";

export function CreateCharacter() {
	const { createCharacter, characteristics } = useCharactersContext();
	const [location, setLocation] = useLocation();
	const [characteristicsValues, setCharacteristicsValues] = useState<CharacterCharacteristic[]>([]);
	const [characterClass, setCharacterClass] = useState<AvailableClassType>();

	const handleOnCreateCharacteristicsValues = () => {
		setCharacteristicsValues(createCharacteristicsValues(characteristics));
		// TODO calc available classes
	};

	const handleOnCreate = () => {
		try {
			//	await createCharacter();
			setLocation("/characters-list");
		} catch (e) {
			throw new Error();
		}
	};

	const handleOnSelectedClass = (characterClass: AvailableClassType) => {
		setCharacterClass(characterClass);
	};

	return (
		<section className="create-character">
			<h2>Create character</h2>
			<article>
				<Characteristics characteristics={characteristicsValues} />
				{characteristicsValues.length < 1 && (
					<button onClick={() => handleOnCreateCharacteristicsValues()}>CHARACTERISTICS</button>
				)}
			</article>
			{Boolean(characteristicsValues.length > 0) && (
				<article>
					{characterClass ? (
						characterClass.label
					) : (
						<ClassSelector
							characteristics={characteristicsValues}
							onSelectedClass={handleOnSelectedClass}
						/>
					)}
				</article>
			)}
			<article>{/* <button onClick={() => handleOnCreate()}>create</button> */}</article>
		</section>
	);
}
