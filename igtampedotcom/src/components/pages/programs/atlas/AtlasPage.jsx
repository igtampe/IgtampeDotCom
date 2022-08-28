import { Link } from "@mui/material";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageGallerySection from "../../../section/ImageGallery";
import ImageSection from "../../../section/ImageSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../ProgramHeader";

export default function AtlasPage({
    Vertical = false
}){

    return(<>
     <ProgramHeader name="Atlas" git="https://github.com/igtampe/Atlas" site="https://umswiki.igtampe.com" />
        
        <ImageSection Vertical={Vertical} imgSrc='/images/programs/atlas/main.png' title='A small wiki application'>
            Though small, Atlas lets you create your own Wiki, including live editing, permissions, and even image management.
        </ImageSection>

        <ImageSideSection Vertical={Vertical} imgSrc="/images/programs/atlas/ums.png">
            <ElevatedSection title='Clean and unified'>
                With a few simple Material UI elements, Atlas can make your wiki pages look modern, whether you choose to view it in light or dark mode
            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection Vertical={Vertical} imgSrc="/images/programs/atlas/edit.png" right>
            <ElevatedSection title='Easy to write and maintain'>
                With a markdown-like syntax in its in-built editor, Atlas makes it easy to write new pages, and maintain old ones. Plus, with configurable
                permissions and restrictions, you can protect important pages from no-good doers, and leave others open to even anonymous users to contribute 
                their knowledge
            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection Vertical={Vertical} imgSrc="/images/programs/atlas/image.png">
            <ElevatedSection title='Baked in Image Hosting'>
                Atlas provides an in-built image uploading and hosting solution. Once uploaded, images can be called upon and loaded in articles using a provided
                image tag. 
            </ElevatedSection>
        </ImageSideSection>
        
        <ImageSection Vertical={Vertical} imgSrc='/images/programs/atlas/chopo.png'/>
        <ElevatedSection title='Its current use'>
            Atlas was developed as a wiki engine primarily to be used as a replacement to the original <Link href='/passtimes/ums'>UMS</Link> Wiki. We hope to expand
            its contents in the future with more about the history of this model nation. 
        </ElevatedSection>

    </>)

}