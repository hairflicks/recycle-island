import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { styles } from './StyleSheetCSS';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
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

  const {currentUser} = route.params  

  const handleNavigation = () => {
		navigation.navigate('UserTask');
	};

    const user2 = {
        user: {
            name: 'brad',
            username: 'hairflicks',
            credits: 0,
            island: [
                        {itemName: 'Bee', coordinates: [-.8, .9, -1.3]}, 
                        {itemName: 'Alligator', coordinates: [0, .93, -1.3]},
                        {itemName: 'Chicken', coordinates: [.8, .75, -1.3]},

                        {itemName: 'Dragon', coordinates: [-1.4, .72, -.4]},
                        {itemName: 'Frog', coordinates: [-.7, .72, -.4]},
                        {itemName: 'Goat', coordinates: [0, .72, -.4]},
                        {itemName: 'Koala', coordinates: [.7, .72, -.4]},
                        {itemName: 'Lion', coordinates: [1.4, .72, -.4]},

                        {itemName: 'Monkey', coordinates: [-1.4, .72, .4]},
                        {itemName: 'PalmTree', coordinates: [-.7, .72, .4]},
                        {itemName: 'Panda', coordinates: [0, .72, .4]},
                        {itemName: 'PeppermintPenguin', coordinates: [.7, .9, .4]},
                    ]
        }
    }

    function modelFinder(modelName, pos) {
        let model;
        if(modelName === 'Bee') model = <Bee key={modelName} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Chicken') model = <Chicken key={modelName} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Alligator') model = <Alligator key={modelName} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Dragon') model = <Dragon key={modelName} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Frog') model = <Frog key={modelName} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Goat') model = <Goat key={modelName} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Koala') model = <Koala key={modelName} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Lion') model = <Lion key={modelName} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Monkey') model = <Monkey key={modelName} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'PalmTree') model = <PalmTree key={modelName} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'Panda') model = <Panda key={modelName} position={[pos[0], pos[1], pos[2]]} />
        if(modelName === 'PeppermintPenguin') model = <PeppermintPenguin key={modelName} position={[pos[0], pos[1], pos[2]]} />
        return model
    }

    const readyModels = [];
    user2.user.island.forEach(e => {
        const modelReady = modelFinder(e.itemName, e.coordinates)
        readyModels.push(modelReady)
    });


    const [OrbitControls, events] = useControls()

    const islandModel = "islandModel"

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
           <BottomNavigation navigation={navigation}/>
        </View>

    )
}

export default Island