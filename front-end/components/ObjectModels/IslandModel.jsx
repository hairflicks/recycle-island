import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const IslandModel = ({position}) => {

  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, require('../../assets/IslandModel/Island.glb'))
  
  return (
    <mesh position={position} ref={mesh} rotation={[0, 0, 0]} scale={[5, 5, 5]}> 
      <primitive object={gltf.scene.clone()}/> 
    </mesh>
    )
}

export default IslandModel