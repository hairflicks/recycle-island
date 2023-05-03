
const Box = () => {
    return(
        <mesh position={[0,0,0]} rotation={[5, 5, 0]} >
            <boxGeometry />
            <meshStandardMaterial color="red" />
        </mesh> 
    )
}

export default Box