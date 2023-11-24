export type CharacteristicMod = {
	value: number;
	mod: number;
	modArmor?: number;
	init?: number;
	assistant?: number;
	moral?: number;
};

export type Characteristic = {
	id: string;
	label: string;
	mod: CharacteristicMod[];
};

export enum characteristicsEnum {
	STRENGTH = "strength",
	DEXTERITY = "dexterity",
	CONSTITUTION = "constitution",
	INTELLIGENCE = "intelligence",
	WISDOM = "wisdom",
	CHARISMA = "charisma",
}
