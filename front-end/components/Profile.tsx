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

  function handleSignOut(): void {
	setCurrentUser()
	navigation.navigate('Login');
  }

  async function handleDelete() {
	setAreYouSure('hidden')
	try {
	api.deleteUserByUsername(currentUser.username)
	await AsyncStorage.removeItem(currentUser?.username)
	setCurrentUser()
	navigation.navigate('Login');
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
		<View className={`h-full bg-cyan-50`}>
			<View
				className={`flex flex-col h-5/6 p-4 rounded-lg shadow-md items-center relative  mt-10 mb-auto`}
			>
				<View className={`items-center`}>
					<View>
						<Text
							className={`text-4xl font-bold text-gray-800 mb-auto mt-auto p-1 text-green-400`}
						>
							Welcome {currentUser.username}!
						</Text>
					</View>
					<View className={`flex-row mt-5`}>
						<Text
							className={`text-4xl font-medium text-gray-500`}
						>{`${currentUser.credits}`}</Text>
						<Image
							className={`w-3 h-3`}
							source={require('../assets/coin.png')}
						/>
					</View>
					<Text className={'text-2xl font-bold m-2 mt-7'}>
						You've recycled <Text className={`text-green-700`}>{recycled}</Text>{' '}
						items!
					</Text>

					<Text className={'text-2xl m-2 mb-20'}>
						Since you landed on Recycland, you've earned{' '}
						<Text className={`text-green-700`}>{totalEarned} </Text>
						credits in total!
					</Text>
				</View>
				<View>
					<Text style={{ fontSize: 120 }}>{String.fromCodePoint(0x1f30d)}</Text>
				</View>

				<View className={`items-center absolute bottom-6`}>
					<TouchableOpacity
						className={`bg-yellow-400 m-2 w-80 items-center rounded`}
						onPress={handleSignOut}
					>
						<Text className={`text-xl p-1`}>Sign Out</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={deleteCheck}>
						<Text className={`text-l p-1 text-red-500`}>Delete Account</Text>
					</TouchableOpacity>
				</View>
				<View className={`absolute ${areYouSure} bottom-48`}>
					<Text className={'text-2xl font-bold mb-3'}>Are you sure?</Text>
					<View
						className={
							'flex-row items-center justify-evenly border-2 bg-green-900 rounded'
						}
					>
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