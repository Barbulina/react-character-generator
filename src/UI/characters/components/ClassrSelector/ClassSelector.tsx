import "./ClassSelector.module.scss";

import getClassesList from "../../../../modules/character/application/useCases/getClassesList";
import { CharacterCharacteristic } from "../../../../modules/character/domain/entities/character/Character";

export default function ClassSelector({
	characteristics,
}: {
	characteristics: CharacterCharacteristic[];
}) {
	const classes = getClassesList(characteristics);
	console.log(classes);

	return (
		<section className="class-selector">
			<h3>CLASS</h3>
			<button>Select</button>
		</section>
	);
}
