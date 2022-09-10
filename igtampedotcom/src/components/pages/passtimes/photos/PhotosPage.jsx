import ElevatedSection from "../../../section/ElevatedSection";
import ImageSection from "../../../section/ImageSection";
import ProgramHeader from "../../programs/ProgramHeader";
import PhotosCollectionPane from "./PhotosCollectionPane";

export default function PhotosPage({
    Vertical = false
}) {

    //Download the collections



    return (<>
        <ProgramHeader name='Photos' />
        <ImageSection imgSrc="/headers/day/DSC_0307.JPG" Vertical={Vertical} title="A Small Hobby">
            I take a few photos sometimes, especially with liminal spaces and lots of sunsets. You might've seen some in the header!
            Here's the whole collection. It's organized by time of day.
        </ImageSection>
        <PhotosCollectionPane collection="any" name="Any Time">
            <ElevatedSection elevation={2}>
                These photos are internal shots used at any time of day. A lot of these are in the DC Metro System.
            </ElevatedSection>
        </PhotosCollectionPane>
        <PhotosCollectionPane collection="sun" name="Sunrise/Sunset">
            <ElevatedSection elevation={2}>
                These photos are shots of sunrises and sunsets used from 5 AM to 8 AM and 5PM to 8 PM.
            </ElevatedSection>
        </PhotosCollectionPane>
        <PhotosCollectionPane collection="day" name="Day">
            <ElevatedSection elevation={2}>
                These photos are shots during the day used from 8 AM to 5 PM.
            </ElevatedSection>
        </PhotosCollectionPane>
        <PhotosCollectionPane collection="night" name="Night">
            <ElevatedSection elevation={2}>
                These photos are used at night from 8 PM to 5 AM.
            </ElevatedSection>
        </PhotosCollectionPane>


    </>)

}