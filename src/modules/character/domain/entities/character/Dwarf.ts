import { SavingThrows } from "../SavingThrows";
import Character from "./Character";

export class Dwarf extends Character {
	label = "Dwarf";
	hitDice = 8;
	mainCharacteristic = ["strenght"];
	maxLevel = 12;
	requirement: Array<{ characteristic: string; minValue: number }> = [
		{
			characteristic: "constitution",
			minValue: 9,
		},
	];

	savingThrows: SavingThrows = {
		poisonOrDeath: 8,
		rodStaffWand: 9,
		petrificationParalysis: 10,
		BreathWeapon: 13,
		SpellMagicWeapons: 12,
	};
}
