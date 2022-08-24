import { Link } from "@mui/material";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageSection from "../../../section/ImageSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../ProgramHeader";

export default function SwitchboardPage({
    Vertical = false
}) {

    return (<>
        <ProgramHeader name="Switchboard" git="https://github.com/igtampe/Switchboard" />

        <ImageSection vertical={Vertical} title='More Powerful, Still Simple' imgSrc="/images/programs/switchboard/main.png" Vertical={Vertical}>
            Switchboard is the next evolutionary step from <Link href='/programs/smokesignal'>SmokeSignal</Link>, while still
            aiming to provide a simple way for users to build Server/Client apps, now in C#!
        </ImageSection>

        <ElevatedSection title='Send and Receive as many times as you want'>
            Unlike its predecessor, Switchboard maintains connections open, allowing users to send and receive data as many
            times as they want before disconnecting. Everything is managed on the client side by using a SwitchbaordClient object,
            which can easily be extended for whatever purpose is necessary. See the <Link href='/programs/Colloquor'>Colloquor</Link> {' '}
            project and its use of the ColloquorClient class.
        </ElevatedSection>

        <ElevatedSection title='No More Wait Times'>
            Switchboard recently started handling requests asynchronously. This means that Clients no longer have to wait for a previous
            connection to complete its requests (Like in Smokesignal) or for its turn to be processed (Like in Switchboard before this change).
            This patch was handled entirely on the server side, so no client change is necessary.
        </ElevatedSection>

        <ImageSideSection imgSrc="/images/programs/switchboard/settings.png" big imgDesc='The settings of a Switchboard Server with no extensions' Vertical={Vertical}>
            <ElevatedSection title='Easier to Manage'>
                Switchboard lets you manage everything via a GUI, rather than the clunky console system that Smokesignal has and its array of config files.
            </ElevatedSection>
            <ElevatedSection title='More Secure'>
                Switchboard includes authentication by default, unlike SmokeSignal, and in a much more sensible way, by tying sessions to connections. This
                avoids having to authenticate with every command, and also allows every command to be an authenticated command.
            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection Vertical={Vertical} right imgSrc="/images/programs/switchboard/sample.png" >
            <ElevatedSection title='More Easily Debuggable'>
                Switchboard logs the commands it receives and replies it sends on a per connection basis, which should hopefully allow users to debug their
                programs a little more easily.

                <p>This along with the Switchboard Console should provide greater ease in testing. At least I can attest that it was a lot easier for
                    me when I built Colloquor!</p>
            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection Vertical={Vertical} imgSrc="/images/programs/switchboard/colloquor.png" big>
            <ElevatedSection title='Just as Extensible'>
                Built on our knowledge from Smokesignal and Secuquor, Swithcboard easily allows the integration of Switchboard Extensions, all of which
                manageable through the same settings window.

                <p>Aside from the new virtual settings function, the Switchboard Extension abstract class is very similar to a SmokeSignal extension, 
                    and an extension made there should be easily portable to Switchboard.</p>
            </ElevatedSection>
        </ImageSideSection>
    </>)

}