import Character, { CharacterConstructor } from "./character/Character";
import { Cleric } from "./character/Cleric";
import { Dwarf } from "./character/Dwarf";
import { Elf } from "./character/Elf";
import { Fighter } from "./character/Fighter";
import { Ranger } from "./character/Ranger";
import { Rogue } from "./character/Rogue";
import { Wizard } from "./character/Wizard";

export enum ClassesEnum {
	CLERIC = "cleric",
	DWARF = "dwarf",
	ELF = "elf",
	FIGHTER = "fighter",
	RANGER = "ranger",
	ROGUE = "rogue",
	WIZARD = "wizard",
}

export type AvailableClassType = Character | Cleric | Dwarf | Fighter | Ranger | Rogue | Wizard;

export const classesDictionary: Record<
	ClassesEnum,
	new (character: CharacterConstructor) => AvailableClassType
> = {
	[ClassesEnum.CLERIC]: Cleric,
	[ClassesEnum.DWARF]: Dwarf,
	[ClassesEnum.ELF]: Elf,
	[ClassesEnum.FIGHTER]: Fighter,
	[ClassesEnum.RANGER]: Ranger,
	[ClassesEnum.ROGUE]: Rogue,
	[ClassesEnum.WIZARD]: Wizard,
};
