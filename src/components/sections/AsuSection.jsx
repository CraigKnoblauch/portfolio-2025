import { AsuModel } from "src/components/models/AsuModel"
import { InformationCard } from "src/components/InformationCard"
import { Html } from "@react-three/drei"
import * as THREE from "three"
import { useEffect, useRef } from "react"

export const AsuSection = (props) => {
    const ref = useRef()

    // Init postion of group to height prop
    // useEffect(() => {
        // ref.current.position.y = props.height
    // }, [])

    return <>
        <AsuModel ref={ref} matcapManager={props.matcapManager} />
        <Html as='div' className="relative" position={new THREE.Vector3(0, props.height, 0)}>
            <InformationCard 
                title={"Arizona State University"} 
                position={"Computer Systems Engineering, B.S.E."} 
                startDate={'Aug. 2015'} endDate={'May 2019'} 
                description={"TODO I got a degree"}
            />
        </Html>
    </>
}