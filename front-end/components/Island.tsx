import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from './StyleSheetCSS';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

import  BottomNavigation  from './BottomNavigation'

import Chicken from './ObjectModels/Chicken';
import BearCub from './ObjectModels/BearCub';
import Bee from './ObjectModels/Bee';
import Cliffswallow from './ObjectModels/CliffSwallow';
import Giraffe from './ObjectModels/Giraffe';
import Hummingbird from './ObjectModels/HummingBird';
import IvoryCanePalmTree from './ObjectModels/IvoryCanePalmTree';
import Kangaroo from './ObjectModels/Kangaroo';
import Koala from './ObjectModels/Koala';
import PalmTree from './ObjectModels/PalmTree'
import Panda from './ObjectModels/Panda';
import PeppermintPenguin from './ObjectModels/PeppermintPenguin';
import PineTree from './ObjectModels/PineTree';
import TreeFrog from './ObjectModels/TreeFrog';
import IslandModel from './ObjectModels/IslandModel';


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

    const user = {
        user: {
            name: 'brad',
            username: 'hairflicks',
            credits: 0,
            island: [
                        {itemName: 'Bee', coordinates: [-.8, -1.3]}, // x, z pos
                        {itemName: 'BearCub', coordinates: [0, 1.3]},
                        {itemName: 'Panda', coordinates: [-.8, 1.3]},
                        {itemName: 'Chicken', coordinates: [-1.4, -.4]},
                        {itemName: 'Cliffswallow', coordinates: [-.7, -.4]},
                        {itemName: 'Giraffe', coordinates: [0, -.4]},
                        {itemName: 'Hummingbird', coordinates: [.7, -.4]},
                    ]
        }
    }

    const modelYAxisRef = {
        Panda: .9,
        Chicken: .75,
        BearCub: .85,
        Bee: .72,
        Cliffswallow: .75,
        Giraffe: 1.1,
        Hummingbird: .75,
        IvoryCanePalmTree: .75,
        Kangaroo: 1,
        Koala: .75,
        PalmTree: .75,
        PeppermintPenguin: .95,
        PineTree: 1.1,
        TreeFrog: .82
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
        if(modelName === 'BearCub') model = <BearCub key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'Bee') model = <Bee key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'Chicken') model = <Chicken key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'Panda') model = <Panda key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'Cliffswallow') model = <Cliffswallow key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'Giraffe') model = <Giraffe key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'Hummingbird') model = <Hummingbird key={modelName} position={[pos.x, pos.y, pos.z]} />
        if(modelName === 'IvoryCanePalmTree') model = <IvoryCanePalmTree key={modelName} position={[pos.x, pos.y, pos.z]} />
        return model
    }

    const islandData = user.user.island
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

    return(
        <View style={styles.container}>
            <div style={styles.canvasBorder}>
                <Canvas camera={{ fov: 45, near:0.1, far:1000, position: [4,3.5,4]}} 
                        style={{background: "linear-gradient(to bottom, #d9eaff, #99ccff, #ffffff)"}}>

                    <pointLight color="white" position={[20,30,5]} intensity={2}/>  
                    <ambientLight intensity={0.5} />
                    <OrbitControls maxDistance={7} minDistance={3} />

                    <Suspense fallback={null}>                    
                        
                        {displayModels.map(c => c)} 

                        {/* <Panda position={[-.8, modelYAxisRef.Panda, -1.3]} /> 
                        <TreeFrog position={[0, modelYAxisRef.TreeFrog, -1.3]} /> 
                        <PeppermintPenguin position={[.8, modelYAxisRef.PeppermintPenguin, -1.3]} /> 

                        <Koala position={[1.4, modelYAxisRef.Koala, -.4]} /> 
                        <IvoryCanePalmTree position={[.7, modelYAxisRef.IvoryCanePalmTree, -.4]} /> 
                        <Kangaroo position={[0, modelYAxisRef.Kangaroo, -.4]} /> 
                        <Bee position={[-.7, modelYAxisRef.Bee, -.4]} /> 
                        <Giraffe position={[-1.4, modelYAxisRef.Giraffe, -.4]} /> 

                        <Hummingbird position={[-1.4, modelYAxisRef.Hummingbird, .4]} /> 
                        <Panda position={[-.7, modelYAxisRef.Panda, .4]} /> 
                        <BearCub position={[0, modelYAxisRef.BearCub, .4]} /> 
                        <Chicken position={[.7, modelYAxisRef.Chicken, .4]} /> 
                        <Cliffswallow position={[1.4, modelYAxisRef.Cliffswallow, .4]} /> 

                        <PalmTree position={[-.8, modelYAxisRef.PalmTree, 1.3]} /> 
                        <Chicken position={[0, modelYAxisRef.Chicken, 1.3]} /> 
                        <PineTree position={[.8, modelYAxisRef.PineTree, 1.3]} />  */}


                        <IslandModel position={[0.1, -3, 0]} /> 
                    </Suspense>
                </Canvas>
            </div>
           <BottomNavigation navigation={navigation}/>
        </View>

    )
}

export default Island