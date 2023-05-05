import { FlatList, View } from 'react-native';
import { useEffect, useState } from "react"

import { styles } from './StyleSheetCSS';
import FlippableCard from './FlippableCard';
import ShopItem from './ShopItem';
import BottomNavigation from './BottomNavigation';
import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
import * as api from '../api'

type User = {
  name: String,
  username: String,
  island: [],
  inventory: [],
  hash: String,
  credits: Number
  _v : Number,
  _id: Number
}	

type ShopProps = {
navigation: { navigate: Function };
route: {params: {currentUser: User | undefined}}
};

function Shop({ navigation, route }: ShopProps) {

  const {currentUser} = route.params  

  const [models, setModels] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try{
			const data = await api.fetchAllItems();
			setModels(data);
			setIsLoading(false);
      } catch (error) {

      }
		};
		fetchData();
  }, [])

	return (
		<View style={styles.cardContainer}>
          {isLoading
          ? <Text>Loading</Text>
          : models.map(model => <FlippableCard key={model.itemName} currentUser={currentUser} model={model}/>) } 

			<BottomNavigation navigation={navigation} />
		</View>
	);
}

export default Shop;
