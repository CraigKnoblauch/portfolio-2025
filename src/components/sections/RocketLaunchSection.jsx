import { RocketLaunchModel } from "src/components/models/RocketLaunchModel"
import { InformationCard } from "src/components/InformationCard"
import { Html } from "@react-three/drei"
import * as THREE from "three"

export const RocketLaunchSection = (props) => {
    return <>
        <RocketLaunchModel matcapManager={props.matcapManager} />
        {/* TODO Do I even want this type of informational card here? */}
        <Html as='div' className="relative" position={new THREE.Vector3(0, 0, 0)}>
            <InformationCard 
                title={"NG-12 Launches our cubesat to the ISS"} 
                position={""} 
                startDate={'Nov. 2019'} endDate={'TODO n/a'} 
                description={"TODO Such an awesome experience"}
            />
        </Html>
    </>
}