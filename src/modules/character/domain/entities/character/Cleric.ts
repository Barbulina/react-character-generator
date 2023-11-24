import { SavingThrows } from "../SavingThrows";
import Character from "./Character";

export class Cleric extends Character {
	label = "CLERIC";
	hitDice = 6;
	mainCharacteristic = ["wisdom"];
	maxLevel = null;
	requirement: Array<{ characteristic: string; minValue: number }> = [
		{
			characteristic: "wisdom",
			minValue: 10,
		},
	];

	savingThrows: SavingThrows = {
		poisonOrDeath: 10,
		rodStaffWand: 10,
		petrificationParalysis: 10,
		BreathWeapon: 10,
		SpellMagicWeapons: 10,
	};
}
