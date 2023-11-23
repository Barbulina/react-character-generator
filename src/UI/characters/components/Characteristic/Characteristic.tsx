import "./Characteristic.module.style.scss";

import { CharacterCharacteristic } from "../../../../modules/character/domain/entities/character/Character";

export default function Characteristic({
	characteristic,
}: {
	characteristic: CharacterCharacteristic;
}) {
	return (
		<div className="characteristic">
			<div className="characteristic__label">{characteristic.label}</div>
			<div className="characteristic__value">
				{characteristic.value}{" "}
				{characteristic.mod.mod !== 0 && (
					<span className="characteristic__mod">({characteristic.mod.mod})</span>
				)}
			</div>
		</div>
	);
}
