import { InformationCard } from 'src/components/InformationCard'
import { Scroll } from '@react-three/drei'

const Section = (props) => {
    return (
        <section className="h-screen flex flex-col justify-center p-10">
            {props.children}
        </section>
    )
}

export const Overlay = () => {
    return (
        <Scroll html>
            <Section><h1>INTRODUCTION SECTION</h1></Section> {/* placeholder for introduction section */}
            <Section>
                <InformationCard 
                        title={"Arizona State University"} 
                        position={"Computer Systems Engineering, B.S.E."} 
                        startDate={'Aug. 2015'} endDate={'May 2019'} 
                        description={"TODO I got a degree"}
                    />
            </Section>
            <Section>
                <InformationCard 
                    title={"Phoenix Cubesat Project"} 
                    position={"Lead Flight Software Engineer"} 
                    startDate={'Sep. 2017'} endDate={'May 2019'} 
                    description={"TODO I led a team of students on a satellite project"}
                />
            </Section>
            <Section>
                <InformationCard 
                    title={"NG-12 Launches our cubesat to the ISS"} 
                    position={""} 
                    startDate={'Nov. 2019'} endDate={'TODO n/a'} 
                    description={"TODO Such an awesome experience"}
                />
            </Section>
            <Section>
                <InformationCard 
                    title={"The Vanguard Group"} 
                    position={"Big Data Engineer"} 
                    startDate={'Aug. 2019'} endDate={'Nov. 2021'} 
                    description={"TODO Did some stuff for Vanguard"}
                />
            </Section>
            <Section>
                <InformationCard 
                    title={"U.S. Naval Research Laboratory"} 
                    position={"Software Engineer in Spacecraft Engineering RDT&E"} 
                    startDate={'Jan. 2022'} endDate={'Present'} 
                    description={"Write software for the research of novel space technologies for national defense. Independently architect, develop, perform quality assurance, and effectively balance project and development needs through clear communication with management, stakeholders, and wider system teams."}
                />
            </Section>
            <Section><h1>CONTACT SECTION</h1></Section> {/* placeholder for contact section */}
            <Section><h1>RABBIT HOLE SECTION</h1></Section> {/* placeholder for rabbit hole section */}
        </Scroll>
    )
}