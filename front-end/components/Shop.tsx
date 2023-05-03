import { View } from 'react-native';
import { useEffect, useState } from "react"

import { styles } from './StyleSheetCSS';
import ShopItem from './ShopItem';
import BottomNavigation from './BottomNavigation';
import * as api from '../api'

function Shop({ navigation }) {

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
