import { Link } from "@mui/material";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageGallerySection from "../../../section/ImageGallery";
import ImageSection from "../../../section/ImageSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../ProgramHeader";

export default function AirportBoardPage({
    Vertical = false
}){

    return(<>
    <ProgramHeader name="AirportBoard" git="https://github.com/igtampe/AirportBoard" />
        
        <ImageSection Vertical={Vertical} imgSrc='/images/programs/airportboard/main.png' title='A Console Information Display'>
            AirportBoard uses its own proprietary files to generate a console based, information display. The result is a retro 
            experience, which is easy to customize to make it your own.
        </ImageSection>

        <ElevatedSection>
            Designed mostly to show off the <Link href='/programs/basicrender'>BasicRender Class Libraries</Link> (previously 
            just a module I made for VB.NET), the result was an easily customizable experience. This is mostly thanks to the 
            fact that everything rendered on screen is generated through the use of small scripts I called ABScripts. They're 
            very reminiscent of the Batch files I used to code.
        </ElevatedSection>

        <ImageSideSection Vertical={Vertical} imgSrc="/images/programs/airportboard/abwriter.png" big>
            <ElevatedSection title='Bundled with Tools'>
                <p>Included with the AirportBoard releases I've made, is <Link href='https://github.com/igtampe/abwriter'>ABWriter</Link>. 
                    It's an IDE of sorts, which helps building ABScript files, and even lets you preview files, given you have 
                    AirportBoard in the same directory of the file you're editing.</p>

                <p>Along with this is Henja2, an editor for DrawFiles (DFs) which help in creating the graphics used by 
                    AirportBoard and BasicRender.</p>
            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection Vertical={Vertical} imgSrc="/images/programs/airportboard/landingpad.png" big right>
            <ElevatedSection title='Also, LandingPad'>
                LandingPad, based on AirportBoard 2.0, modifies the code slightly to allow users to run programs by hitting specified keys. I 
                designed it primarily to replace the aging batch file that ran the launcher for my <Link href='/programs/umsweb'>SSH server</Link>. 
                The result of using AirportBoard made for a much faster draw-time when compared to the work-arounds I used in the batch file I made 
                in 2018. Though, perhaps some of its quirks gave it some charm. Still, I appreciate the quicker access times when just checking up 
                on my server.
            </ElevatedSection>
        </ImageSideSection>
        <ElevatedSection title='Gallery'/>
        <ImageGallerySection
        bigImgSrc="/images/programs/airportboard/demo.png"
        smallImages={[
            { imgSrc: '/images/programs/airportboard/about.png'},
            { imgSrc: '/images/programs/airportboard/artemis.png' , big:true },
        ]}
        right //ignore vertical
        />
        <ImageGallerySection
        bigImgSrc="/images/programs/airportboard/weather.png"
        smallImages={[
            { imgSrc: '/images/programs/airportboard/depboard.png'},
            { imgSrc: '/images/programs/airportboard/security.png' , big:true },
        ]}
        
        />
    </>)
    
}