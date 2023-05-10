import { Image, Touchable, TouchableOpacity, View } from 'react-native';
import { coordinates } from './lookupTables';
import * as api from '../api';
import { checkAvailableCoordinates } from './utils';

export default function ModelAddCard({
	model,
	setCurrentUser,
	currentUser,
	navigation,
}) {
	const coordinatesArray = Object.values(coordinates);

	const availablePos = checkAvailableCoordinates(currentUser)

	async function addToIsland() {
		if (availablePos !== null) {
			const readyToInsert = { itemName: model.itemName, coordinates: [] };
			readyToInsert.coordinates.push(availablePos.pos.x);
			readyToInsert.coordinates.push(modelYAxisRef[readyToInsert.itemName]);
			readyToInsert.coordinates.push(availablePos.pos.z);
			try {
				const newUserDetails = await api.patchIslandByUsername(
					currentUser.username,
					readyToInsert
				);
				await setCurrentUser(newUserDetails.data.user);
				navigation.push('Island');
        } catch (err) {
          console.log(err)
        }
	  }
  }

	let path = '';
	if (model === 'Chicken') path = require(`../assets/Chicken.png`);
	if (model === 'Bee') path = require(`../assets/Bee.png`);
	if (model === 'Alligator') path = require(`../assets/Alligator.png`);
	if (model === 'Dragon') path = require(`../assets/Dragon.png`);
	if (model === 'Goat') path = require(`../assets/Goat.png`);
	if (model === 'Lion') path = require(`../assets/Lion.png`);
	if (model === 'Koala') path = require(`../assets/Koala.png`);
	if (model === 'PalmTree') path = require(`../assets/PalmTree.png`);
	if (model === 'Panda') path = require(`../assets/Panda.png`);
	if (model === 'PeppermintPenguin')
		path = require(`../assets/PeppermintPenguin.png`);
	if (model === 'Frog') path = require(`../assets/Frog.png`);
	if (model === 'Monkey') path = require(`../assets/Monkey.png`);
	return (
		<View className={'border-2 w-20 items-center'}>
			<TouchableOpacity onPress={addToIsland}>
				<Image className={'h-14 w-14 bg-black-500 mt-2'} source={path} />
			</TouchableOpacity>
		</View>
	);
}
