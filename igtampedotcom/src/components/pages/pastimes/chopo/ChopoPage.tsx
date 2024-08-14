import ElevatedSection from "../../../section/ElevatedSection";
import ImageSection from "../../../section/ImageSection";
import Section from "../../../section/Section";
import ProgramHeader from "../../programs/ProgramHeader";
import ChopoCard from "./ChopoCard";
import useApi, { generateSimpleApi } from "../../../../hooks/useApi";
import { Chopo } from "../../../../model/Chopo";

export default function ChopoPage() {

    const chopoApi = useApi(generateSimpleApi<Chopo[]>("/pfp/index.json"),true)
    
    return (
        <>
            <ProgramHeader name='The Chopos' site="https://twitter.igtampe.com" />
            <ImageSection imgSrc="/pfp/tmm.jpg" title="A Sense of Identity">
                Although coming from an in-joke from Nexus, Chopo and my drawings have quickly come to make part of my identity.
            </ImageSection>

            <ElevatedSection>
                The history behind Chopo is the combination of two from Nexus (our Discord Server): It's Nicknames and its Profile Pictures.
                 
                <Section title="Nicknames" style={{marginTop:"20px"}}>
                    Nicknames in Nexus came first, following a format of a non-vowel sound, a vowel, the letter P, and the same vowel. This was the eventual standard
                    after several varieties had floated around. Another example besides Chopo might be my sister's nickname (Mopo) or my cousin's including Hepe and
                    Ocko. This also followed our convention at the time to say yes as "sipi" (Si with an added pi) and no as "nopo". 
                    
                    As a side note which we were not aware at the time, "Sipo" is a somewhat common way to say "Yep" in Chile, harkening back to our roots in a
                    roundabout way. 
                    
                    "Chopo" itself came from "Cho", which was a derivative of "Nacho", a common latin-american nickname for Ignacios. This derivation process was
                    similar for other nicknames. "Mopo" comes from the first letter of my sister Maru's name. "Hepe" comes from "Hapes", which comes from the spanish
                    pronunciations of JP.
                </Section>
                 
                <Section title='Profile Pictures' style={{marginTop:"20px"}}>
                    Profile Pictures came later in Nexus's life. It started as a joke, badly and quickly tracing tiny pictures of ourselves as a our PFP, but
                    a few generations in, its become an important part of Nexus's culture. Its no longer done as often, as Nexus may be seeing its own sunset
                    years, but a few of my cousins and I keep the tradition alive. Each PFP has its own adjective to describe it, which has also become part
                    of our nickname scheme. Some had themes shared between users, but most were individual portraits of ourselves.
                </Section>
            </ElevatedSection>

            <ElevatedSection title="All the Chopos">
                <div style={{textAlign:'center'}}>
                    {chopoApi.data?.map((a,i)=><ChopoCard key={`chopo${i}`} index={i} chopo={a}/>)}
                </div>
            </ElevatedSection>
            
        </>
    )

}