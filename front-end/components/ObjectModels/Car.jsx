import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';

const Car = ({position}) => {
  const mesh = useRef();

  const objectMaterial = useLoader(MTLLoader, require('../../assets/Car/car.mtl'));
  const objectStructure = useLoader(OBJLoader, require('../../assets/Car/car.obj'), (loader) => {
    objectMaterial.preload();
      loader.setMaterials(objectMaterial)
    }
  )
    
    return(
        <mesh position={position} ref={mesh} rotation={[.1, .5, 0]} scale={[1, 1, 1]}>
          <primitive object={objectStructure.clone()}/>
        </mesh>
    )
}

export default Car