import { OrbitControls } from "@react-three/drei"
import { VanguardModel } from "src/components/models/VanguardModel"
import { AsuModel } from "src/components/models/AsuModel"
import { RocketLaunchModel } from "src/components/models/RocketLaunchModel"
import { NrlModel } from "src/components/models/NrlModel"
import { PhoenixLogoModel } from "src/components/models/PhoenixLogoModel"
import { CubesatModel } from "src/components/models/CubesatModel"
import { GithubModel } from "src/components/models/GithubModel"
import { LinkedinModel } from "src/components/models/LinkedinModel"
import { MailboxModel } from "src/components/models/MailboxModel"
import { RabbitHoleModel } from "src/components/models/RabbitHoleModel"

export const Experience = () => {

    return <>
        <OrbitControls />
        <ambientLight intensity={2} />
        {/* <VanguardModel /> */}
        <AsuModel />
        {/* <RocketLaunchModel /> */}
        {/* <NrlModel /> */}
        {/* <PhoenixLogoModel /> */}
        {/* <CubesatModel /> */}
        {/* <GithubModel /> */}
        {/* <LinkedinModel /> */}
        {/* <MailboxModel /> */}
        {/* <RabbitHoleModel /> */}
    </>
}