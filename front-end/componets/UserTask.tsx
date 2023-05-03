import { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { DefaultLoadingManager } from 'three';
import { styles } from './StyleSheetCSS';
import BottomNavigation from './BottomNavigation';



function UserTask ({navigation}){

  const [menu, setMenu] = useState(0)

  function optionSelectedTask () {
    setMenu(1)
  }

  function optionSelectedSize() {
		setMenu(2);
	}
  
  function optionSelectedMaterial() {
		setMenu(3);
	}
 
  let menuOption
  if (menu === 0) {
    menuOption = (
			<>
				<h1> Select Task</h1>
				<Button title="Recycle" onPress={optionSelectedTask} />
				<Button title="Reuse" onPress={optionSelectedTask} />
			</>
		);
  } else if (menu === 1) {
    menuOption = (
			<>
				<h1> Select Size</h1>
				<Button title="Small" onPress={optionSelectedSize} />
				<Button title="Medium" onPress={optionSelectedSize} />
				<Button title="Large" onPress={optionSelectedSize} />
				<Button title="go back" onPress={() => setMenu((previousState) => previousState -1)} />
			</>
		);
  } else if (menu === 2) {
    menuOption = (
			<>
				<h1> Select Material</h1>
				<Button title="Paper" onPress={optionSelectedMaterial} />
				<Button title="Plastic" onPress={optionSelectedMaterial} />
				<Button title="Cardboard" onPress={optionSelectedMaterial} />
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