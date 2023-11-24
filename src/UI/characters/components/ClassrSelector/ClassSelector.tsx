import "./ClassSelector.module.scss";

import getClassesList from "../../../../modules/character/application/useCases/getClassesList.1";
import { CharacterCharacteristic } from "../../../../modules/character/domain/entities/character/Character";
import { AvailableClassType } from "../../../../modules/character/domain/entities/Classes";

export default function ClassSelector({
	characteristics,
	onSelectedClass,
}: {
	characteristics: CharacterCharacteristic[];
	onSelectedClass: (characterClass: AvailableClassType) => void;
}) {
	const classesToSelect: AvailableClassType[] = getClassesList(characteristics);
	const handleSelectClass = (classSelected: AvailableClassType) => {
		if (classSelected.canBeClass && classSelected.canBeClass()) {
			onSelectedClass(classSelected);
		}
	};

	return (
		<section className="class-selector">
			<h3>CLASS</h3>
			{classesToSelect.map((classToSelect) => {
				const canBeSelected = classToSelect.canBeClass ? classToSelect.canBeClass() : false;

				return (
					<div
						onClick={() => handleSelectClass(classToSelect)}
						key={classToSelect.label}
						style={{ color: canBeSelected ? "blue" : "red" }}
					>
						{classToSelect.label}
					</div>
				);
			})}
		</section>
	);
}
