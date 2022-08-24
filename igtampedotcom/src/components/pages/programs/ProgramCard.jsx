import { Divider, Link } from "@mui/material";
import ImageCard from "../../imagecard/ImageCard";
import {Public, GitHub} from '@mui/icons-material'

export default function ProgramCard({
    name='',
    children,
    link='',
    site='',
    git='',
    imgSrc=''
}){

    return(<ImageCard title={name} imgSrc={imgSrc} href={ link==="" ? undefined : `/programs/${link}`}>
        <p>{children}</p>
        {
            (site!=='' || git !=='') &&
            <>
                <Divider style={{marginTop:'10px', marginBottom:'10px' }}/>
                <div style={{textAlign:'right'}}>
                    {site!=='' && <Link color='secondary' href={site}><Public/></Link>}
                    {' '}{' '}
                    {git!=='' && <Link color='secondary' href={git}><GitHub/></Link>}
                </div>    
            </>
        }
        

    </ImageCard>)


}