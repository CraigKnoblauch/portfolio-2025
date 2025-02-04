import { PhoenixLogoLiteModel } from "src/components/models/PhoenixLogoLiteModel"
import { CubesatModel } from "src/components/models/CubesatModel"
import { InformationCard } from "src/components/InformationCard"
import { Html } from "@react-three/drei"
import * as THREE from "three"
import { useEffect, useRef } from "react"

export const PhoenixSection = (props) => {
    const logoRef = useRef()
    const cubesatRef = useRef()

	useEffect(() => {
		// logoRef.current.postion.y = props.height
        // cubesatRef.current.postion.y = props.height
	}, [])

    return <>
        <PhoenixLogoLiteModel ref={logoRef}/>
        <CubesatModel ref={cubesatRef} matcapManager={props.matcapManager} />
        <Html as='div' className="relative" position={new THREE.Vector3(0, props.height, 0)}>
            <InformationCard 
                title={"Phoenix Cubesat Project"} 
                position={"Lead Flight Software Engineer"} 
                startDate={'Sep. 2017'} endDate={'May 2019'} 
                description={"TODO I led a team of students on a satellite project"}
            />
        </Html>
    </>
}
