import { CircularProgress, Grid } from "@mui/material";
import { useState } from "react";
import ElevatedSection from "../../../section/ElevatedSection";
import PhotosCollectionImageCard from "./PhotosCollectionImageCard";

export default function PhotosCollectionPane({
    Vertical = false,
    collection = "",
    name = "",
    children
}) {

    const [index, setIndex] = useState([
        {
            "file": "",
            "name": "",
            "description": "",
            "date": ""
        }
    ])

    const [loading, setLoading] = useState(false)
    const [ready, setReady] = useState(false)

    if (!ready && !loading) {
        setLoading(true)
        fetch('/headers/' + collection + '/index.json')
            .then(response => response.json())
            .then(data => {
                setIndex(data)
                setLoading(false)
                setReady(true)
            })
    }

    return (<>
        <ElevatedSection title={name}>
            {children}
            {
                !ready
                    ? <div style={{ textAlign: 'center' }}><CircularProgress /></div>
                    : <Grid container spacing={2}>
                        {index.map(a => (
                            <Grid item xs={Vertical ? 12 : 6}>
                                <PhotosCollectionImageCard collection={collection} image={{collection:collection, ...a}}/>
                            </Grid>
                        ))
                        }
                    </Grid>
            }
        </ElevatedSection>
    </>)

}