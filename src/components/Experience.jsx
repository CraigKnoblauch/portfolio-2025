import { OrbitControls } from "@react-three/drei"
import { ScrollControls } from "@react-three/drei"

import { AsuSection } from "src/components/sections/AsuSection"
import { PhoenixSection } from "src/components/sections/PhoenixSection"
import { RocketLaunchSection } from "src/components/sections/RocketLaunchSection"
import { VanguardSection } from "src/components/sections/VanguardSection"
import { NrlSection } from "src/components/sections/NrlSection"
import { ContactSection } from "src/components/sections/ContactSection"
import { RabbitHoleSection } from "src/components/sections/RabbitHoleSection"
// NOTE See Cubesat model for how to use forward ref

import MatcapManager from "src/MatcapManager"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export const Experience = () => {

    const matcapManager = new MatcapManager();

    const ref = useRef();

    // useFrame(() => {
    //     ref.current.rotation.y += 0.01;
    // })

    return <>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={2} />
        <ScrollControls pages={7} damping={0.25}>
            {/* <AsuSection          height={0} matcapManager={matcapManager} /> */}
            {/* <PhoenixSection      height={0} matcapManager={matcapManager} /> */}
            {/* <RocketLaunchSection height={0} matcapManager={matcapManager} /> */}
            {/* <VanguardSection     height={0} matcapManager={matcapManager} /> */}
            {/* <NrlSection          height={0} matcapManager={matcapManager} /> */}
            {/* <RabbitHoleSection   height={0} matcapManager={matcapManager} /> */}
            {/* <ContactSection       height={0} matcapManager={matcapManager} /> */}
        </ScrollControls>
    </>
}