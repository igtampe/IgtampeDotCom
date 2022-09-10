import { Button, CircularProgress, Grid } from "@mui/material";
import { useState } from "react";
import ImageCard from "../../../imagecard/ImageCard";
import ElevatedSection from "../../../section/ElevatedSection";
import PhotosCollectionImageCard from "./PhotosCollectionImageCard";

export default function PhotosCollectionPane({
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

    // {
    //     "file":"FarmUS15.jpg",
    //     "name":"A Farm near US-15",
    //     "description":"A small farm near the rolling hills of the appalachians, and US Route 15, north of Frederick, MD",
    //     "date":"8/6/2018"
    // }

    return (<>
        <ElevatedSection title={name}>
            {children}
            {
                !ready
                    ? <div style={{ textAlign: 'center' }}><CircularProgress /></div>
                    : <Grid container spacing={2}>
                        {index.map(a => (
                            <Grid item xs={6}>
                                <PhotosCollectionImageCard collection={collection} image={{collection:collection, ...a}}/>
                            </Grid>
                        ))
                        }
                    </Grid>
            }
        </ElevatedSection>
    </>)

}