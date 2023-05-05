import { useEffect, useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { DefaultLoadingManager } from 'three';
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

type TaskProps = {
	navigation: { navigate: Function };
  route: {params: {currentUser: User | undefined, setCurrentUser: Function}}
};

function UserTask ({navigation, route}: TaskProps){

  const {currentUser} = route.params  
  const {setCurrentUser} = route.params

  const [menu, setMenu] = useState(0)
  const [incCredit, setIncCredit] = useState(0)
  const [error, setError] = useState('')



  function optionPress () {
	setMenu((previousState) => previousState + 1)
  }

  useEffect(() => {
	if (menu === 3) {
		async function patchCredits() {
			try {
			const response = await api.patchCreditsByUsername(currentUser?.username, incCredit)
			const newUser = response.data.user
			setCurrentUser(newUser) 
			setTimeout(() => {
				setMenu(0)
				setIncCredit(0)
			},3000)
			} catch(err) {
				setError('Unable to process request. Check your connection...')
				setTimeout(() => {
					setIncCredit(0)
					setMenu(0)
					setError('')
				}, 3000)
			}
		}
		patchCredits()
	}
  }, [menu])
 
  let menuOption
  if (menu === 0) {
    menuOption = (
			<>
				<Text> Select Task</Text>
				<Button title="Recycle" onPress={optionPress} />
				<Button title="Reuse" onPress={() => {
					setMenu(3)
					setIncCredit(credit => credit + 20)
					}} />
			</>
		);
  } else if (menu === 1) {
    menuOption = (
			<>
				<Text> Select Size</Text>
				<Button title="Small" onPress={() => {
					optionPress()
					setIncCredit(credit => credit + 5)
					}} />
				<Button title="Medium" onPress={() => {
					optionPress()
					setIncCredit(credit => credit + 10)
					}} />
				<Button title="Large" onPress={() => {
					optionPress()
					setIncCredit(credit => credit + 15)
					}} />
				<Button title="go back" onPress={() => 
					setMenu((previousState) => previousState -1)} />
			</>
		);
  } else if (menu === 2) {
    menuOption = (
			<>
				<Text> Select Material</Text>
				<Button title="Paper" onPress={() => {
					optionPress()
					setIncCredit(credit => credit + 5)
					}} />
				<Button title="Plastic" onPress={() => {
					optionPress()
					setIncCredit(credit => credit + 10)
					}} />
				<Button title="Cardboard" onPress={() => {
					optionPress()
					setIncCredit(credit => credit + 15)
					}} />
				<Button title="go back" onPress={() => {
					setMenu((previousState) => previousState - 1)
					setIncCredit(0)
					}}/>
			</>
		);
  } else {

    menuOption = (
			<>
				{error ? <Text>{error}</Text> : <Text>You earned {incCredit} credits!</Text>}
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