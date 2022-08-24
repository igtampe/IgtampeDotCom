import { Link } from "@mui/material";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageSection from "../../../section/ImageSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../ProgramHeader";

export default function SmokeSignalPage({
    Vertical = false
}) {

    return (<>
        <ProgramHeader name="SmokeSignal" git="https://github.com/igtampe/Smokesignal" />
        <ImageSection imgSrc="/images/programs/smokesignal/main.png" title='Simple, but Extensible' Vertical={Vertical}>
            SmokeSignal is what resulted after rewriting ViBE's server to be more flexible. The result was a very simple,
            but extensible server program, that has quite a large amount of potential.
        </ImageSection>
        <ElevatedSection title='Send and Receive'>
            SmokeSignal works on a simple premise. Send the server a message, and receive a response. It may not be the greatest,
            and definitely not the most sustainable network strategy. However, for simple projects, it's more than sufficient.
        </ElevatedSection>
        <ImageSideSection big imgSrc="/images/programs/smokesignal/client.png" Vertical={Vertical}>
            <ElevatedSection title='Easy to Implement'>
                SmokeSignal, when implemented properly, can make it easy to communicate with a distant server, as if it was a simple local function.

                <p>On the server, it's as simple as making a new SmokeSignal Extension using the provided interface.  For clients, base classes 
                    are already available for <Link href='https://github.com/igtampe/SmokeSignalClient'>VB.NET</Link>, {' '}
                    <Link href='https://github.com/igtampe/SmokeSignal-CommandLine'>C#</Link>, and <Link href='https://github.com/igtampe/Hermes'>Java</Link>.</p>

                <p>With a few extra classes to parse the information at both ends, practically anything is possible. A few examples include</p>
                
                <ul>
                    <li><Link href='/programs/ViBE'>ViBE</Link> itself, which runs entirely on SmokeSignal</li>
                    <li><Link href='https://github.com/igtampe/LBL-Sender'>LBL</Link>, A simple file-transfer protocol used by EzTax (a ViBE subprogram)</li>
                </ul>
                
            </ElevatedSection>

            <ElevatedSection title='Now a little more secure'>
                Starting with V7, SmokeSignal now lets you implement a SmokeSignal Authenticator, which lets you authenticate users before running commands. 
                It provides a more secure experience, even though commands are still sent in plaintext. Eventually, perhaps, it may be better to implement 
                some sort of encryption at both ends, but this is a long term goal.
            </ElevatedSection>
        </ImageSideSection>
    </>)

}