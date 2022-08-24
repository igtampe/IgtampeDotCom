import { Grid } from "@mui/material";
import BigImageCard from "../imagecard/BigImageCard";
import ImageCard from "../imagecard/ImageCard";
import LRGrid from "../lrgrid/LRGrid";

export default function ImageGallerySection({
    bigImgSrc = '', bigImgDesc = undefined, bigHref = "",
    smallImages = [
        {
            imgSrc: '',
            imgDesc: undefined,
            href: '',
            big: false
        }
    ], right = false, Vertical = false
}) {
    return (
        <div style={{ marginBottom: '20px' }}>
            <LRGrid
                Left={
                    <Grid container spacing={3} >
                        {smallImages.map(I => (
                            <Grid item xs={12}>
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

                Vertical={Vertical}

            />
        </div>
    )
}