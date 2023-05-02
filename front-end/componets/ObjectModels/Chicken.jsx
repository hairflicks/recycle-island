import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Chicken = ({position}) => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, require('../../assets/Chicken/Chicken.glb'))
  
  return (
    <mesh position={position} ref={mesh} scale={[0.001, 0.001, 0.001]}> 
      <primitive object={gltf.scene.clone()}/> 
    </mesh>
    )
}

export default Chicken