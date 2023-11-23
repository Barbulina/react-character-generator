import { SavingThrows } from "../SavingThrows";
import Character from "./Character";

export class Fighter extends Character {
	label = "Fighter";
	class = "fighter";
	hitDice = 10;
	mainCharacteristic = ["strength"];
	maxLevel = null;
	requirement = null;
	savingThrows: SavingThrows = {
		poisonOrDeath: 12,
		rodStaffWand: 13,
		petrificationParalysis: 14,
		BreathWeapon: 15,
		SpellMagicWeapons: 16,
	};
}
