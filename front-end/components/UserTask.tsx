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
				<Text
					style={{
						fontSize: 36,
						fontWeight: 'bold',
						color: '#32CD32',
						marginBottom: 20,
					}}
				>
					Select Your Task
				</Text>
				<View style={{ alignItems: 'center' }}>
					<View
						style={{
							backgroundColor: '#fff',
							padding: 20,
							borderRadius: 10,
							marginBottom: 20,
						}}
					>
						<Text style={{ fontSize: 28, marginBottom: 10, width: 310 }}>
							Join the recycling revolution!
						</Text>
						<Text
							style={{
								fontSize: 22,
								marginBottom: 20,
								color: '#5D5C61',
								width: 310,
							}}
						>
							Turn waste into worth and protect our Earth.
						</Text>
						<TouchableOpacity
							style={{
								backgroundColor: '#ffd32a',
								paddingVertical: 15,
								paddingHorizontal: 30,
								borderRadius: 5,
							}}
							onPress={optionPress}
						>
							<Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>
								Recycle
							</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10 }}
					>
						<Text style={{ fontSize: 28, marginBottom: 10, width: 310 }}>
							Join the reuse rebellion!
						</Text>
						<Text
							style={{
								fontSize: 22,
								marginBottom: 20,
								color: '#5D5C61',
								width: 310,
							}}
						>
							Choose reusables, Earth's pollution solution.
						</Text>

						<TouchableOpacity
							style={{
								backgroundColor: '#ff6b6b',
								paddingVertical: 15,
								paddingHorizontal: 30,
								borderRadius: 5,
							}}
							onPress={() => {
								setMenu(3);
								setIncCredit((credit) => credit + 20);
							}}
						>
							<Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>
								Reuse
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</>
		);
  } else if (menu === 1) {
    menuOption = (
			<>
				<View>
					<Text
						style={{
							fontSize: 36,
							fontWeight: 'bold',
							color: '#32CD32',
							marginBottom: 20,
						}}
					>
						Select Size
					</Text>
					<View style={{ alignItems: 'center' }}>
						<View
							style={{
								backgroundColor: '#fff',
								padding: 20,
								borderRadius: 10,
								marginBottom: 20,
							}}
						>
							<Text style={{ fontSize: 28, marginBottom: 10, width: 310 }}>
								{String.fromCodePoint(0x1f3f7)}
							</Text>

							<TouchableOpacity
								onPress={() => {
									optionPress();
									setIncCredit((credit) => credit + 5);
								}}
							>
								<Text>Small</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={{ alignItems: 'center' }}>
						<View
							style={{
								backgroundColor: '#fff',
								padding: 20,
								borderRadius: 10,
								marginBottom: 20,
							}}
						>
							<Text style={{ fontSize: 28, marginBottom: 10, width: 310 }}>
								{String.fromCodePoint(0x1f9f4)}
							</Text>
							<TouchableOpacity
								onPress={() => {
									optionPress();
									setIncCredit((credit) => credit + 10);
								}}
							>
								<Text>Medium</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={{ alignItems: 'center' }}>
						<View
							style={{
								backgroundColor: '#fff',
								padding: 20,
								borderRadius: 10,
								marginBottom: 20,
							}}
						>
							<Text style={{ fontSize: 28, marginBottom: 10, width: 310 }}>
								{String.fromCodePoint(0x1f4e6)}
							</Text>
							<TouchableOpacity
								onPress={() => {
									optionPress();
									setIncCredit((credit) => credit + 15);
								}}
							>
								<Text>Large</Text>
							</TouchableOpacity>
						</View>
					</View>
					<TouchableOpacity
						style={{
							backgroundColor: '#ffd32a',
							paddingVertical: 15,
							paddingHorizontal: 30,
							borderRadius: 5,
						}}
						onPress={() => setMenu((previousState) => previousState - 1)}
					>
						<Text>Go back</Text>
					</TouchableOpacity>
				</View>
			</>
		);
  } else if (menu === 2) {
    menuOption = (
			<>
				<TouchableOpacity onPress={optionPress}>
					<Text
						style={{
							fontSize: 36,
							fontWeight: 'bold',
							color: '#32CD32',
							marginBottom: 20,
						}}
					>
						Select Material
					</Text>
				</TouchableOpacity>
				<View style={{ alignItems: 'center' }}>
					<View
						style={{
							backgroundColor: '#fff',
							padding: 20,
							borderRadius: 10,
							marginBottom: 20,
						}}
					>
						<Text style={{ fontSize: 28, marginBottom: 10, width: 310 }}>
							{String.fromCodePoint(0x1f5de)}
						</Text>
						<TouchableOpacity
							onPress={() => {
								setIncCredit((credit) => credit + 5);
								optionPress();
							}}
						>
							<Text>Paper</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ alignItems: 'center' }}>
					<View
						style={{
							backgroundColor: '#fff',
							padding: 20,
							borderRadius: 10,
							marginBottom: 20,
						}}
					>
						<Text style={{ fontSize: 28, marginBottom: 10, width: 310 }}>
							{String.fromCodePoint(0x1f9cb)}
						</Text>
						<TouchableOpacity
							onPress={() => {
								setIncCredit((credit) => credit + 10);
								optionPress();
							}}
						>
							<Text>Plastic</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ alignItems: 'center' }}>
					<View
						style={{
							backgroundColor: '#fff',
							padding: 20,
							borderRadius: 10,
							marginBottom: 20,
						}}
					>
						<Text style={{ fontSize: 28, marginBottom: 10, width: 310 }}>
							{String.fromCodePoint(0x1f961)}
						</Text>
						<TouchableOpacity
							onPress={() => {
								setIncCredit((credit) => credit + 15);
								optionPress();
							}}
						>
							<Text>Cardboard</Text>
						</TouchableOpacity>
					</View>
				</View>
				<TouchableOpacity
					style={{
						backgroundColor: '#ffd32a',
						paddingVertical: 15,
						paddingHorizontal: 30,
						borderRadius: 5,
					}}
					onPress={() => {
						setMenu((previousState) => previousState - 1);
						setIncCredit(0);
					}}
				>
					<Text>Go back</Text>
				</TouchableOpacity>
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
		<View className={`h-full bg-blue-50`}>
			<View
				className={`flex flex-col h-5/6 p-4 bg-blue-195 rounded-lg shadow-md items-center `}
			>
				{menuOption}
			</View>
			<BottomNavigation navigation={navigation} />
		</View>
	);
  
  
}


export default UserTask