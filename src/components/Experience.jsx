import { OrbitControls } from "@react-three/drei"
import { VanguardModel } from "src/components/models/VanguardModel"
import { AsuModel } from "src/components/models/AsuModel"
import { RocketLaunchModel } from "src/components/models/RocketLaunchModel"
import { NrlModel } from "src/components/models/NrlModel"
import { PhoenixLogoLiteModel } from "src/components/models/PhoenixLogoLiteModel"
import { CubesatModel } from "src/components/models/CubesatModel"
import { GithubModel } from "src/components/models/GithubModel"
import { LinkedinModel } from "src/components/models/LinkedinModel"
import { MailboxModel } from "src/components/models/MailboxModel"
import { RabbitHoleModel } from "src/components/models/RabbitHoleModel"

import { NrlSection } from "src/components/sections/NrlSection"

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
        {/* <VanguardModel matcapManager={matcapManager} />
        <AsuModel matcapManager={matcapManager} />
        <RocketLaunchModel matcapManager={matcapManager} />
        <NrlModel matcapManager={matcapManager} />
        <CubesatModel ref={ref} matcapManager={matcapManager} />
        <GithubModel matcapManager={matcapManager} />
        <LinkedinModel matcapManager={matcapManager} />
        <MailboxModel matcapManager={matcapManager} />
        <RabbitHoleModel matcapManager={matcapManager} />
        <PhoenixLogoLiteModel /> */}
        <NrlSection matcapManager={matcapManager} />
    </>
}