import { GitHub, Public } from "@mui/icons-material";
import { Card, Divider, Link, Typography } from "@mui/material";

export default function ProgramHeader({
    name='',
    site='',
    git=""
}){

    return(
        <Card style={{padding:'20px', marginBottom:'20px'}}>
            <table width='100%'>
                <tbody>
                    <tr>
                        <td width='100%'><Typography fontFamily={'orbitron'} fontWeight='400' fontSize={'20px'}>{name}</Typography></td>
                        <td width='0px'>{site!=='' && <Link color='secondary' href={site} style={{marginRight:'10px'}}><Public/></Link>}</td>
                        <td width='0px'>{git!=='' && <Link color='secondary' href={git}><GitHub/></Link>}</td>
                    </tr>
                </tbody>
            </table>
            <Divider/>
        </Card>
    )
    
}