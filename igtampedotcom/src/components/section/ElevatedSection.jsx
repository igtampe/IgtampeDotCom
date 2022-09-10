import { Card } from "@mui/material";
import Section from "./Section";

export default function ElevatedSection({
    title="", elevation=1,
    children}){

 return(
    <Card style={{padding:'20px', marginBottom:'20px'}} elevation={elevation}>
        <Section title={title} children={children}/>
    </Card>
 )   

}