import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from './StyleSheetCSS';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

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

function Island(){

    return(
        <View style={styles.container}>
            <div style={styles.canvasBorder}>
                <Canvas camera={{ 
                    fov: 45, near:0.1, far:1000, 
                    position: [4,3.5,4]
                }} style={{   background: "linear-gradient(to bottom, #d9eaff, #99ccff, #ffffff)" }}>

                    <pointLight color="white" position={[20,30,5]} intensity={2}/>  
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={null}>
                         {/* <IvoryCanePalmTree position={[0,0,0]}/>  */}
                         <Panda position={[-1,0.9,0]} /> 
                         <Chicken position={[0,0.8,0]}/>
                         <BearCub position={[1,0.9,0]}/>
                         <Bee position={[1,1,0]}/>
                         <Cliffswallow position={[-0.5,0.8,0]}/>
                         <Giraffe position={[-0.5,1.1,0.5]}/>
                         <Hummingbird position={[-0.5,.75,-0.5]}/>
                         <IvoryCanePalmTree position={[0.2,.75,-0.5]}/>
                         <Kangaroo position={[0.6, 1,-0.5]}/>
                         <Koala position={[0.6, .75, 0.7]}/>
                         <PalmTree position={[0.6, .75, -1]} />
                         <PeppermintPenguin position={[0.2, .95, 1]} />
                         <PineTree position={[-0.5, 1.1, -1]} />
                         <TreeFrog position={[-0.5, .85, 1]} />

                         <IslandModel position={[0.1, -3, 0]} /> 
 
                    </Suspense>
                    <OrbitControls maxDistance={7} minDistance={3} />
                </Canvas>
            </div>
            <div style={styles.islandNavigation}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title="Island" />
                <Button title="Tasks" />
                <Button title="Shop" />
                <Button title="Profile" />
            </View>
            </div>
        </View>
    )
}

export default Island