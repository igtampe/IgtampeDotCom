import { Dialog, DialogActions, DialogContent, Link, Typography } from "@mui/material";

export default function ChopoModal({
    open = false,
    showLink = false,
    setOpen,
    chopo = {
        "index": 0,
        "name": "",
        "alt": "",
        "description": "",
        "date": ""
    }
}) {

    return (
        <Dialog open={open} maxWidth='xs' fullWidth onClose={() => { setOpen(false) }}>
            <DialogContent>
                <table width='100%'><tbody><tr>
                    <td>
                        <Typography fontFamily={'Orbitron'} fontWeight={'800'} fontSize='17px'>{chopo.name.toUpperCase()}</Typography>
                        <Typography sx={{ color: 'text.secondary', fontSize: 10, fontFamily: 'outfit' }}><i>
                            Chopo #{chopo.index} ({chopo.date})
                        </i></Typography>
                    </td>
                    <td style={{textAlign:'right'}}>
                        <img height='50em' src="/cursive.png"/>
                    </td>
                </tr></tbody></table>
                <hr />
                <div style={{ textAlign: 'center' }}>
                    <a href={`/pfp/${chopo.index}.png`} target="_blank" rel="noreferrer noopener">
                        <img alt={chopo.alt} src={`/pfp/${chopo.index}.png`} width='100%' />
                    </a>
                </div>
                <hr />
                <div style={{ textAlign: 'center', marginTop:'20px'}}>
                    {chopo.description}
                    {showLink && <>
                        <br/>
                        <Typography sx={{fontSize:12}}>See more Chopos on the secret <Link href='/Passtimes/Chopo'>Chopo</Link> page</Typography>
                    </>}
                </div>
            </DialogContent>
            <DialogActions>
            </DialogActions>
        </Dialog>
    )


}