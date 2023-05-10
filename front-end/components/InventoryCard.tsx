import { Image, Touchable, TouchableOpacity, View } from "react-native";

export default function InventoryCard({model}) {
    let path = '';
	if(model === 'Chicken') path = require(`../assets/Chicken.png`)
	if(model === 'Bee')path = require(`../assets/Bee.png`)
	if(model === 'Alligator')path = require(`../assets/Alligator.png`)
	if(model === 'Dragon')path = require(`../assets/Dragon.png`)
	if(model === 'Goat')path = require(`../assets/Goat.png`)
	if(model === 'Lion')path = require(`../assets/Lion.png`)
	if(model === 'Koala')path = require(`../assets/Koala.png`)
	if(model === 'PalmTree')path = require(`../assets/PalmTree.png`)
	if(model === 'Panda')path = require(`../assets/Panda.png`)
	if(model === 'PeppermintPenguin')path = require(`../assets/PeppermintPenguin.png`)
	if(model === 'Frog')path = require(`../assets/Frog.png`)
	if(model === 'Monkey')path = require(`../assets/Monkey.png`)
    return <View className={'border-2 w-20 items-center'}>
        <TouchableOpacity>
        <Image
       className={'h-14 w-14 bg-black-500 mt-2'}
       source={path}
       /> 
        </TouchableOpacity>
    </View>
}