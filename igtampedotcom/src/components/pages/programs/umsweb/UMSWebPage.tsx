import { Link } from "@mui/material";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageSection from "../../../section/ImageSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../ProgramHeader";

export default function UMSWebPage(){

    return(<>
        <ProgramHeader name="The UMSWEB" git="https://github.com/igtampe/umsweb"/>
        <ImageSection title="Batch at its limits" imgSrc="/images/programs/umsweb/main.png">
            The UMSWEB represents my last steps with Batch, taken to its limits with several helper programs and utilities. 
            All of it accessed through an SSH server
        </ImageSection>
        
        <ImageSideSection imgSrc="/images/programs/umsweb/login.png">
            <ElevatedSection title="Graphics on Batch">
                Thanks to a few external tools (notably FN.DLL) programs on the UMSWEB managed to paint logos, and basic UIs.
                Although slow by our standards today, our first foray into graphics like this would lay the foundation for later projects, and our late 
                love of the console
            </ElevatedSection>
        </ImageSideSection>
        
        <ImageSideSection right imgSrc="/images/programs/umsweb/launch.png">
            <ElevatedSection title="Remotely Accessible">
                Having recently learned about SSH for our college's course enrollment system, I was fascinated with this terminal access. After some
                setup, we managed to run FreeSSHD on our server, and connect through PuTTY. This service is no longer available, but it was the start of the
                UMSWEB. Throughout its life, it gained several services, all accessible through the launcher.
            </ElevatedSection>
        </ImageSideSection>
        
        <ImageSideSection imgSrc="/images/programs/umsweb/home.png">
            <ElevatedSection title="An Economy through Text">
                The main service the UMSWEB provided was TEBECON (Text Based Economy). This small yet expansive project when through four major iterations,
                each improving the service to our users. TEBECON powered the start of the UMS Economy, and laid the groundwork for future projects. It most
                notably inspired <Link href='/programs/vibe'>ViBE (The Visual Basic Economy)</Link>, which was built on top of TEBECON's system, and was
                actually <Link href='https://www.youtube.com/watch?v=-OqAGTccs8w'>backwards compatible</Link> during its early lifespan
            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection right imgSrc="/images/programs/umsweb/limitations.png">
            <ElevatedSection title="Limitations">
                The UMSWEB from the start, although having its charm, was somewhat difficult to access. For my younger cousins and friends, 
                the <Link href="https://www.youtube.com/watch?v=N4cZEivJ1-U">multi-step process</Link> to setup, connect, and actually operate within
                the economy every time meant some operations took too long to commit and to verify. In addition, the Economy grew so quickly that 
                we soon hit the 32-Bit signed integer limit. This is one of the major reasons ViBE was created, and was adopted very quickly.
            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection imgSrc="/images/programs/umsweb/eos.png">
            <ElevatedSection title="End of Service">
                With most of TEBECON's features <Link href='https://www.youtube.com/watch?v=uSkIP0r3_q4'>moving to ViBE</Link>, and its fast adoption,
                The UMSWEB's main client-side application was put out of service. Later on, administrative utilities were added to the ViBE server, and
                accessed through <Link href='https://github.com/igtampe/asimov'>Assisted Income Manager over ViBE (AsIMoV)</Link>. The last remaining
                service on the UMSWEB was the <Link href='https://github.com/igtampe/AURORA'>AURORA</Link> (not coded in batch), which monitored Artemis's
                (the name of my server) uptime, and was eventually put out of commission completely when Artemis was retired.
            </ElevatedSection>
        </ImageSideSection>

    </>)
    
}