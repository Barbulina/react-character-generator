import { SavingThrows } from "../SavingThrows";
import Character from "./Character";

export class Ranger extends Character {
	label = "Ranger";
	hitDice = 8;
	mainCharacteristic = ["strength", "wisdom"];
	maxLevel = null;
	requirement: Array<{ characteristic: string; minValue: number }> = [
		{
			characteristic: "strength",
			minValue: 12,
		},
		{
			characteristic: "wisdom",
			minValue: 12,
		},
		{
			characteristic: "dexterity",
			minValue: 9,
		},
	];

	savingThrows: SavingThrows = {
		poisonOrDeath: 12,
		rodStaffWand: 13,
		petrificationParalysis: 14,
		BreathWeapon: 15,
		SpellMagicWeapons: 16,
	};
}
