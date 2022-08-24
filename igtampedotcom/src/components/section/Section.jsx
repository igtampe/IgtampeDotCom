import { Divider, Typography } from "@mui/material";

export default function Section({
    title="",
    children
}){

 return(
    <>
        {title!=="" &&<>
            <Typography fontFamily={'Orbitron'} fontWeight={'800'} fontSize='20px'>{title}</Typography>
            <Divider style={{marginBottom:'20px'}}/>
        </>}
        {children}
    </>
 )   

}