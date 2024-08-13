import { Button } from "@mui/material";
import { useState } from "react";
import HeaderModal from "../../../header/HeaderModal";
import { HeaderImage } from "../../../../model/HeaderImage";

export default function PhotosCollectionImageCard(props: {
    image : HeaderImage
    collection:string
}) {

    const {image,collection} = props
    const [detailsOpen, setDetailsOpen] = useState(false)

    return (<>
        <HeaderModal open={detailsOpen} setOpen={setDetailsOpen} collection={collection} image={image} key={image.file} />
        <Button style={{ width: '100%' }} onClick={()=>{setDetailsOpen(true)}}>
            <img src={`/headers/${collection}/cropped/${image.file}`} alt={image.name}
                style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
        </Button>
    </>)

}