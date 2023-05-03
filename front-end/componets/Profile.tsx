import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from './StyleSheetCSS';
import BottomNavigation from './BottomNavigation';

function Profile ({navigation}) {

  return (
		<View style={styles.container}>
			<BottomNavigation navigation={navigation} />
		</View>
	);

}



export default Profile;