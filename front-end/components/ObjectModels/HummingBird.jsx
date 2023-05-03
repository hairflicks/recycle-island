import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Hummingbird = ({position}) => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, require('../../assets/Hummingbird/Hummingbird.glb'))
  
  return (
    <mesh position={position} ref={mesh} scale={[0.1, 0.1, 0.1]}> 
      <primitive object={gltf.scene.clone()}/> 
    </mesh>
    )
}

export default Hummingbird