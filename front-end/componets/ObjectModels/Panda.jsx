import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Panda = ({position}) => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, require('../../assets/Panda/Panda.glb'))
  
  return (
    <mesh position={position} ref={mesh} scale={[0.002, 0.002, 0.002]}> 
      <primitive object={gltf.scene.clone()}/> 
    </mesh>
    )
}

export default Panda