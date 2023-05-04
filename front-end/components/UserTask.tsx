import { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { DefaultLoadingManager } from 'three';
import { styles } from './StyleSheetCSS';
import BottomNavigation from './BottomNavigation';

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

type TaskProps = {
	navigation: { navigate: Function };
  route: {params: {currentUser: User | undefined}}
};

function UserTask ({navigation, route}: TaskProps){

  const {currentUser} = route.params  

  const [menu, setMenu] = useState(0)

  function optionPress () {
    setMenu((previousState) => previousState + 1)
  }
 
  let menuOption
  if (menu === 0) {
    menuOption = (
			<>
				<h1> Select Task</h1>
				<Button title="Recycle" onPress={optionPress} />
				<Button title="Reuse" onPress={optionPress} />
			</>
		);
  } else if (menu === 1) {
    menuOption = (
			<>
				<h1> Select Size</h1>
				<Button title="Small" onPress={optionPress} />
				<Button title="Medium" onPress={optionPress} />
				<Button title="Large" onPress={optionPress} />
				<Button title="go back" onPress={() => setMenu((previousState) => previousState -1)} />
			</>
		);
  } else if (menu === 2) {
    menuOption = (
			<>
				<h1> Select Material</h1>
				<Button title="Paper" onPress={optionPress} />
				<Button title="Plastic" onPress={optionPress} />
				<Button title="Cardboard" onPress={optionPress} />
				<Button title="go back" onPress={() => setMenu((previousState) => previousState - 1)}/>
			</>
		);
  } else {

    menuOption = (
			<>
				<h1> Congratulations!</h1>
				<Button title="Recycle More!" onPress={() => setMenu(0)} />
			</>
		);

  }
  
  return (
  
		<View style={styles.container}>
    

    {menuOption}


			<BottomNavigation navigation={navigation} />
		</View>
	);
  
  
}


export default UserTask