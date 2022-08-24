import { Divider, Typography } from "@mui/material";

export default function Footer(){

    return(
        <>
          <Divider style={{marginTop:'25px', marginBottom:'25px'}}/>
          <Typography textAlign={'center'} color={'gray'} fontSize={'15px'} style={{marginBottom:'5x'}}>
                ©2022 Igtampe, no rights reserved. 
                Built using ReactJS. 
                See the <a href='https://www.github.com/igtampe/igtampedotcom' style={{color:"gray"}}>Github</a>
          </Typography>
        </>
      )
    
}