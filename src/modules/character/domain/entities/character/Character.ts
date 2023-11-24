import { CharacteristicMod } from "../Characteristic";
import { SavingThrows } from "../SavingThrows";

export interface CharacterCharacteristic {
	value: number;
	label: string;
	id: string;
	mod: CharacteristicMod;
}

export interface IRequirement {
	characteristic: string;
	minValue: number;
}

export interface IAlignment {
	id: string;
	label: string;
}

export default class Character {
	hitDice?: number;
	label?: string;
	class?: string;
	mainCharacteristic?: Array<string>;
	maxLevel?: number | null;
	requirement?: Array<IRequirement> | null;
	savingThrows?: SavingThrows;
	id?: string;
	characteristic: Array<CharacterCharacteristic>;
	name: string;

	private readonly alignment?: string;
	private readonly dicesResults?: Array<number>;
	private readonly hitPoint?: number;
	private readonly player?: string;
	private readonly origin?: string;
	private readonly height?: number;
	private readonly weight?: number;
	private readonly sex?: string;
	private readonly age?: string;
	private readonly hair?: string;
	private readonly eyes?: string;
	private readonly marks?: string;
	private readonly level?: number;

	constructor(character: Character) {
		this.id = character.id;
		this.level = 1;
		this.name = character.name;
		this.player = character.player;
		this.class = character.class;
		this.origin = character.origin;
		this.alignment = character.alignment;
		this.height = character.height;
		this.weight = character.weight;
		this.sex = character.sex;
		this.age = character.age;
		this.hair = character.hair;
		this.eyes = character.eyes;
		this.marks = character.marks;
		this.level = character.level;
		this.label = character.label;
		this.hitPoint = character.hitPoint;
		this.characteristic = character.characteristic;
		this.dicesResults = character.dicesResults;
		this.hitDice = character.hitDice;
		this.mainCharacteristic = character.mainCharacteristic;
		this.maxLevel = character.maxLevel;
		this.requirement = character.requirement;
		this.savingThrows = character.savingThrows;
	}

	canBeClass?(): boolean {
		let canBeClass = true;
		if (!this.requirement) {
			return canBeClass;
		}
		this.requirement.forEach((requirement: IRequirement) => {
			const characteristicToCompare: CharacterCharacteristic | undefined = this.characteristic.find(
				(item) => item.id === requirement.characteristic
			);
			if (characteristicToCompare && requirement.minValue > characteristicToCompare.value) {
				canBeClass = false;
			}
		});

		return canBeClass;
	}

	// TODO Move to useCases

	// setHitPoint() {
	// 	const mod: number = this.characteristic.find(
	// 		(char: ICharacteristic) => char.id === "constitution"
	// 	).mod;
	// 	const diceResult: number = randomIntFromInterval(1, this.hitDice);
	// 	this.hitPoint = diceResult + mod;
	// }
	// canBeClass(): boolean {
	// 	let canBeClass = true;
	// 	if (!this.characteristic || this.characteristic.length < 1) {
	// 		return false;
	// 	}
	// 	if (!this.requirement) {
	// 		return canBeClass;
	// 	}
	// 	this.requirement.forEach((requirement: IRequirement) => {
	// 		const characteristicToCompare: any = this.characteristic.find(
	// 			(item) => item.id === requirement.characteristic
	// 		);
	// 		if (characteristicToCompare && requirement.minValue > characteristicToCompare.value) {
	// 			canBeClass = false;
	// 		}
	// 	});
	// 	return canBeClass;
	// }
	// private thowDices() {
	//   this.dicesResults = chartGenerator();
	// }
}
