import { View } from 'react-native';
import { useEffect, useState } from "react"

import { styles } from './StyleSheetCSS';
import ShopItem from './ShopItem';
import BottomNavigation from './BottomNavigation';
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
    api.fetchAllItems().then((response) => {
      console.log(response)
      setModels(response)
      setIsLoading(false)
    })
  }, [])

	return (
		<View style={styles.container}>
      <div style={styles.spaceDown}></div>

      {isLoading
      ? <p>Loading</p>
      : models.map(model => <ShopItem key={model.itemName} model={model}/>) } 

			<BottomNavigation navigation={navigation} />
		</View>
	);
}

export default Shop;
