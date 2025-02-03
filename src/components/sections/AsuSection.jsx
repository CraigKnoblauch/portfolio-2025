import { AsuModel } from "src/components/models/AsuModel"
import { InformationCard } from "src/components/InformationCard"
import { Html } from "@react-three/drei"
import * as THREE from "three"

export const AsuSection = (props) => {
    return <>
        <AsuModel matcapManager={props.matcapManager} />
        <Html as='div' className="relative" position={new THREE.Vector3(0, 0, 0)}>
            <InformationCard 
                title={"Arizona State University"} 
                position={"Computer Systems Engineering, B.S.E."} 
                startDate={'Aug. 2015'} endDate={'May 2019'} 
                description={"TODO I got a degree"}
            />
        </Html>
    </>
}