import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Kangaroo = ({position}) => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, require('../../assets/Kangaroo/Kangaroo.glb'))
  
  return (
    <mesh position={position} ref={mesh} scale={[0.003, 0.003, 0.003]}> 
      <primitive object={gltf.scene.clone()}/> 
    </mesh>
    )
}

export default Kangaroo