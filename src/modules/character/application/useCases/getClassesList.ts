import { CharacterCharacteristic } from "../../domain/entities/character/Character";
import { classesDictionary } from "../../domain/entities/Classes";

export default function getClassesList(characterCharacteristic: CharacterCharacteristic[]): [] {
	console.log({ characterCharacteristic });
	const classesKeys = Object.keys(classesDictionary);
	classesKeys.forEach((classKey) => {
		const classConstructor = classesDictionary[classKey];
		const classInstance = new classConstructor({
			name: "no-name",
			characteristic: characterCharacteristic,
		});

		console.log({ classInstance });
	});

	return [];
}
