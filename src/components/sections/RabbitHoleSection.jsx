import { RabbitHoleModel } from "src/components/models/RabbitHoleModel"
import { useEffect, useRef } from "react"
import { use } from "react"

export const RabbitHoleSection = (props) => {
    const ref = useRef()

    useEffect(() => {
        ref.current.position.y = props.height
    }, [])
    
    return <>
        <RabbitHoleModel ref={ref} matcapManager={props.matcapManager} />
        {/* TODO Information card doesn't really apply here */}
    </>
}