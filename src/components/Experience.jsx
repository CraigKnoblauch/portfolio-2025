import { OrbitControls } from "@react-three/drei"
import { VanguardModel } from "src/components/models/VanguardModel"
import { AsuModel } from "src/components/models/AsuModel"

export const Experience = () => {
    return <>
        <OrbitControls />
        <ambientLight intensity={2} />
        {/* <VanguardModel /> */}
        <AsuModel />
    </>
}