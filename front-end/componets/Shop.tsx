import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from './StyleSheetCSS';

import BottomNavigation from './BottomNavigation';

function Shop({ navigation }) {
	return (
		<View style={styles.container}>
      <div style={styles.shopItem}>
        <p style={styles.shopItemImage}> Image </p>
        <p> item description </p>
        <p> button</p>
      </div>
			<BottomNavigation navigation={navigation} />
		</View>
	);
}

export default Shop;
