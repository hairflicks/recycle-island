import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const IvoryCanePalmTree = ({position}) => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, require('../../assets/IvoryCanePalmTree/IvoryCanePalmTree.glb'))
  
  return (
    <mesh position={position} ref={mesh} scale={[.05, .05, .05]}> 
      <primitive object={gltf.scene.clone()}/> 
    </mesh>
    )
}

export default IvoryCanePalmTree