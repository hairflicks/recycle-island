import { View, Text, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from './StyleSheetCSS';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import useControls from "r3f-native-orbitcontrols"


import  BottomNavigation  from './BottomNavigation'

import IslandModel from './ObjectModels/IslandModel';
import Chicken from './ObjectModels/Chicken';
import Bee from './ObjectModels/Bee';
import Koala from './ObjectModels/Koala';
import PalmTree from './ObjectModels/PalmTree'
import Panda from './ObjectModels/Panda';
import PeppermintPenguin from './ObjectModels/PeppermintPenguin';
import Alligator from './ObjectModels/Alligator';
import Dragon from './ObjectModels/Dragon';
import Frog from './ObjectModels/Frog';
import Goat from './ObjectModels/Goat';
import Lion from './ObjectModels/Lion';
import Monkey from './ObjectModels/Monkey';
import InventoryCard from './ModelDeleteCard';
import ModelDeleteCard from './ModelDeleteCard';

type User = {
    name: String,
    username: String,
    island: [],
    inventory: [],
    hash: String,
    credits: Number
    _v : Number,
    _id: Number
  }	

type IslandProps = {
	navigation: { navigate: Function };
  route: {params: {currentUser: User | undefined}}
};

function Island({navigation, route}: IslandProps){  

  const {currentUser, setCurrentUser} = route.params  

    function modelFinder(modelName, pos) {
        let model;
        if(modelName === 'Bee') model = <Bee key={`${modelName}${pos[0]}${pos[1]}${pos[2]}${Math.random() * 1000}`} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Chicken') model = <Chicken key={`${modelName}${pos[0]}${pos[1]}${pos[2]}${Math.random() * 1000}`} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Alligator') model = <Alligator key={`${modelName}${pos[0]}${pos[1]}${pos[2]}${Math.random() * 1000}`} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Dragon') model = <Dragon key={`${modelName}${pos[0]}${pos[1]}${pos[2]}${Math.random() * 1000}`} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Frog') model = <Frog key={`${modelName}${pos[0]}${pos[1]}${pos[2]}${Math.random() * 1000}`} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Goat') model = <Goat key={`${modelName}${pos[0]}${pos[1]}${pos[2]}${Math.random() * 1000}`} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Koala') model = <Koala key={`${modelName}${pos[0]}${pos[1]}${pos[2]}${Math.random() * 1000}`} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Lion') model = <Lion key={`${modelName}${pos[0]}${pos[1]}${pos[2]}${Math.random() * 1000}`} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Monkey') model = <Monkey key={`${modelName}${pos[0]}${pos[1]}${pos[2]}${Math.random() * 1000}`} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'PalmTree') model = <PalmTree key={`${modelName}${pos[0]}${pos[1]}${pos[2]}${Math.random() * 1000}`} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Panda') model = <Panda key={`${modelName}${pos[0]}${pos[1]}${pos[2]}${Math.random() * 1000}`} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'PeppermintPenguin') model = <PeppermintPenguin key={`${modelName}${pos[0]}${pos[1]}${pos[2]}${Math.random() * 1000}`} position={[pos[0], pos[1], pos[2]]} />
        return model
    }

    const readyModels = [];
    currentUser.island.forEach(e => {
        const modelReady = modelFinder(e.itemName, e.coordinates)
        readyModels.push(modelReady)
    });


    const [OrbitControls, events] = useControls()

    const [hiddenInv, setHiddenInv] = useState('hidden')
    const [hiddenDel, setHiddenDel] = useState('hidden')

    function handleInventory() {
        if (hiddenInv) {
        setHiddenInv('')
        setHiddenDel('hidden')
        } else {
            setHiddenInv('hidden')
        }
    }

    function handleDeletePress() {
        if (hiddenDel) {
        setHiddenDel('')
        setHiddenInv('hidden')
        } else {
            setHiddenDel('hidden')
        }
    }

    const [inventory, setInventory] = useState([])

    useEffect(() => {
        const arr = []
        for (let key in currentUser?.inventory) {
            for (let i=0; i< currentUser?.inventory[key]; i++) {
                arr.push(key);
              }
        }
        setInventory(arr)
    }, [currentUser])

    console.log(currentUser?.island)
    return(
        <View className={'flex h-full bg-white items-center justify-content-center p-2'}>
            <Text className={'text-2xl absolute top-10 font-bold text-lime-600'}>{currentUser.username}'s Island</Text>
            <View className={'flex-row absolute right-5 top-3'}>
                <Text>{`${currentUser.credits}`}</Text>
                <Image
							className={`w-3 h-3`}
							source={require('../assets/coin.png')}
						/>
            </View>
            <View className={'h-full w-full'} {...events}>
                <Canvas camera={{ fov: 60, near:0.1, far:1000, position: [4,3.5,4]}} 
                        style={{background: "linear-gradient(to bottom, #d9eaff, #99ccff, #ffffff)"}}>
                            <OrbitControls rotateSpeed={1} maxZoom={7} enablePan={false} maxPolarAngle={1.4}/>
                            <pointLight color="white" position={[20,30,5]} intensity={2}/>  
                    <ambientLight intensity={0.5} />

                    <Suspense fallback={null}> 
                        {readyModels.map(c => c)} 
                        <IslandModel position={[0.1, -3, 0]}/>                 
                    </Suspense>
                </Canvas>
            </View>
            <View className={'absolute right-5 top-10'}>
                <TouchableOpacity onPress={handleInventory}>
                <Image
					className={`w-10 h-10`}
					source={require('../assets/backpack.png')}
				/>
                </TouchableOpacity>
            </View>
            <View className={'absolute right-3.5 top-20'}>
                <TouchableOpacity onPress={handleDeletePress}>
                <Image
					className={`w-12 h-12`}
					source={require('../assets/delete.png')}
				/>
                </TouchableOpacity>
            </View>
            {inventory.length > 0 ? <ScrollView showsHorizontalScrollIndicator={false} className={`absolute bg-green-800 bottom-20 border-2 h-20 ${hiddenInv}`} horizontal={true}>
               {inventory ? inventory.map(item => <ModelDeleteCard model={item} currentUser={currentUser} setCurrentUser={setCurrentUser}/>) : null}
            </ScrollView> : <View className={`absolute bg-green-800 bottom-20 border-2 ${hiddenInv}`}><Text className={'text-white text-2xl'}>You have no items!</Text></View>}
            <ScrollView showsHorizontalScrollIndicator={false} className={`absolute bg-green-800 bottom-20 border-2 h-20 ${hiddenDel}`} horizontal={true}>
               {currentUser?.island.map(item => <ModelDeleteCard model={item.itemName} currentUser={currentUser} setCurrentUser={setCurrentUser}/>)}
            </ScrollView>
           <BottomNavigation navigation={navigation}/>
        </View>

    )
}

export default Island