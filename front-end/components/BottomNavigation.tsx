import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from './StyleSheetCSS';

type BottomProps = {
	navigation: { navigate: Function };
}

function BottomNavigation ({navigation}: BottomProps) {

const handleNavigation = () => {
	navigation.navigate('UserTask');
};

const handleNavigationIsland = () => {
	navigation.navigate('Island');
};

const handleNavigationShop = () => {
	navigation.navigate('Shop');
};

const handleNavigationProfile = () => {
	navigation.navigate('Profile');
};



  return (
		<View className={'flex-row justify-evenly  w-full h-5%'}>
			<TouchableOpacity
				className={'h-full border-black border w-1/4'}
				onPress={handleNavigationIsland}
			>
				<Text>Island</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.taskButton} onPress={handleNavigation}>
				<Text>Tasks</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.shopButton}
				onPress={handleNavigationShop}
			>
				<Text>Shop</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.profileButton}
				onPress={handleNavigationProfile}
			>
				<Text>Profile</Text>
			</TouchableOpacity>
		</View>
	);
}

export default BottomNavigation;