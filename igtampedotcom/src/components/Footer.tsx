import { Divider, Typography } from "@mui/material";
import MenuList from './nav/MenuList.json'
import { HandleTinyLink } from "./nav/Navbar";

export default function Footer(){

  const BottomMenu=MenuList[MenuList.length-1].menuItems;
  
  return(
        <>
          <Divider style={{marginTop:'25px', marginBottom:'25px'}}/>
          <Typography textAlign={'center'} color={'gray'} fontSize={'15px'} style={{marginBottom:'5x'}}>
                ©2023 Igtampe, no rights reserved.<br/>
                {BottomMenu?.map(a=>(<HandleTinyLink link={a}/>))}
          </Typography>
          <Divider style={{marginTop:'25px', marginBottom:'25px'}}/>
        </>
      )
    
}
