import { Button } from "@mui/material";
import { useState } from "react";
import HeaderModal from "../../../header/HeaderModal";

export default function PhotosCollectionImageCard({
    image = {
        "file": "",
        "name": "",
        "description": "",
        "date": "",
        "collection": "",
    }
}) {

    const [detailsOpen, setDetailsOpen] = useState(false)

    return (<>
        <HeaderModal open={detailsOpen} setOpen={setDetailsOpen} image={image} key={image.file} />
        <Button style={{ width: '100%' }} onClick={()=>{setDetailsOpen(true)}}>
            <img src={`/headers/${image.collection}/cropped/${image.file}`} alt={image.name}
                style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
        </Button>
    </>)

}