import { VanguardModel } from "src/components/models/VanguardModel"
import { InformationCard } from "src/components/InformationCard"
import { Html } from "@react-three/drei"
import * as THREE from "three"
import { useEffect, useRef } from "react"

export const VanguardSection = (props) => {

    const ref = useRef()

    useEffect(() => {
        // ref.current.position.y = props.height
    }, [])

    return <>
        <VanguardModel ref={ref} matcapManager={props.matcapManager} />
        <Html as='div' className="relative" position={new THREE.Vector3(0, props.height, 0)}>
            <InformationCard 
                title={"The Vanguard Group"} 
                position={"Big Data Engineer"} 
                startDate={'Aug. 2019'} endDate={'Nov. 2021'} 
                description={"TODO Did some stuff for Vanguard"}
            />
        </Html>
    </>
}