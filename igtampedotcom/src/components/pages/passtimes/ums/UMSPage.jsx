import { Grid, Link, Typography } from "@mui/material";
import ImageCard from "../../../imagecard/ImageCard";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageSection from "../../../section/ImageSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../../programs/ProgramHeader";
import UMSLandmarks from "./Landmarks.json"

export default function UMSPage({
    Vertical = false
}) {

    ///images/passtimes/ums/main.jpg
    return (<>
        <ProgramHeader name='The Ultra Modern Sector (The UMS)' />
        <ImageSection imgSrc="/images/passtimes/ums/main.jpg" title='A Nation all its own' right>
            Spanning over 6km by 4km, the UMS has been a massive passion project.
        </ImageSection>

        <ImageSideSection imgSrc="/images/passtimes/ums/history.jpg" big Vertical={Vertical}>
            <ElevatedSection title="Humble beginnings">
                The UMS Started as a simple project, designed to be the backdrop to a house I was building in Minecraft. The original video I saw which inspired me
                to settle my virtual house here is still viewable on <Link href="https://www.youtube.com/watch?v=cZU5fsvYh6g&t=0s">YouTube</Link>.

                <p>I could only dream of what would follow. After a few other houses, I soon began inviting other friends and my cousins onto the server to make their
                    piece. After our first large project, an airport for the city, it soon spun off to a big server, and an even bigger nation</p>

            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection imgSrc="/images/passtimes/ums/paradisus.jpg" big right Vertical={Vertical} imgDesc="The Minotaur, the UMS Government's central building, behind Laertes Central Park">
            <ElevatedSection title="A Stage for Leadership">
                <p>The UMS and Nexus started simple, just build where you want. Eventually though we found disputes that needed to be remediated between parties
                    This gave birth to the Nexus Legal System and what would eventually become the UMS's Legal System. After our DA failed to appear for a case,
                    the idea of the UMS Government sprouted, and became a reality
                </p>
                What followed was a great stage for leadership, as with the government came a President, Congress, and a Justice Department. While we were few,
                and very young, we still strived to make this model nation the best we could. Elections were held. Speeches were written. Debates were had.
                News were reported. We all became leaders in our own right. Not only that, we practiced our writing and public speaking skills, ones which would
                take into our adulthood after the UMS

            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection imgSrc="/images/passtimes/ums/ocko.jpg" big Vertical={Vertical} imgDesc="The second UMS National Bank Tower in South Osten">
            <ElevatedSection title="A Driving Force">
                <p>
                    Later in the UMS's lifespan, begun the idea of creating an economy for the nation. After some discussion among government officials,
                    and a big effort on the part of yours truly, the economy was formalized. This economy alone has been a major driving force in my development
                    as a software engineer.
                </p>
                The three major banking institutions of the UMS, Riverside Financial, G-Bank, and not least the UMS National Bank (UMSNB) saw three different
                generations of applications, each representing a different era of my own programming knowledge. From our late years working in Batch, where we
                took things to the limit with <Link href='/Programs/UMSWEB'>TEBECON</Link>, to our first foray into networking and GUI development
                with <Link href='/Programs/ViBE'>ViBE</Link>, and eventually our next steps into industry standard tools and practices
                with <Link href='/Programs/Neco'>Neco</Link>.
            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection imgSrc="/images/umsmap.png" big Vertical={Vertical} right>
            <ElevatedSection title="A lot of fun">
                <p>
                    After a few years, the UMS had gone from a downloaded map, to a land filled with multiple buildings, each with its own story. What started
                    as just a small server between friends became a big unifier for the Nexus to come. What began as a small idea became a government with
                    several events, and important positions.
                </p>
                Today, the UMS sits dormant, awaiting to greet its visitors again. Its currently hosted on a Paper Minecraft Server on Pebblehost. You can
                find it at <code>ums.igtampe.com</code>. The map on the right is also available <Link href="http://ums.igtampe.com:8037/?worldname=MSM.UMS&mapname=surface&zoom=0&x=1261&y=64&z=-142">here</Link>.
            </ElevatedSection>
        </ImageSideSection>

        <ElevatedSection title="Important Landmarks">
            Below is a small section on important landmarks of the UMS
        </ElevatedSection>

        <Grid container spacing={2} style={{ marginBottom: '20px' }}>
            {UMSLandmarks.map(l => (
                <Grid item xs={Vertical ? 12 : 4}>
                    <ImageCard imgSrc={`/images/passtimes/ums/${l.image}`} title={l.name}>
                        <Typography variant="subtitle2">Built in {l.location} circa {l.year}</Typography>
                        <p>{l.description}</p>
                    </ImageCard>
                </Grid>
            ))}
        </Grid>

        <ElevatedSection title='Showcases'>
            We created several showcase videos of the UMS throughout the years, showing newly constructed buildings by myself, or others in the server.
            Below is the most recent one, along with a playlist of the others, going as far back as 2016
        </ElevatedSection>
        <ElevatedSection>
            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/Ao4N18novPU?list=PLan1zirsMiAAG7VpwmQW7LdUBMFuCkTUm&index=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </ElevatedSection>
        
        <ImageSection imgSrc="/images/passtimes/ums/newpondnight.jpg" title="The end of an era" Vertical>
            The UMS was a great piece of my life, one I struggle to honor in a way that seems fitting. What I've written here seems to barely scratch the
            surface, but I'm glad we can look back on it now as more than just the little server that it was. If you're interested in more history from the
            UMS, consider looking at the UMS Wiki's page on the country <Link href="https://umswiki.igtampe.com/Article/The%20UMS">here</Link>
        </ImageSection>
    </>)

}