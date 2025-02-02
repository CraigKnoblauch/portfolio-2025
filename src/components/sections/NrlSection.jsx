import { NrlModel } from "src/components/models/NrlModel"
import { InformationCard } from "src/components/InformationCard"
import { Html } from "@react-three/drei"
import * as THREE from "three"

export const NrlSection = (props) => {
    return <>
        <NrlModel matcapManager={props.matcapManager} />
        <Html as='div' className="absolute w-80" position={new THREE.Vector3(0, 0, 0)}>
            <InformationCard title={"nrl"} startDate={'20220101'} endDate={'20250102'} experiences={"here's some cool stuff"} />
        </Html>
    </>
}