import ElevatedSection from "../../../section/ElevatedSection";
import ImageSection from "../../../section/ImageSection";
import ProgramHeader from "../../programs/ProgramHeader";

export default function UMSPage({
    Vertical = false
}){

    return(<>
        <ProgramHeader name='The Ultra Modern Sector (The UMS)'/>
        <ImageSection imgSrc="/images/umsmap.png" title='A Nation all its own' right/>
        <ElevatedSection>
            Spanning over 6km by 4km, the UMS has been a massive passion project of mine, and my friends and siblings. Over the course of 
            several years, we've been able to build and partake in this model nation, and form its model government and economy. It's driven 
            me to program ViBE and Neco, and to build several little buildings. Though, perhaps out of the scope of this website, I thought 
            it'd be important to specify what the UMS is.

            <p>The UMS is now hosted on Pebblehost so its online 24/7 with a better server and internet speed. We're working on migrating UMS resources to another site.</p>

            TODO: WRITE A HISTORY SECTION. USE BLURBS FROM THE WELCOME VIDEO
        </ElevatedSection>
        <ElevatedSection>
            <iframe width="100%" height="500px" src="http://nexusums.my.pebble.host:8037/?worldname=MSM.UMS&mapname=surface" title="UMS Map" frameborder="0" allowfullscreen></iframe>
        </ElevatedSection>
        <ElevatedSection title='Showcases'>
            As a small aside, we created several showcase videos of the UMS throughout the years, showing newly constructed buildings by myself, or others in the server. 
            Below is the most recent one, along with a playlist of the others, going as far back as 2016
        </ElevatedSection>
        <ElevatedSection>
        <iframe width="100%" height="500px" src="https://www.youtube.com/embed/Ao4N18novPU?list=PLan1zirsMiAAG7VpwmQW7LdUBMFuCkTUm&index=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </ElevatedSection>

    </>)
    
}