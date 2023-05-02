import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const PineTree = ({position}) => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, require('../../assets/PineTree/PineTree.glb'))
  
  return (
    <mesh position={position} ref={mesh} scale={[0.2, 0.2, 0.2]}> 
      <primitive object={gltf.scene.clone()}/> 
    </mesh>
    )
}

export default PineTree