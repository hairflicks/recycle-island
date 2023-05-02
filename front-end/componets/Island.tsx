import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from './StyleSheetCSS';

function Island(){

    return(
        <View style={styles.container}>
            <div style={styles.canvasBorder}>
                
            </div>
            <div style={styles.islandNavigation}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title="Island" />
                <Button title="Tasks" />
                <Button title="Shop" />
                <Button title="Profile" />
            </View>
            </div>
        </View>
    )
}

export default Island