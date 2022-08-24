import { Card, Divider, Link, Typography } from "@mui/material";


export default function VideoCard({
    title = '', children, ytCode=''
}) {

    return (
        <Card>
            <iframe width="100%" height="300px" src={`https://www.youtube.com/embed/${ytCode}`} title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {
                (title !== '' || children !== undefined) && <div style={{padding:'15px'}}>
                    {
                        title !== '' && <>
                            <Link href={`https://www.youtube.com/watch?v=${ytCode}`}><Typography fontFamily={'orbitron'} fontWeight='200'>{title}</Typography></Link>
                            <Divider style={{ marginBottom: '10px' }} />
                        </>
                    }
                    { children !== undefined && <> {children}</>}
                </div>
            }
        </Card>
    )

}