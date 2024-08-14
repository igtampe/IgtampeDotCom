import ElevatedSection from "../../../section/ElevatedSection";
import ImageSection from "../../../section/ImageSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../../programs/ProgramHeader";

export default function OmtatPage() {

    return <>
        <ProgramHeader name="One Man's Trash is Another's Treasure (OMTAT)" />
        <ImageSection title='A Different Kind of Recycling' imgSrc="/images/endeavors/omtat/main.jpg" /
        //ignore vertical 
        >
        <ElevatedSection>
            One Man's Trash is Another's Treasure (OMTAT) was a project birthed after I had been given several computers
            by my high school. I was glad I had managed to save working, or nearly working computers from a landfill.
            Moreover, I loved tinkering and fixing them, even if I really didn't have much use. for them Some I did use for
            myself, like my trash-restored Thinkpad T420, but my collection still grew. Perhaps, I thought, others may be
            in need of computers. Hence, I begun collecting more computers to donate. I did what I could, but eventually
            I knew others could help me in my goal.
        </ElevatedSection>
        <ImageSideSection imgSrc="/images/endeavors/omtat/comps.jpg" big>
            <ElevatedSection title='Getting Student Help'>``
                I presented the idea of OMTAT to my high school's administration, and eventually to the student body. OMTAT would
                be a club that would both blend recycling, and community service. The administration was enthralled, and I received
                generally positive feedback from students. The presentation was well worth it, even if it was rather nerve-racking.
                This was the beginning of a 2 year project, where students helped and learned under my leadership. We worked for several
                hours during and after-school in the computer lab where we were allowed to set up. Though there were a few frustrating
                computers that just didn't want to work, we managed to succeed, and soon enough had several computers ready to be donated
            </ElevatedSection>
        </ImageSideSection>
        <ImageSideSection imgSrc="/images/endeavors/omtat/donate.jpg" big right
            imgDesc="Me presenting a donation to El Instituto Psicopedagógico de Puerto Rico (IPPR)">
            <ElevatedSection title='The End Result'>
                The group ended up restoring around 70 out of the 100 computers we received to a variety of local non-profits. I remember 
                going out in the field and dropping computers off, sometimes setting them up, and receiving in return many smiles and kind 
                words. I also remember going out to recycle the things we couldn't restore, making sure we kept our ecological footprint down.

                <p>Though I couldn't continue the project once I left to college, I do hope it left an impact in the communities we served. 
                    It's been several years now, and it's likely that some of the computers we donated have broken down. Still, if my little 
                    trash-picked desktop I use as a server is any indication, there's probably quite a few still humming along, serving 
                    the community.</p>
            </ElevatedSection>
        </ImageSideSection>
    </>

}