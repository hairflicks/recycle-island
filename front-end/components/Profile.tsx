import { View, Text, Button, Image, TouchableOpacity} from 'react-native';
import BottomNavigation from './BottomNavigation';
import * as api from '../api'
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
	name: String,
	username: String,
	island: [],
	inventory: {},
	hash: String,
	credits: Number
	_v : Number,
	_id: Number
  }	

type ProfileProps = {
	navigation: { navigate: Function };
  route: {params: {setCurrentUser: Function, currentUser: User}}
};


function Profile ({navigation, route}: ProfileProps) {

  const {setCurrentUser, currentUser} = route.params	
  const [recycled, setRecycled] = useState(0)
  const [totalEarned, setTotalEarned] = useState(0)
  const [areYouSure, setAreYouSure] = useState('hidden')

	// console.log(currentUser)
  function handleSignOut() {
	setCurrentUser()
	navigation.navigate('Login');
	console.log('signing out')
  }

  async function handleDelete() {
	setAreYouSure('hidden')
	try {
	api.deleteUserByUsername(currentUser.username)
	await AsyncStorage.removeItem(currentUser?.username)
	setCurrentUser()
	navigation.navigate('Login');
	// console.log('hi')
	} catch(err) {
		console.log(err.response.data.message)
	}
  }


  async function deleteCheck() {
	setAreYouSure('')
  }

  async function noPress() {
	setAreYouSure('hidden')
  }

  useEffect(() => {
	const getStats = async () => {
		try {
		const userStats = await AsyncStorage.getItem(currentUser?.username)
		const userStatsObj = JSON.parse(userStats)
		setRecycled(userStatsObj.recycled)
		setTotalEarned(userStatsObj.totalEarned)
		} catch (err) {
		}
	}
	getStats()
  },)

  return (
		<View className={`h-full bg-green-50`}>
			<View className={`flex flex-col h-5/6 p-4 bg-green-200 rounded-lg shadow-md items-center border-green-800 border-2 m-2 mt-5`}>
				<View className={`mb-4 items-center`}>
					<Text className={`text-2xl font-bold text-gray-800 mb-5`}>
						Welcome {currentUser.username}!
					</Text>
					<View className={`flex-row mt-5`}>
						<Text
							className={`text-lg font-medium text-gray-500`}
						>{`${currentUser.credits}`}</Text>
						<Image
							className={`w-3 h-3`}
							source={require('../assets/coin.png')}
						/>
					</View>
					<Text className={'text-lg font-bold m-2 mt-7'}>You've recycled {recycled} items!</Text>
					<Text className={'text-lg font-bold m-2 mb-20'}>You've earned {totalEarned} credits in total!</Text>
				</View>
				<TouchableOpacity
					className={`bg-blue-500 m-2 w-80 items-center mt-40`}
					onPress={handleSignOut}
				>
					<Text className={`text-2xl p-1`}>Sign out</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className={`bg-red-500 items-center w-80`}
					onPress={deleteCheck}
				>
					<Text className={`text-2xl p-1`}>DELETE ACCOUNT</Text>
				</TouchableOpacity>
			<View className={`absolute ${areYouSure} bottom-60`}>
					<Text className={'text-2xl font-bold mb-3'}>Are you sure?</Text>
					<View className={'flex-row items-center justify-evenly border-2 bg-green-900'}>
					<TouchableOpacity onPress={handleDelete}>
					<Text className={'text-xl text-white'}>Yes</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={noPress}>
					<Text className={'border-l-2 pl-7 text-xl text-white'}>No</Text>
						</TouchableOpacity>
					</View>
			</View>
			</View>
			<BottomNavigation navigation={navigation} />
		</View>
	);

}



export default Profile;