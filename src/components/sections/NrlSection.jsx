import { NrlModel } from "src/components/models/NrlModel"
import { InformationCard } from "src/components/InformationCard"
import { Html } from "@react-three/drei"

export const NrlSection = (props) => {
    return <>
        <NrlModel matcapManager={props.matcapManager} />
        <Html as='div'>
            <InformationCard />
        </Html>
    </>
}