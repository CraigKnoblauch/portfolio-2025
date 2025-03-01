import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import FifoQueue from 'src/utils/FifoQueue'

export const ExhaustParticle = ({color}) => {

    const texture = useTexture(`../matcaps/${color}.png`)
    texture.colorSpace = THREE.SRGBColorSpace

    const ref = useRef(new THREE.Object3D())

    useFrame((state, delta) => {
        ref.current.rotation.y += 0.01
        ref.current.rotation.x += 0.01
    })
    
    return <>
        <mesh ref={ref} rotation={[0, 0, 0]}>
            <dodecahedronGeometry args={[1]} />
            <meshMatcapMaterial matcap={texture}/>
        </mesh>
    </>
}