import { SavingThrows } from "../SavingThrows";
import Character from "./Character";

export class Wizard extends Character {
	label = "Mage";
	hitDice = 4;
	mainCharacteristic = ["intelligence"];
	maxLevel = null;
	requirement: Array<{ characteristic: string; minValue: number }> = [
		{
			characteristic: "intelligence",
			minValue: 12,
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
