import { Link } from "@mui/material";
import BigImageCard from "../../../imagecard/BigImageCard";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageSection from "../../../section/ImageSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../ProgramHeader";

export default function ColloquorPage({
    Vertical = false
}){

    return(<>
        <ProgramHeader name="Colloquor" git="https://github.com/igtampe/ColloquorClient" />
        
        <ImageSection Vertical={Vertical} imgSrc='/images/programs/colloquor/main.png' title='A Basic Switchboard Demo'>
            Colloquor is a simple demonstration of the Switchboard Server, and my first major project in C#.
        </ImageSection>
        
        <BigImageCard imgSrc='/images/programs/colloquor/livedemo.png'> 
            Colloquor working across two computers after a bit of a panic attack when I did not set my own server up correctly
        </BigImageCard>

        <div style={{marginTop:'20px'}}/>

        <ImageSideSection imgSrc="/images/programs/colloquor/history.png" big imgDesc="Colloquor 2.4">
            <ElevatedSection title='A Program with History'>
                This version of the Colloquor client is actually V4. The original version was written in batch, circa 2014. 
                I included a dedication in the client's about page, as well as an extractable copy of Colloquor 2.4. It's quite an 
                impressive journey I've taken since I coded it, and I was mystified by the fact that I could communicate with someone 
                in another room with a program of my own design. Perhaps it's also quite interesting to see how some of my roots can 
                still show up in the programs I write today.
            </ElevatedSection>    
        </ImageSideSection>

        <ImageSideSection right imgSrc="/images/programs/colloquor/server.png" >
            <ElevatedSection title='Powered by Switchboard'>
                Colloquor is, again, a demo for <Link href='/programs/switchboard'>Switchboard</Link>. Colloquor's server is entirely 
                contained in the Colloquor's Switchboard Extension, in a system very similar to that of <Link href='/programs/vibe'>ViBE's</Link> 
                {' '} <Link href='/programs/smokesignal'>Smokesignal</Link> Extension. See more of Switchboard and the way it's built over at the Switchboard page.
            </ElevatedSection>    
        </ImageSideSection>

    </>)
    
}