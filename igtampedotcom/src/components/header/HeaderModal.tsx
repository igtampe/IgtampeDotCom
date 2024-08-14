import { Dialog, DialogActions, DialogContent, Link, Typography } from "@mui/material";
import { HeaderImage } from "../../model/HeaderImage";

export default function HeaderModal(props: {
    open?: boolean,
    showLink?: boolean,
    setOpen: (val: boolean) => void,
    collection: string,
    image: HeaderImage
}) {

    const { open, setOpen,
        collection, image, showLink } = props

    return (
        <Dialog open={open ?? false} maxWidth='md' fullWidth onClose={() => { setOpen(false) }}>
            <DialogContent>
                
                <div style={{ textAlign: 'center' }}>
                    <a href={`/headers/${collection}/${image?.file}`} target="_blank" rel="noreferrer noopener">
                        <img src={`/headers/${collection}/${image?.file}`} width='100%' />
                    </a>
                </div>

                <hr />
                
                <div style={{ textAlign: 'center' }}>
                    <div><b>{image?.name}</b></div>
                    <div>
                        <Typography sx={{ color: 'text.secondary', fontSize: 10, fontFamily: 'outfit', textAlign: 'center' }}><i>
                        Taken on {image?.date}
                        </i></Typography>
                    </div>
                    
                    <div style={{width:"75%", margin:"10px auto 0px"}}>
                        {image?.description}
                    </div>
                    
                    {showLink && <div style={{marginTop:"10px"}}>    
                        <Typography sx={{ fontSize: 12 }}>See more photos on the <Link href='/Pastimes/Photos'>photos</Link> page</Typography>
                    </div>}

                </div>
            </DialogContent>
        </Dialog>
    )


}