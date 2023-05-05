import { View, Text, Button} from 'react-native';
import BottomNavigation from './BottomNavigation';

type ProfileProps = {
	navigation: { navigate: Function };
  route: {params: {setCurrentUser: Function}}
};

function Profile ({navigation, route}: ProfileProps) {

  const {setCurrentUser} = route.params	

  return (
		<View>
			<View className={`p-4 bg-white rounded-lg shadow-md`}>
				<View className={`mb-4`}>
					<Text className={`text-2xl font-bold text-gray-800`}>Username</Text>
					<Text className={`text-lg font-medium text-gray-500`}>100 Coins</Text>
				</View>
				<Button title='Sign Out' onPress={() => console.log('Signed Out')} />
			</View>
			<BottomNavigation navigation={navigation} />
		</View>
	);

}



export default Profile;