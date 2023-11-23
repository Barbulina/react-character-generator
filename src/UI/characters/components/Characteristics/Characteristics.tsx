import "./Characteristics.module.style.scss";

import { CharacterCharacteristic } from "../../../../modules/character/domain/entities/character/Character";
import Characteristic from "../Characteristic/Characteristic";

export function Characteristics({
	characteristics,
}: {
	characteristics: CharacterCharacteristic[];
}) {
	return (
		<section className="characteristics">
			<h3>CHARACTERISTICS</h3>
			<div className="characteristics__list">
				{characteristics.map((characteristic) => (
					<Characteristic key={characteristic.id} characteristic={characteristic} />
				))}
			</div>
		</section>
	);
}
