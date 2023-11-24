import { CharacterCharacteristic } from "../../domain/entities/character/Character";
import { AvailableClassType, classesDictionary, ClassesEnum } from "../../domain/entities/Classes";

export default function getClassesList(
	characterCharacteristic: CharacterCharacteristic[]
): AvailableClassType[] {
	const classesKeys: ClassesEnum[] = Object.keys(classesDictionary) as ClassesEnum[];

	const classesList: AvailableClassType[] = [];

	classesKeys.forEach((classKey) => {
		if (Object.prototype.hasOwnProperty.call(classesDictionary, classKey)) {
			const ClassConstructor = classesDictionary[classKey];
			const classInstance = new ClassConstructor({
				id: "some-id",
				name: "no-name",
				characteristic: characterCharacteristic,
			});

			classesList.push(classInstance);
		}
	});

	return classesList;
}
