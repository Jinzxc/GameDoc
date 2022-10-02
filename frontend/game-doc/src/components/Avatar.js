import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Box = () => {
    const mesh = useRef();
    
    useFrame((state, delta) => {
        mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.01
    })
    return (
        <mesh ref={mesh} scale='1'>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color={'green'} />
        </mesh>
    )
}

export default Box