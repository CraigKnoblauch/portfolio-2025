import { PhoenixLogoLiteModel } from "src/components/models/PhoenixLogoLiteModel"
import { CubesatModel } from "src/components/models/CubesatModel"
import { InformationCard } from "src/components/InformationCard"
import { Html } from "@react-three/drei"
import * as THREE from "three"

export const PhoenixSection = (props) => {
    return <>
        <PhoenixLogoLiteModel/>
        <CubesatModel matcapManager={props.matcapManager} />
        <Html as='div' className="relative" position={new THREE.Vector3(0, 0, 0)}>
            <InformationCard 
                title={"Phoenix Cubesat Project"} 
                position={"Lead Flight Software Engineer"} 
                startDate={'Sep. 2017'} endDate={'May 2019'} 
                description={"TODO I led a team of students on a satellite project"}
            />
        </Html>
    </>
}