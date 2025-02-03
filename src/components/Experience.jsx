import { OrbitControls } from "@react-three/drei"

import { AsuSection } from "src/components/sections/AsuSection"
import { PhoenixSection } from "src/components/sections/PhoenixSection"
import { RocketLaunchSection } from "src/components/sections/RocketLaunchSection"
import { VanguardSection } from "src/components/sections/VanguardSection"
import { NrlSection } from "src/components/sections/NrlSection"
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
        <OrbitControls />
        <ambientLight intensity={2} />
        <AsuSection matcapManager={matcapManager} />
        <PhoenixSection matcapManager={matcapManager} />
        <RocketLaunchSection matcapManager={matcapManager} />
        <VanguardSection matcapManager={matcapManager} />
        <NrlSection matcapManager={matcapManager} />
        <RabbitHoleSection matcapManager={matcapManager} />
    </>
}