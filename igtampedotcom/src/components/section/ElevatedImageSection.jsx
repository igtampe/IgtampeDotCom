import { Card } from "@mui/material";
import ImageSection from "./ImageSection";

export default function ElevatedImageSection({imgSrc='', imgDesc='', elevation=1}){

 return(
    <Card style={{padding:'20px'}} elevation={elevation}>
        <ImageSection imgSrc={imgSrc} imgDesc={imgDesc}/>
    </Card>
 )   

}