import { View, Text, Button, Image, TouchableOpacity} from 'react-native';
import BottomNavigation from './BottomNavigation';
import * as api from '../api'
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


async function Profile ({navigation, route}: ProfileProps) {

  const {setCurrentUser, currentUser} = route.params
  const userStats = await AsyncStorage.getItem(currentUser?.username)
  console.log(userStats)
  
	console.log(currentUser)
  function handleSignOut() {
	setCurrentUser()
	navigation.navigate('Login');
	console.log('signing out')
  }

  async function handleDelete() {
	try {
	api.deleteUserByUsername(currentUser.username)
	setCurrentUser()
	navigation.navigate('Login');
	console.log('hi')
	} catch(err) {
		console.log(err.response.data.message)
	}
  }

  return (
		<View className={`h-full bg-green-50`}>
			<View className={`flex flex-col h-5/6 p-4 bg-green-200 rounded-lg shadow-md items-center border-green-800 border-2 m-2 mt-5`}>
				<View className={`mb-4 items-center`}>
					<Text className={`text-2xl font-bold text-gray-800 mb-5`}>
						{currentUser.username}
					</Text>
					<View className={`flex-row`}>
						<Text
							className={`text-lg font-medium text-gray-500`}
						>{`${currentUser.credits}`}</Text>
						<Image
							className={`w-3 h-3`}
							source={require('../assets/coin.png')}
						/>
					</View>
				</View>
				<TouchableOpacity
					className={`w-55 bg-blue-500 rounded-lg`}
					onPress={handleSignOut}
				>
					<Text className={`text-2xl p-1`}>Sign out</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className={`w-55 bg-red-500 rounded-lg`}
					onPress={handleDelete}
				>
					<Text className={`text-2xl p-1`}>DELETE ACCOUNT</Text>
				</TouchableOpacity>
			</View>
			<BottomNavigation navigation={navigation} />
		</View>
	);

}



export default Profile;