import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Euler, Vector3, Color } from '@react-three/fiber'

type animalProps = {
  position: Vector3
}

const Bee = ({position}: animalProps) => {

  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, require('../../assets/Bee/Bee.glb'))
  
  return (
    <mesh position={position} ref={mesh} scale={[0.02, 0.02, 0.02]}> 
      <primitive object={gltf.scene.clone()}/> 
    </mesh>
    )
}

export default Bee