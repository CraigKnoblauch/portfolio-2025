import { NrlModel } from "src/components/models/NrlModel"
import { InformationCard } from "src/components/InformationCard"
import { Html } from "@react-three/drei"
import * as THREE from "three"

export const VanguardSection = (props) => {
    return <>
        <NrlModel matcapManager={props.matcapManager} />
        <Html as='div' className="relative" position={new THREE.Vector3(0, 0, 0)}>
            <InformationCard 
                title={"U.S. Naval Research Laboratory"} 
                position={"Software Engineer in Spacecraft Engineering RDT&E"} 
                startDate={'Jan. 2022'} endDate={'Present'} 
                description={"Write software for the research of novel space technologies for national defense. Independently architect, develop, perform quality assurance, and effectively balance project and development needs through clear communication with management, stakeholders, and wider system teams."}
            />
        </Html>
    </>
}