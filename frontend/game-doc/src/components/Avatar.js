import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Avatar = (props) => {
    const mesh = useRef();
    
    useFrame((state, delta) => {
        mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.01
    });

    return (
        <mesh ref={mesh} scale='1'>
            { props.shape === 'cube' ?
                <boxGeometry args={[3,3,3]}/> : <sphereGeometry args={[2.5]} />
            }
        
        <meshStandardMaterial color={`${props.color}`}/>
        </mesh>
    )
}

export default Avatar