import { ScrollView, View } from 'react-native';
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
			<ScrollView showsVerticalScrollIndicator={false} className={'mb-20 mt-5'} nestedScrollEnabled={true}>
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
							navigation={navigation}
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
