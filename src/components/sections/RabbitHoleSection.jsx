import { RabbitHoleModel } from "src/components/models/RabbitHoleModel"

export const RabbitHoleSection = (props) => {
    return <>
        <RabbitHoleModel matcapManager={props.matcapManager} />
        {/* TODO Information card doesn't really apply here */}
    </>
}