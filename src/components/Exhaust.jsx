import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import FifoQueue from 'src/utils/FifoQueue'

export const Exhaust = ({emitter, exhaustRef}) => {
    
    // If the emitter is not passed, create a new one
    // const emitter = new THREE.Mesh(
    //     new THREE.PlaneGeometry(1, 1),
    //     new THREE.MeshNormalMaterial()
    // )
    // emitter.rotation.y = Math.PI/2
    // emitter.position.x = -1.5

    // const exhaustRef = useRef({ isVisible: true, terminate: false })
    const groupRef = useRef()

    const dishSupportTexture = useTexture('/matcaps/dish-support.png')
    dishSupportTexture.colorSpace = THREE.SRGBColorSpace
    const dishSupportMatcap = new THREE.MeshMatcapMaterial({ matcap: dishSupportTexture })

    const rockGrayTexture = useTexture('/matcaps/rock-gray.png')
    rockGrayTexture.colorSpace = THREE.SRGBColorSpace
    const rockGrayMatcap = new THREE.MeshMatcapMaterial({ matcap: rockGrayTexture })

    const phxGrayTexture = useTexture('/matcaps/phx-gray.png')
    phxGrayTexture.colorSpace = THREE.SRGBColorSpace
    const phxGrayMatcap = new THREE.MeshMatcapMaterial({ matcap: phxGrayTexture })

    const materials = [
        dishSupportMatcap,
        rockGrayMatcap,
        phxGrayMatcap
    ]

    const queue = new FifoQueue(100)

    useFrame((state, delta) => {

        // state.camera.position.z += 0.01
        // state.camera.position.z = 25
        
        if ( exhaustRef.current.isVisible ) { // NOTE TODO Using a ref like this is not the best way to handle this. It's a workaround for now.
            const dodecahedron = new THREE.Mesh(
                new THREE.DodecahedronGeometry(1),
                materials[Math.floor(Math.random() * materials.length)]
            );
            dodecahedron.position.copy(emitter.position);

            // Get normal for the emitter
            let normal = new THREE.Vector3();
            // TODO This should work for the rocket launch model I have. I don't know why I can't get that emitter plane to register as the right rotation in the world.
            emitter.getWorldDirection(normal).normalize();
            // Override for the rocket launch model. FIXME
            normal = new THREE.Vector3(-0.2, 0, -0.2)

            dodecahedron.velocity = new THREE.Vector3(
                normal.x + (Math.random() - 0.5) * 0.25,
                0.1,
                normal.z + (Math.random() - 0.5) * 0.25
            )

            dodecahedron.spin = new THREE.Vector3(
                Math.random() * 0.1,
                Math.random() * 0.1,
                Math.random() * 0.1
            );

            // If terminated, don't add new elements to the group or the queue, instead, remove them one by one
            // TODO Refactor the above to only happen when necessary (v1.0 fix)

            if (!exhaustRef.current.terminate) {
                // Add the new element to the group and the queue
                // If an element was removed from the queue, remove it from the group
                groupRef.current.add(dodecahedron);
                const last = queue.enqueue(dodecahedron);
                if (last) {
                    groupRef.current.remove(last);
                }
            } else {
                groupRef.current.remove(queue.shift());
            }

            for (const element of queue) {

                // Calculate the distance to the emitter
                const distance = element.position.distanceTo(emitter.position);

                // Decrease the velocity as a function of the distance to the emitter
                const decreaseFactor = Math.max(0, 1 - distance * .005);
                
                element.velocity.multiplyScalar(decreaseFactor);

                // Move the element according to its velocity
                element.position.add(element.velocity);

                // Increase the y position as a function of the distance to the emitter
                const increaseFactor = Math.max(0, distance * 0.0075);
                element.position.y += increaseFactor;

                // Adjust the scale of the element as a function of the distance to the emitter
                const scaleFactor = Math.max(0.6, distance * 0.075);
                element.scale.set(scaleFactor, scaleFactor, scaleFactor);

                // Decrease the spin as a function of the distance to the emitter
                const spinDecreaseFactor = Math.max(0, 1 - distance * 0.001);
                element.spin.multiplyScalar(spinDecreaseFactor);

                // Apply the spin to the element
                element.rotation.x += element.spin.x;
                element.rotation.y += element.spin.y;
                element.rotation.z += element.spin.z;

            }
        }
    })

    return <>
        {/* <primitive object={emitter} /> */}
        <group ref={groupRef}>
            {/* Exhaust elements added to this group */}
        </group>
    </>
}
