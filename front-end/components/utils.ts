import { coordinates } from "./lookupTables";

export const checkAvailableCoordinates = (currentUser) => {
  let availablePos = null;

	const islandData = currentUser.island;

	if ((islandData.length !== 0) | undefined) {
		islandData.forEach((e) => {
			for (const c in coordinates) {
				const staticCoordinates = coordinates[c];
				if (
					staticCoordinates.pos.x === e.coordinates[0] &&
					staticCoordinates.pos.z === e.coordinates[2]
				) {
					staticCoordinates.model = e.itemName;
				}
			}
		});
	}

	const emptyPositions = [];
	for (const model in coordinates)
		if (coordinates[model].model === null) emptyPositions.push(model);

	let emptySlotNumber;
	if (emptyPositions.length === 0) emptySlotNumber = null;
	else
		emptySlotNumber =
			emptyPositions[Math.floor(Math.random() * emptyPositions.length)];

	if (emptySlotNumber) {
		availablePos = coordinates[emptySlotNumber];
	} else {
		availablePos = null;
	}

  return availablePos
}