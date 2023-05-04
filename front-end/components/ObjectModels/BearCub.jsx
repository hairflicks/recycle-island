import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const BearCub = ({position}) => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, require('../../assets/BearCub/BearCub.glb'))
  
  return (
    <mesh position={position} 
          rotation={[0, -Math.PI / Math.random() * (10 - 1 + 1) + 1, 0]}      
          ref={mesh} 
          scale={[0.004, 0.004, 0.004]}> 
      <primitive object={gltf.scene.clone()}/> 
    </mesh>
    )
}

export default BearCub