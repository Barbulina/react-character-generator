import { SavingThrows } from "../SavingThrows";
import Character from "./Character";

export class Elf extends Character {
	label = "Elf";
	hitDice = 6;
	mainCharacteristic = ["dexterity", "intelligence"];
	maxLevel = 10;
	requirement: Array<{ characteristic: string; minValue: number }> = [
		{
			characteristic: "intelligence",
			minValue: 12,
		},
		{
			characteristic: "dexterity",
			minValue: 13,
		},
	];

	savingThrows: SavingThrows = {
		poisonOrDeath: 12,
		rodStaffWand: 13,
		petrificationParalysis: 13,
		BreathWeapon: 15,
		SpellMagicWeapons: 15,
	};
}
