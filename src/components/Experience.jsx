import { OrbitControls } from "@react-three/drei"
import { VanguardModel } from "src/components/models/VanguardModel"
import { AsuModel } from "src/components/models/AsuModel"
import { RocketLaunchModel } from "src/components/models/RocketLaunchModel"
import { NrlModel } from "./models/NrlModel"
import { PhoenixLogoModel } from "./models/PhoenixLogoModel"
import { CubesatModel } from "./models/CubesatModel"
import { GithubModel } from "./models/GithubModel"
import { LinkedinModel } from "./models/LinkedinModel"
import { MailboxModel } from "./models/MailboxModel"
import { RabbitHoleModel } from "./models/RabbitHoleModel"

export const Experience = () => {
    return <>
        <OrbitControls />
        <ambientLight intensity={2} />
        {/* <VanguardModel /> */}
        {/* <AsuModel /> */}
        {/* <RocketLaunchModel /> */}
        {/* <NrlModel /> */}
        {/* <PhoenixLogoModel /> */}
        {/* <CubesatModel /> */}
        {/* <GithubModel /> */}
        {/* <LinkedinModel /> */}
        {/* <MailboxModel /> */}
        <RabbitHoleModel />
    </>
}