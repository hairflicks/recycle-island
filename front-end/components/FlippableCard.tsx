import React, { useState } from 'react';
import { Text, TouchableOpacity, Animated, Image } from 'react-native';
import { styles } from './StyleSheetCSS';

const FlippableCard = ({ currentUser, model }) => {
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
				'flex items-center justify-center border rounded w-36 shadow-lg m-1 h-36'
			}
		>
			{!isFlipped ? (
				<Animated.View
					className={`flex flex-col bg-gray-200 absolute rounded w-full h-full`}
					style={frontAnimatedStyle}
				>
					<Text className={'border-2 border-blue-500 w-full m-0'}>
						{model.itemDisplayName}
					</Text>
					<Image
						className={'h-1/2 w-1/2'}
						source={require(`../assets/Chicken/Chicken.png`)}
					/>
				</Animated.View>
			) : (
				<Animated.View
					className={`flex flex-col bg-gray-200 absolute rounded w-full h-full`}
					style={backAnimatedStyle}
				>
					<Text>Goodbye</Text>
				</Animated.View>
			)}
		</TouchableOpacity>
	);
};

export default FlippableCard;
