import React, { useState } from 'react';
import {
    Text,
	TouchableOpacity,
	Animated,
	Image,
	View,
	ScrollView,
} from 'react-native';
import * as api from '../api'
import { modelYAxisRef } from './lookupTables';
import { checkAvailableCoordinates } from './utils';

const FlippableCard = ({ currentUser, model, setCurrentUser, navigation }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const rotateY = useState(new Animated.Value(0))[0];
	const [error, setError] = useState('');

  const availablePos = checkAvailableCoordinates(currentUser);

	const handleBuy = async() => {	
    
		if(currentUser.credits >= model.itemCost){
			if(availablePos !== null){
				const readyToInsert = {itemName: model.itemName, coordinates: []}
				readyToInsert.coordinates.push(availablePos.pos.x)
				readyToInsert.coordinates.push(modelYAxisRef[readyToInsert.itemName])
				readyToInsert.coordinates.push(availablePos.pos.z)
				try{
					await api.patchCreditsByUsername(currentUser.username, -model.itemCost)
					const newUserDetails = await api.patchIslandByUsername(currentUser.username, readyToInsert)
					await setCurrentUser(newUserDetails.data.user)	
					navigation.navigate('Island');
				} catch (error: any) {
					setError(error.response.data.message);
				}
			}else{
				try{
					await api.patchCreditsByUsername(currentUser.username, -model.itemCost)
					const newUserDetails = await api.patchInventoryByUsername(currentUser.username, model.itemName, 1)
					await setCurrentUser(newUserDetails.data.user)	
					navigation.navigate('Island');
				} catch (error: any) {
					setError(error.response.data.message);
				}
			}
		}else{
			console.log('not enough credits')
		}
	}
  
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


	let path = '';
	if(model.itemName === 'Chicken') path = require(`../assets/Chicken.png`)
	if(model.itemName === 'Bee')path = require(`../assets/Bee.png`)
	if(model.itemName === 'Alligator')path = require(`../assets/Alligator.png`)
	if(model.itemName === 'Dragon')path = require(`../assets/Dragon.png`)
	if(model.itemName === 'Goat')path = require(`../assets/Goat.png`)
	if(model.itemName === 'Lion')path = require(`../assets/Lion.png`)
	if(model.itemName === 'Koala')path = require(`../assets/Koala.png`)
	if(model.itemName === 'PalmTree')path = require(`../assets/PalmTree.png`)
	if(model.itemName === 'Panda')path = require(`../assets/Panda.png`)
	if(model.itemName === 'PeppermintPenguin')path = require(`../assets/PeppermintPenguin.png`)
	if(model.itemName === 'Frog')path = require(`../assets/Frog.png`)
	if(model.itemName === 'Monkey')path = require(`../assets/Monkey.png`)
	return (
		<TouchableOpacity
			onPress={flipCard}
			className={
				'flex items-center justify-center w-36 shadow-lg m-1 h-36 mt-5'
			}
		>
			{!isFlipped ? (
				<Animated.View
					className={`flex flex-col bg-white absolute rounded w-full h-full items-center`}
					style={frontAnimatedStyle}
				>
					<Text
						className={
							' w-full m-0 text-center rounded font-bold text-yellow-400'
						}
					>
						{model.itemDisplayName}
					</Text>
					<Image className={'h-1/2 w-1/2 m-2'} source={path} />
					<View
						className={`flex-row w-full justify-center bg-white border-2 border-yellow-300 rounded  p-0.25`}
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
					className={`flex flex-col bg-white absolute rounded w-full h-full`}
					style={backAnimatedStyle}
				>
					
					<ScrollView
						showsVerticalScrollIndicator={false}
						nestedScrollEnabled={true}
						
					>
						<TouchableOpacity onPress={flipCard}>
							<Text className={`text-xs text-center`}>
								{model.itemDescription}
							</Text>
						</TouchableOpacity>
					</ScrollView>
					<View
						className={`w-11/12 mt-1 mb-1 rounded bg-yellow-300 ml-auto mr-auto`}
					>
						<TouchableOpacity>
							<Text className={`text-center text-white`} onPress={handleBuy}>
								Buy
							</Text>
						</TouchableOpacity>
					</View>
				</Animated.View>
			)}
		</TouchableOpacity>
	);
};

export default FlippableCard;
