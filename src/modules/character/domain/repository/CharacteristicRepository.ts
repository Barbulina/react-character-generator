import { Characteristic } from "../entities/Characteristic";

export interface CharacteristicRepository {
	getAll: () => Promise<Characteristic[]>;
}
