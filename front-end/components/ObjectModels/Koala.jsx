import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Koala = ({position}) => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, require('../../assets/Koala/Koala.glb'))
  
  return (
    <mesh position={position} ref={mesh} scale={[0.02, 0.02, 0.02]}> 
      <primitive object={gltf.scene.clone()}/> 
    </mesh>
    )
}

export default Koala