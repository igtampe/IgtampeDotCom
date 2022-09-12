import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageSection from "../../../section/ImageSection";
import ImageSideSection from "../../../section/ImageSideSection";
import Section from "../../../section/Section";
import ProgramHeader from "../../programs/ProgramHeader";
import ChopoCard from "./ChopoCard";

export default function ChopoPage(
    {
        Vertical = false
    }
) {

    const [chopos,setChopos] = useState([]);

    useEffect(() => {
        if (chopos.length !== 0) { return }
        //Determine what pfp to use
        fetch('/pfp/index.json')
            .then((response) => response.json())
            .then((data) => {
                setChopos(data.data)
            })
    })

    return (
        <>
            <ProgramHeader name='The Chopos' site="https://twitter.igtampe.com" />
            <ImageSection imgSrc="/pfp/tmm.jpg" Vertical={Vertical} title="A Sense of Identity">
                Although coming from an in-joke from Nexus, Chopo and my drawings have quickly come to make part of my identity.
            </ImageSection>
            <ElevatedSection>
                The history behind Chopo is the combination of two from Nexus (our Discord Server): It's Nicknames and its Profile Pictures.
                <br /> <br />
                <Section title="Nicknames">
                    Nicknames in Nexus came first, following a format of a non-vowel sound, a vowel, the letter P, and the same vowel. This was the eventual standard
                    after several varieties had floated around. Another example besides Chopo might be my sister's nickname (Mopo) or my cousin's including Hepe and
                    Ocko. This also followed our convention at the time to say yes as "sipi" (Si with an added pi) and no as "nopo". <br />
                    <br />
                    As a side note which we were not aware at the time, "Sipo" is a somewhat common way to say "Yep" in Chile, harkening back to our roots in a
                    roundabout way. <br />
                    <br />
                    "Chopo" itself came from "Cho", which was a derivative of "Nacho", a common latin-american nickname for Ignacios. This derivation process was
                    similar for other nicknames. "Mopo" comes from the first letter of my sister Maru's name. "Hepe" comes from "Hapes", which comes from the spanish
                    pronunciations of JP.
                </Section>
                <br /> <br />
                <Section title='Profile Pictures'>
                    Profile Pictures came later in Nexus's life. It started as a joke, badly and quickly tracing tiny pictures of ourselves as a our PFP, but
                    a few generations in, its become an important part of Nexus's culture. Its no longer done as often, as Nexus may be seeing its own sunset
                    years, but a few of my cousins and I keep the tradition alive. Each PFP has its own adjective to describe it, which has also become part
                    of our nickname scheme. Some had themes shared between users, but most were individual portraits of ourselves.
                </Section>
            </ElevatedSection>

            <ElevatedSection title="All the Chopos">
                <div style={{textAlign:'center'}}>
                    {chopos.map(a=>(<><ChopoCard chopo={a}/></>))}
                </div>
            </ElevatedSection>
            
        </>
    )

}