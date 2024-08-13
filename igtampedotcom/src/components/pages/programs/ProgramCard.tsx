import { Divider, Link } from "@mui/material";
import ImageCard from "../../imagecard/ImageCard";
import {Public, GitHub} from '@mui/icons-material'

export default function ProgramCard( props : {
    name: string,
    children? : any,
    link? : string,
    site?: string,
    git?: string,
    imgSrc: string
}){

    const {children,imgSrc,link,name,git,site} = props

    return(<ImageCard title={name} imgSrc={imgSrc} href={ link ? `/programs/${link}` : undefined}>
        {children}
        {
            (site || git ) &&
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