import { CircularProgress, Grid } from "@mui/material";
import ElevatedSection from "../../../section/ElevatedSection";
import PhotosCollectionImageCard from "./PhotosCollectionImageCard";
import { HeaderImage } from "../../../../model/HeaderImage";
import useApi, { generateSimpleApi } from "../../../../hooks/useApi";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

export default function PhotosCollectionPane(props : {
    collection : string,
    name : string,
    children : any
}) {

    const {children,collection,name} = props
    const {verticalMode : Vertical} = useWindowDimensions();

    const getHeaderIndexAPI = useApi(generateSimpleApi<HeaderImage[]>(`/headers/${collection}/index.json`),true)
    
    return (<>
        <ElevatedSection title={name}>
            {children}
            {
                getHeaderIndexAPI.loading
                    ? <div style={{ textAlign: 'center' }}><CircularProgress /></div>
                    : <Grid container spacing={2}>
                        {getHeaderIndexAPI.data.map(a => (
                            <Grid item xs={Vertical ? 12 : 6}>
                                <PhotosCollectionImageCard collection={collection} image={a}/>
                            </Grid>
                        ))
                        }
                    </Grid>
            }
        </ElevatedSection>
    </>)

}