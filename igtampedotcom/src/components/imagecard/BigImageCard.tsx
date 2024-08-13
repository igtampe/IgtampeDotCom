import { Card } from "@mui/material";


export default function BigImageCard(props : {
    imgSrc : string, 
    children? : any, 
    href? : string,
}) {

    const {imgSrc,children,href} = props

    return (
        <Card>
            {
                href
                    ? <img style={{ width: '100%', objectFit: 'cover' }} src={imgSrc} />
                    : <a href={href}><img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={imgSrc} /></a>
            }
            {(children) && <div style={{ padding: '15px' }}>{children}</div>}
        </Card>
    )

}