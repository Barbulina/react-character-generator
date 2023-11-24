import { ClassesEnum } from "../Classes";
import { SavingThrows } from "../SavingThrows";
import Character from "./Character";

export class Rogue extends Character {
	class = ClassesEnum.ROGUE;
	label = "Rogue";
	hitDice = 4;
	mainCharacteristic = ["dexterity"];
	maxLevel = null;
	requirement: Array<{ characteristic: string; minValue: number }> = [
		{
			characteristic: "dexterity",
			minValue: 10,
		},
	];

	savingThrows: SavingThrows = {
		poisonOrDeath: 16,
		rodStaffWand: 15,
		petrificationParalysis: 13,
		BreathWeapon: 16,
		SpellMagicWeapons: 14,
	};
}
