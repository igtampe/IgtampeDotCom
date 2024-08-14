import { Divider, Typography } from "@mui/material";

export default function Section(props : {
    title? : string,
    children : any,
    style? : React.CSSProperties
}){

    const {title, children, style} = props

 return(
    <div style={style}>
        {title && title!=="" &&<>
            <Typography fontFamily='Orbitron' fontWeight='800' fontSize='20px'>{title}</Typography>
            <Divider style={{marginBottom:'20px'}}/>
        </>}
        {children}
    </div>
 )   

}