import { Dialog, DialogActions, DialogContent, Link, Typography } from "@mui/material";

export default function HeaderModal({
    open=false,
    showLink = false,
    setOpen,
    image= {
        "file":"",
        "name":"",
        "description":"",
        "date":"",
        "collection":"",
    }
}) {

    return(
        <Dialog open={open} maxWidth='md' fullWidth onClose={()=>{setOpen(false)}}>
            <DialogContent>
                <div style={{textAlign:'center'}}>
                    <a href={`/headers/${image.collection}/${image.file}`} target="_blank" rel="noreferrer noopener">
                        <img src={`/headers/${image.collection}/${image.file}`} width='100%'/>
                    </a>
                </div>
                <hr/>
                <div style={{textAlign:'center'}}>
                <b>{image.name}</b>
                <Typography sx={{color:'text.secondary', fontSize:10, fontFamily:'outfit', textAlign:'center' }}><i>
                Taken on {image.date}
                    </i></Typography>
                    <br/>
                    {image.description}
                    {showLink && <>
                        <br/>
                        <Typography sx={{fontSize:12}}>See more photos on the <Link href='/Passtimes/Photos'>photos</Link> page</Typography>
                    </>}
                </div>
            </DialogContent>
            <DialogActions>
            </DialogActions>
        </Dialog>
    )


}