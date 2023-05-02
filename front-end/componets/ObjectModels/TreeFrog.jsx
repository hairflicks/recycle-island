import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const TreeFrog = ({position}) => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, require('../../assets/TreeFrog/TreeFrog.glb'))
  
  return (
    <mesh position={position} ref={mesh} scale={[0.005, 0.005, 0.005]}> 
      <primitive object={gltf.scene.clone()}/> 
    </mesh>
    )
}

export default TreeFrog