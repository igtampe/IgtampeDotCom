import { Divider, Typography } from "@mui/material";
import MenuList from './nav/MenuList.json'
import { HandleTinyLink } from "./nav/Navbar";

export default function Footer(){

  const BottomMenu=MenuList[MenuList.length-1].menuItems;
  
  return(
        <>
          <Divider style={{marginTop:'25px', marginBottom:'25px'}}/>
          <div style={{textAlign:"center"}}>
            <Typography fontSize='15px' style={{marginBottom:'5x'}}>©{new Date().getFullYear()} Igtampe, no rights reserved. </Typography>
            <div style={{marginTop:"10px"}}>{BottomMenu?.map(a=>(<HandleTinyLink key={a.title} link={a}/>))}</div>
          </div>
          <Divider style={{marginTop:'25px', marginBottom:'25px'}}/>
        </>
      )
    
}
