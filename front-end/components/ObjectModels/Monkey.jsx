import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Monkey = ({position}) => {

  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, require('../../assets/Monkey/Monkey.glb'))
  
  return (
    <mesh position={position} 
          rotation={[0, -Math.PI / Math.random() * (10 - 1 + 1) + 1, 0]}
          ref={mesh} 
          scale={[.012, .012, .012]}> 
      <primitive object={gltf.scene.clone()}/> 
    </mesh>
    )
}

export default Monkey