import { GithubModel } from "src/components/models/GithubModel"
import { LinkedinModel } from "src/components/models/LinkedinModel"
import { MailboxModel } from "src/components/models/MailboxModel"
import * as THREE from "three"
import { useEffect, useRef } from "react"

export const ContactSection = (props) => {

    const ref = useRef()
    const ref2 = useRef()
    const ref3 = useRef()

    return <>
        <GithubModel ref={ref} matcapManager={props.matcapManager} />
        <LinkedinModel ref={ref2} matcapManager={props.matcapManager} />
        <MailboxModel ref={ref3} matcapManager={props.matcapManager} />
    </>
}
