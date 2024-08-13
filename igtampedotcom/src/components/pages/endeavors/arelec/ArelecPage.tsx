import { Link } from "@mui/material";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageSection from "../../../section/ImageSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../../programs/ProgramHeader";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

function ArelecIntro() {
    return (<>
        ARElec (once named EDCI) was a small association at my college. The association focused not just on recycling and ecology,
        but also computer literacy and cybersecurity. Unfortunately, the association has ceased operations at time of writing. Still,
        I remember my time working in it as vice president positively. I managed to give a few seminars, and help with communication
        to the student body. Even as our membership shrank, the president and I still were able to organize a few impressive events.
    </>)
}

export default function ArelecPage() {

    const {verticalMode : Vertical} = useWindowDimensions();

    return (<>
        <ProgramHeader name="Asociacion Pro-Reciclaje de Electronicos (ARElec)" />
        <ImageSection title='Ecology and Tech Consciousness' imgSrc="/images/endeavors/arelec/main.png">
            {Vertical && <ArelecIntro />}</ImageSection>
        { !Vertical && <ElevatedSection>
                <ArelecIntro />
            </ElevatedSection>}
        <ImageSideSection imgSrc="/images/endeavors/arelec/ad.png">
            <ElevatedSection title='Recycling Drives'>
                ARElec hosted a few recycling drives at the college, where we mostly collected batteries and other small electronics.
                Though perhaps this was different from what I was used to receiving, given my previous work in <Link href='/endeavors/omtat'>OMTAT</Link>,
                I believe these may have been more impactful. Batteries need to be disposed with a lot of care, and it's great that
                we took care of it, rather than leaving them to rot in landfills.
            </ElevatedSection>
        </ImageSideSection>
        <ImageSideSection imgSrc="/images/endeavors/arelec/compuexpo.png" big right>
            <ElevatedSection title='EcoExpo and CompuExpo'>
                Even before I had arrived, the association had hosted EcoExpo for several years. These expos involved several company seminars
                and events relating to ecological topics and achievements. We also later organized CompuExpo, a revived exposition event involving
                other tech companies.  While I cannot say I did as much as the president, I still helped greatly in communicating with the companies
                we invited.

                <p>Currently, EcoExpo has been handed over to Campus Verde, another association at the college. The former president of ARElec was
                    still heavily involved with its planning. The last one to happen had a facebook page visible <Link href='https://www.facebook.com/eco.expo.pr/'>here</Link>.</p>
            </ElevatedSection>
        </ImageSideSection>
        <ImageSideSection imgSrc="/images/endeavors/arelec/seminar.jpg">
            <ElevatedSection title='Seminars'>
                Along with the ones hosted in CompuExpo and EcoExpo, we also invited companies, and hosted our own, smaller seminars. Perhaps our
                most impressive one was the one pictured here, where we invited the FBI, The department of Homeland Security, Microsoft, HP, and
                the Puerto Rico Department of Justice. Other smaller seminars we hosted included one on malware and computer viruses, and a
                seminar I gave myself about Linux and how to install it.
            </ElevatedSection>
        </ImageSideSection>

        <ElevatedSection>
            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/D9ITmDpHumc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </ElevatedSection>

    </>)

}