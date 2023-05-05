import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { model } from '../../assets/Chicken/Chicken.glb'

const Chicken = ({position}) => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, model)
  
  return (
    <mesh position={position} 
          rotation={[0, -Math.PI / Math.random() * (10 - 1 + 1) + 1, 0]}
          ref={mesh} 
          scale={[0.001, 0.001, 0.001]}> 
      <primitive object={gltf.scene.clone()}/> 
    </mesh>
    )
}

export default Chicken