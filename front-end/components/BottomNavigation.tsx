import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from './StyleSheetCSS';

function BottomNavigation ({navigation}) {

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
		<div style={styles.islandNavigation}>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<Button title="Island" onPress={handleNavigationIsland} />
				<Button title="Tasks" onPress={handleNavigation} />
				<Button title="Shop" onPress={handleNavigationShop} />
				<Button title="Profile" onPress={handleNavigationProfile} />
			</View>
		</div>
	);
}

export default BottomNavigation;