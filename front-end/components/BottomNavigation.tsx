import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type BottomProps = {
	navigation: { navigate: Function };
};

function BottomNavigation({ navigation }: BottomProps) {
	return (
		<View
			className={
				'absolute bottom-0 border-t-2 border-t-green-800 flex-row justify-evenly w-90% h-5% p-2 bg-white inset-x-0'
			}
		>
			{['Island', 'Tasks', 'Shop', 'Profile'].map((title) => (
				<TouchableOpacity
					key={title}
					className={
						'bg-green-500 h-full  w-1/4 border-green-400 rounded-lg p-2 shadow-md mr-1, ml-1'
					}
					onPress={() => navigation.navigate(title)}
				>
					<Text className={'text-center text-lg font-bold text-white'}>
						{title}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
}



export default BottomNavigation;
