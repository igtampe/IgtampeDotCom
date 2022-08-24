import { Link } from "@mui/material";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageGallerySection from "../../../section/ImageGallery";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../ProgramHeader";

export default function UMSATPage({
    Vertical = false
}) {

    var w=4;
    return (<>
        <ProgramHeader name="The UMS Asset Tracking System (UMSAT)" git="https://github.com/igtampe/UMSAssetTrack" />
        <ImageSideSection big Vertical={Vertical} right imgSrc="/images/programs/umsat/main.png">
           <ElevatedSection title='Tracking Made Easy'>
                UMSAT was primarily designed to help users of the <Link href='/passtimes/ums'>UMS</Link> track what they owned. It was the 
                second time I designed a web-app, and it arguably went better than <Link href='/programs/vibe'>FLoW</Link>. 
                In addition, it also was the first time I dipped my toes into using cookies, query 
                strings, and SQL. Perhaps I didn't do it in the most effective way, but I'm glad that it works. I'm sure that with better 
                instruction I could learn to handle them better given the fact that I at least have some knowledge of them now. The result
                was a simple, effective, and relatively nice-looking asset management system.
           </ElevatedSection>
        </ImageSideSection>
        <ImageGallerySection bigImgSrc="/images/programs/umsat/map.png"
            smallImages={[
                { imgSrc: '/images/programs/umsat/item.png', big:true},
                { imgSrc: '/images/programs/umsat/items.png' },

            ]}
            bigImgDesc="UMSAT also handled the generation of cards displayed on the UMS's Mapcrafter map"

        />
        
    </>)

}