import { Card, Divider, Link, Typography } from "@mui/material";


export default function ImageCard(props: {
    imgSrc: string,
    title?: string,
    children?: any,
    href?: string,
    elevation?: number
    objectPosition?: string
}) {

    const { children, href, imgSrc, title, objectPosition } = props
    const elevation = props.elevation ?? 1

    return (
        <Card elevation={elevation}>
            {href
                ? <img style={{ width: '100%', height: '100%', maxHeight: '200px', objectFit: 'cover', objectPosition: objectPosition }} src={imgSrc} />
                : <a href={href}><img style={{ width: '100%', height: '100%', maxHeight: '200px', objectFit: 'cover', objectPosition: objectPosition }} src={imgSrc} /></a>
            }

            {(title || children) && <div style={{ padding: '15px' }}>
                {title && <>
                    {href
                        ? <Link href={href}><Typography fontFamily='orbitron' fontWeight='200'>{title}</Typography></Link>
                        : <Typography fontFamily='orbitron' fontWeight='200'>{title}</Typography>
                    }
                    <Divider style={{ marginBottom: '10px' }} />
                </>
                }
                {children}
            </div>
            }
        </Card>
    )

}