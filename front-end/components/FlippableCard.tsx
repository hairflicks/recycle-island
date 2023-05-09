import React, { useState } from 'react';
import {
	Text,
	TouchableOpacity,
	Animated,
	Image,
	View,
	ScrollView,
	TouchableWithoutFeedback,
	Touchable,
} from 'react-native';

const FlippableCard = ({ currentUser, model, setScrollable }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const rotateY = useState(new Animated.Value(0))[0];

	const flipCard = () => {
		setIsFlipped(!isFlipped);
		Animated.timing(rotateY, {
			toValue: isFlipped ? 0 : 1,
			duration: 350,
			useNativeDriver: true,
		}).start();
	};

	const frontInterpolate = rotateY.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '180deg'],
	});

	const backInterpolate = rotateY.interpolate({
		inputRange: [0, 1],
		outputRange: ['180deg', '360deg'],
	});

	const frontAnimatedStyle = {
		transform: [{ rotateY: frontInterpolate }],
	};

	const backAnimatedStyle = {
		transform: [{ rotateY: backInterpolate }],
	};

	return (
		<TouchableOpacity
			onPress={flipCard}
			className={
				'flex items-center justify-center border border-gray-00 rounded w-36 shadow-lg m-1 h-36'
			}
		>
			{!isFlipped ? (
				<Animated.View
					className={`flex flex-col bg-gray-200 absolute rounded w-full h-full items-center`}
					style={frontAnimatedStyle}
				>
					<Text
						className={
							'border-b-2 border-green-500 w-full m-0 text-center rounded font-bold text-white bg-green-800'
						}
					>
						{model.itemDisplayName}
					</Text>
					<Image
						className={'h-1/2 w-1/2 m-2'}
						source={require(`../assets/Chicken/Chicken.png`)}
					/>
					<View
						className={`flex-row w-full justify-center bg-green-300 border-t-2 border-b-2 border-green-800 p-0.25`}
					>
						<Text
							className={`text-lg font-medium ${
								currentUser.credits >= model.itemCost
									? 'text-green-400'
									: 'text-red-400'
							}`}
						>
							{model.itemCost}
						</Text>
						<Image
							className={`w-3 h-3`}
							source={require('../assets/coin.png')}
						/>
					</View>
				</Animated.View>
			) : (
				<Animated.View
					className={`flex flex-col bg-green-200 absolute rounded w-full h-full`}
					style={backAnimatedStyle}
				>
					<Text
						className={
							'border-b-2 border-green-500 w-full m-0 text-center rounded font-bold text-white bg-green-800'
						}
					>
						{model.itemDisplayName}
					</Text>
					<ScrollView nestedScrollEnabled={true} className={`border-b-2 w-full`}>
					<TouchableOpacity onPress={flipCard}>
						<Text className={`text-xs text-center`}>
							{model.itemDescription}
						</Text>
					</TouchableOpacity>
					</ScrollView>
					<View
						className={`w-11/12 mt-1 mb-1 rounded bg-blue-800 ml-auto mr-auto`}
					>
						<TouchableOpacity>
							<Text className={`text-center text-white`}>Buy</Text>
						</TouchableOpacity>
					</View>
				</Animated.View>
			)}
		</TouchableOpacity>
	);
};

export default FlippableCard;
