import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Giraffe = ({position}) => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, require('../../assets/Giraffe/Giraffe.glb'))
  
  return (
    <mesh position={position} ref={mesh} scale={[0.002, 0.002, 0.002]}> 
      <primitive object={gltf.scene.clone()}/> 
    </mesh>
    )
}

export default Giraffe