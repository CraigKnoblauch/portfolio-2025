import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Injection() {
    const ref = useRef();
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.01;
            ref.current.rotation.x += 0.01;
        }
    })

    return (
        <>
            <ambientLight />
            <perspectiveCamera position={[0, 0, 5]} />
            <mesh ref={ref} rotation={[0, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshNormalMaterial/>
            </mesh>
        </>
    );
}