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
	route: { params: { currentUser: User | undefined } };
};

function Shop({ navigation, route }: ShopProps) {
	const { currentUser } = route.params;

	const [models, setModels] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await api.fetchAllItems();
				setModels(data);
				setIsLoading(false);
			} catch (error) {}
		};
		fetchData();
	}, []);

	return (
		<View className={'h-full bg-green-50'}>
			<View
				className={`flex flex-row flex-wrap h-5/6 p-2 bg-green-100 rounded-lg shadow-md items-center border-green-800 border-2 m-2 mt-5 justify-evenly overflow-scroll`}
			>
				{isLoading ? (
					<Text>Loading</Text>
				) : (
					models.map((model) => (
						<FlippableCard
							key={model.itemName}
							currentUser={currentUser}
							model={model}
						/>
					))
				)}
			</View>

			<BottomNavigation navigation={navigation} />
		</View>
	);
}

export default Shop;
