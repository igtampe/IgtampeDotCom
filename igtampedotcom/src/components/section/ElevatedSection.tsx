import { Card } from "@mui/material";
import Section from "./Section";

export default function ElevatedSection(props :{
    title? : string, 
    elevation? : number,
    children? : any
}){

    const {title, children} = props
    const elevation = props.elevation ?? 1

 return(
    <Card style={{padding:'20px', marginBottom:'20px'}} elevation={elevation}>
        <Section title={title}>
            {children}
        </Section>
    </Card>
 )   

}