import ImageSection from "../../../section/ImageSection";
import ProgramHeader from "../ProgramHeader";
import ImageSideSection from "../../../section/ImageSideSection";
import ElevatedSection from "../../../section/ElevatedSection";

export default function ClothespinPage({
    Vertical = false
}) {

    return (<>
        <ProgramHeader name="Clothespin" git="https://github.com/igtampe/Clothespin" />
        <ImageSection title="Clothes Tracking made Easy" imgSrc="/images/programs/clothespin/main.png" Vertical={Vertical}>
            Clothespin is designed to make it easy to track your closet's clothes, log your usage, and gain insights into what clothes you use on a day to day basis.
        </ImageSection>
        <ImageSideSection big imgSrc="/images/programs/clothespin/home.png" Vertical={Vertical}>
            <ElevatedSection title='Closet Management'>
                Clothespin categorizes your closet into several types and subtypes of wearable items. Using its powerful search feature, among other tools, you'll
                never lose track of your favorite items. Then, when you're ready, bundle them together into reusable outfits.
            </ElevatedSection>
        </ImageSideSection>
        <ImageSideSection big imgSrc="/images/programs/clothespin/outfits.png" right Vertical={Vertical}>
            <ElevatedSection title='Logging'>
                With a little bit of effort, you can build a comprehensive log of your daily clothing usage. Simply select, or build your outfit for the day before
                you go, and soon you'll have enough data to gain comprehensive insights into what you use.
            </ElevatedSection>
        </ImageSideSection>
        <ImageSideSection imgSrc="/images/programs/clothespin/mobile.png" big Vertical={Vertical}>
            <ElevatedSection title='Mobile Friendly'>
                Log in and manage your closet all from the comfort of your phone! Build your outfit and log it all while walking out the door. Clothespin is designed to be
                Mobile Friendly in its website, allowing for easy on-the-go logging.
            </ElevatedSection>
            <ElevatedSection title='A Learning Experience'>

                <p>All blurbs about the app aside, Clothespin was primarily a learning experience. With it, we solidified our understanding of ASP.NET's Web APIs, 
                    along with building a React.JS SPA Frontend with Material UI. In addition, we really got into the nitty gritty with Entity Framework. Its experience 
                    that has been invaluable in Neco's post reset development.</p>

                <p>In addition, I learned a little bit about Icon design. The icons for clothing items are originals drawn by yours truly on Paint.NET.</p>

                <p>All In all though, Clothespin really was my first personal project involving a full-stack development cycle, and although its missing some features 
                    (especially the insight graphs I really wanted to have), I'm still very proud of it.</p>
            </ElevatedSection>
        </ImageSideSection>
    </>)

}