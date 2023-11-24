import { CharacterCharacteristic } from "../../domain/entities/character/Character";
import { Characteristic, CharacteristicMod } from "../../domain/entities/Characteristic";
import { randomIntFromInterval } from "./randomIntFromInterval";

const DEFAULT_NUMBER_OF_THROWS = 3;

export default function createCharacteristicsValues(
	characteristics: Characteristic[]
): CharacterCharacteristic[] {
	return characteristics.map((characteristic) => {
		const characteristicValue = generateCharacteristicValue();
		const { label, id } = characteristic;
		const mod: CharacteristicMod =
			characteristic.mod.find((mod) => mod.value === characteristicValue) ?? characteristic.mod[0];

		return {
			value: characteristicValue,
			label,
			id,
			mod,
		};
	});
}

function generateCharacteristicValue(numberOfThrow: number = DEFAULT_NUMBER_OF_THROWS): number {
	let total = 0;
	for (let index = 0; index < numberOfThrow; index++) {
		total += randomIntFromInterval();
	}

	return total;
}
