import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from './StyleSheetCSS';
import BottomNavigation from './BottomNavigation';

type ProfileProps = {
	navigation: { navigate: Function };
  route: {params: {setCurrentUser: Function}}
};

function Profile ({navigation, route}: ProfileProps) {

  const {setCurrentUser} = route.params	

  return (
		<View style={styles.container}>
			<BottomNavigation navigation={navigation} />
		</View>
	);

}



export default Profile;