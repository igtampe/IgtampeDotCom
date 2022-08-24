import { Card } from "@mui/material";
import Section from "./Section";

export default function ElevatedSection({title="", children}){

 return(
    <Card style={{padding:'20px', marginBottom:'20px'}}>
        <Section title={title} children={children}/>
    </Card>
 )   

}