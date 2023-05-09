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
  console.log(currentUser.username)

  const handleNavigation = () => {
		navigation.navigate('UserTask');
	};

    const user = {
        user: {
            name: 'brad',
            username: 'hairflicks',
            credits: 0,
            island: [
                        {itemName: 'Bee', coordinates: [-.8, -1.3]}, // x, z pos
                        {itemName: 'Alligator', coordinates: [0, -1.3]},
                        {itemName: 'Chicken', coordinates: [.8, -1.3]},

                        {itemName: 'Dragon', coordinates: [-1.4, -.4]},
                        {itemName: 'Frog', coordinates: [-.7, -.4]},
                        {itemName: 'Goat', coordinates: [0, -.4]},
                        {itemName: 'Koala', coordinates: [.7, -.4]},
                        {itemName: 'Lion', coordinates: [1.4, -.4]},

                        {itemName: 'Monkey', coordinates: [-1.4, .4]},
                        {itemName: 'PalmTree', coordinates: [-.7, .4]},
                        {itemName: 'Panda', coordinates: [0, .4]},
                        {itemName: 'PeppermintPenguin', coordinates: [.7, .4]},
                    ]
        }
    }

    const modelYAxisRef = {
        Alligator: 1,
        Chicken: .75,
        Bee: .72,
        Koala: .75,
        Dragon: .75,
        Frog: 1,
        Goat: 1,
        Lion: 1,
        Monkey: 1,
        PalmTree: 1,
        Panda: 1,
        PeppermintPenguin: .95
    }

    const coordinates = {
        1: {pos: {x: -.8, y: null, z: -1.3 }, model: null},
        2: {pos: {x: 0, y: null, z: -1.3 }, model: null},
        3: {pos: {x: .8, y: null, z: -1.3 }, model: null},
        
        4: {pos: {x: -1.4, y: null, z: -.4 }, model: null},
        5: {pos: {x: -.7, y: null, z: -.4 }, model: null},
        6: {pos: {x: 0, y: null, z: -.4 }, model: null},
        7: {pos: {x: .7, y: null, z: -.4 }, model: null},
        8: {pos: {x: 1.4, y: null, z: -.4 }, model: null},

        9: {pos: {x: -1.4, y: null, z: .4 }, model: null},
        10: {pos: {x: -.7, y: null, z: .4 }, model: null},
        11: {pos: {x: 0, y: null, z: .4 }, model: null},
        12: {pos: {x: .7, y: null, z: .4 }, model: null},
        13: {pos: {x: 1.4, y: null, z: .4 }, model: null},

        14: {pos: {x: -.8, y: null, z: 1.3 }, model: null},
        15: {pos: {x: 0, y: null, z: 1.3 }, model: null},
        16: {pos: {x: .8, y: null, z: 1.3 }, model: null},
    }

    function modelFinder(modelName, pos) {
        let model;
        if(modelName === 'Bee') model = <Bee key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'Chicken') model = <Chicken key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'Alligator') model = <Alligator key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'Dragon') model = <Dragon key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'Frog') model = <Frog key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'Goat') model = <Goat key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'Koala') model = <Koala key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'Lion') model = <Lion key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'Monkey') model = <Monkey key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'PalmTree') model = <PalmTree key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'Panda') model = <Panda key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'PeppermintPenguin') model = <PeppermintPenguin key={modelName} position={[pos.x, pos.y, pos.z]} />
        return model
    }

    const islandData = currentUser.island
    // const islandData = user.user.island   test user data

    islandData.forEach(e => {
        for(const c in coordinates){
            const staticCoordinates =  coordinates[c]
            if(staticCoordinates.pos.x === e.coordinates[0] && staticCoordinates.pos.z === e.coordinates[1]) {
                staticCoordinates.pos.y = modelYAxisRef[e.itemName]
                const modelReady = modelFinder(e.itemName, staticCoordinates.pos)
                staticCoordinates.model = modelReady
            }
        }
    });

    let displayModels = [];
    for(const model in coordinates){
        if(coordinates[model].model !== null){
            displayModels.push(coordinates[model].model)
        }
    }

    function handleClockwise() {
        console.log('hi')
        setRotation((rotation) => {
            return rotation += 2
        })
    }

    const [rotation,setRotation] = useState(4)

    const [OrbitControls, events] = useControls()

    return(
        <View className={'flex h-full bg-white items-center justify-content-center p-2'}>
            <View className={'h-full w-full'} {...events}>
                <Canvas camera={{ fov: 60, near:0.1, far:1000, position: [4,3.5,4]}} 
                        style={{background: "linear-gradient(to bottom, #d9eaff, #99ccff, #ffffff)"}}>
                            <OrbitControls rotateSpeed={3}/>
                            <pointLight color="white" position={[20,30,5]} intensity={2}/>  
                    <ambientLight intensity={0.5} />

                    <Suspense fallback={null}> 
                        {displayModels.map(c => c)} 
                        <IslandModel position={[0.1, -3, 0]}/>                 
                    </Suspense>
                </Canvas>
            </View>
                <TouchableOpacity className={`w-8 h-8 absolute bottom-20 left-7 bg-red-500`} onPress={handleClockwise}>
                    <Image className={`w-8 h-8`} source={require('../assets/clockwise.png')} />
                </TouchableOpacity>
                <TouchableOpacity className={`w-8 h-8 absolute bottom-20 right-7`}>
                    <Image className={`w-8 h-8`} source={require('../assets/anticlockwise.png')} />
                </TouchableOpacity>
           <BottomNavigation navigation={navigation}/>
        </View>

    )
}

export default Island