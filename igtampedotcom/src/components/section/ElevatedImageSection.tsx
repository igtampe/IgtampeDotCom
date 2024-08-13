import { Card } from "@mui/material";
import ImageSection from "./ImageSection";

export default function ElevatedImageSection(props : {
    imgSrc : string, 
    imgDesc : string, 
    elevation? : number 
}){

    const {imgSrc,imgDesc} = props
    const elevation = props.elevation ?? 1

 return(
    <Card style={{padding:'20px'}} elevation={elevation}>
        <ImageSection imgSrc={imgSrc}/>
    </Card>
 )   

}