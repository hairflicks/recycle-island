import { FlatList, ScrollView, View } from 'react-native';
import { useEffect, useState,} from 'react';

import FlippableCard from './FlippableCard';
import BottomNavigation from './BottomNavigation';
import {Text} from 'react-native';
import * as api from '../api';

type User = {
	name: String;
	username: String;
	island: [];
	inventory: [];
	hash: String;
	credits: Number;
	_v: Number;
	_id: Number;
};

type ShopProps = {
	navigation: { navigate: Function };
	route: { params: { currentUser: User | undefined, setCurrentUser: Function } };
};

function Shop({ navigation, route }: ShopProps) {
	const { currentUser, setCurrentUser } = route.params;

	const coordinates = {
        1: {pos: {x: -.8, y: null, z: -1.3 }, model: null},
        2: {pos: {x: 0, y: null, z: -1.3 }, model: null},
        3: {pos: {x: .8, y: null, z: -1.3 }, model: null},
        
        4: {pos: {x: -1.4, y: null, z: -.4 }, model: null},
        5: {pos: {x: -.7, y: null, z: -.4 }, model: null},
        6: {pos: {x: 0, y: null, z: -.4 }, model: null},
        7: {pos: {x: .7, y: null, z: -.4 }, model: null},
        8: {pos: {x: 1.4, y: null, z: -.4 }, model: null},

        9: {pos: {x: -1.4, y: null, z: .4 }, model: null},
        10: {pos: {x: -.7, y: null, z: .4 }, model: null},
        11: {pos: {x: 0, y: null, z: .4 }, model: null},
        12: {pos: {x: .7, y: null, z: .4 }, model: null},
        13: {pos: {x: 1.4, y: null, z: .4 }, model: null},

        14: {pos: {x: -.8, y: null, z: 1.3 }, model: null},
        15: {pos: {x: 0, y: null, z: 1.3 }, model: null},
        16: {pos: {x: .8, y: null, z: 1.3 }, model: null},
    }

	const islandData = currentUser.island
    islandData.forEach(e => {
        for(const c in coordinates){
            const staticCoordinates =  coordinates[c]
            if(staticCoordinates.pos.x === e.coordinates[0] && staticCoordinates.pos.z === e.coordinates[1]) {
                staticCoordinates.model = e.itemName
            }
        }
    });

	const emptyPositions = []
	for (const model in coordinates) if(coordinates[model].model === null) emptyPositions.push(model)	  

	let emptySlotNumber
	if(emptyPositions.length === 0) emptySlotNumber = null
	else emptySlotNumber = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];

	let availablePos = null
	if(emptySlotNumber !== null){
		availablePos = coordinates[emptySlotNumber]
	}else{
		availablePos = null
	}
	

	const [models, setModels] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await api.fetchAllItems();
				setIsLoading(false);
				setModels(data);
			} catch (error) {}
		};
		fetchData();
	}, []);


	return (
		<View className={'h-full bg-green-50'}>
			<ScrollView showsVerticalScrollIndicator={false} className={'mb-20'} nestedScrollEnabled={true}>
			<View
				className={`flex flex-row flex-wrap p-2 bg-green-200 mb-10 rounded-lg shadow-md items-center border-green-800 border-2 m-2 mt-5 justify-evenly overflow-scroll`}
			>
				{isLoading ? (
					<Text>Loading</Text>
				) : (
					models.map((model) => (
							<FlippableCard
							key={model.itemName}
							currentUser={currentUser}
							setCurrentUser={setCurrentUser}
							model={model}
							availablePos={availablePos}
						/>
					))
				)}
			</View>
			</ScrollView>
			<BottomNavigation navigation={navigation} />
		</View>
	);
}

export default Shop;
