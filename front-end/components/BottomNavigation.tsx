import { View, Text, TouchableOpacity } from 'react-native';

type BottomProps = {
	navigation: { navigate: Function };
};

function BottomNavigation({ navigation }: BottomProps) {
	return (
		<View className={'absolute bottom-0 border-t-2 border-t-green-800 flex-row justify-evenly  w-90% h-5% p-2 bg-white inset-x-0 '}>
			{['Island', 'Tasks', 'Shop', 'Profile'].map((title) => (
				<TouchableOpacity
					className={
						'bg-green-800 h-full border-4 w-1/4 border-green-200 rounded-lg p-2'
					}
					onPress={() => navigation.navigate(title)}
				>
					<Text className={'text-center text-base font-bold text-green-200'}>
						{title}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
}

export default BottomNavigation;
