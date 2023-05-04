import { View } from 'react-native';
import { useEffect, useState } from "react"

import { styles } from './StyleSheetCSS';

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

  const [model, setModel] = useState([])

  useEffect(() => {
    api.fetchAllItems().then((response) => {
      console.log(response)
      setModel(response[0])
    })
  }, [])

  const bearImage = require('../assets/BearCub/BearCub.png')

	return (
		<View style={styles.container}>
      
      <div style={styles.shopItem}>
        <img src={bearImage} style={styles.shopItemImage} ></img>
        <p style={styles.shopItemDescription}>{'nothing'}</p>
        <p style={styles.shopItemBuy}>buy</p>
      </div>


			<BottomNavigation navigation={navigation} />
		</View>
	);
}

export default Shop;
