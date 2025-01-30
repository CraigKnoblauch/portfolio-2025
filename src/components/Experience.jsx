import { OrbitControls } from "@react-three/drei"
import { Vanguard } from "src/components/Vanguard"

export const Experience = () => {
    return <>
        <OrbitControls />
        <ambientLight intensity={1} />
        <Vanguard />
    </>
}