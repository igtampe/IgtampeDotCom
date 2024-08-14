import { Grid } from "@mui/material";
import { GalleryImage } from "../../model/GalleryImage";
import LRGrid from "../lrgrid/LRGrid";
import BigImageCard from "../imagecard/BigImageCard";
import ImageCard from "../imagecard/ImageCard";

export default function ImageGallerySection(props : {
    bigImgSrc : string, 
    bigImgDesc? : string, 
    bigHref? : string,
    smallImages : GalleryImage[], 
    right? : boolean
}) {

    const {bigHref,bigImgSrc,smallImages,bigImgDesc,right} = props

    return (
        <div style={{ marginBottom: '20px' }}>
            
            <LRGrid
                Left={
                    <Grid container spacing={3} >
                        {smallImages.map((I,index) => (
                            <Grid key={`imageGridImage${index}`} item xs={12}>
                                {I.big
                                    ? <BigImageCard href={I.href} imgSrc={I.imgSrc}>
                                        {I.imgDesc}
                                    </BigImageCard>
                                    : <ImageCard href={I.href} imgSrc={I.imgSrc}>
                                        {I.imgDesc}
                                    </ImageCard>

                                }
                            </Grid>
                        ))}
                    </Grid>
                }

                Right={
                    <BigImageCard imgSrc={bigImgSrc} href={bigHref}>
                        {bigImgDesc}
                    </BigImageCard>
                }

                flipElements={!right}

            />
        </div>
    )
}