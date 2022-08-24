import { Card } from "@mui/material";


export default function BigImageCard({
    imgSrc = '', children, href = ""
}) {

    return (
        <Card>
            {
                href === ""
                    ? <img style={{ width: '100%', objectFit: 'cover' }} src={imgSrc} />
                    : <a href={href}><img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={imgSrc} /></a>
            }
            {(children !== undefined) && <div style={{ padding: '15px' }}>{children}</div>}
        </Card>
    )

}