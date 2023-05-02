import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const CliffSwallow = ({position}) => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, require('../../assets/Cliffswallow/Cliffswallow.glb'))
  
  return (
    <mesh position={position} ref={mesh} scale={[0.1, 0.1, 0.1]}> 
      <primitive object={gltf.scene.clone()}/> 
    </mesh>
    )
}

export default CliffSwallow