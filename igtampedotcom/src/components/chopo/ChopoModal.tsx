import { Dialog, DialogContent, Link, Typography } from "@mui/material";
import { Chopo } from "../../model/Chopo";

export default function ChopoModal(props : {
    open : boolean,
    showLink? : boolean,
    setOpen : (val:boolean)=>void,
    index : number,
    chopo : Chopo
}) {

    const {open,setOpen,showLink,index,chopo} = props

    return (
        <Dialog open={open} maxWidth='xs' fullWidth onClose={() => { setOpen(false) }}>
            <DialogContent>
                <div style={{display:"flex", width:"100%"}}>
                    <div style={{flex:"1", paddingTop:"10px"}}>
                        <Typography fontFamily={'Orbitron'} fontWeight={'800'} fontSize='17px'>{chopo?.name.toUpperCase()}</Typography>
                        <Typography sx={{ color: 'text.secondary', fontSize: 10, fontFamily: 'outfit' }}><i>
                            Chopo #{index} ({chopo?.date})
                        </i></Typography>
                    </div>
                    <img height='50em' src="/cursive.png" style={{marginLeft:"20px", marginBottom:"10px"}}/>
                </div>

                <hr />
                <div style={{ textAlign: 'center' }}>
                    <a href={`/pfp/${index}.png`} target="_blank" rel="noreferrer noopener">
                        <img alt={chopo?.alt} src={`/pfp/${index}.png`} width='100%' />
                    </a>
                </div>
                <hr />
                <div style={{ textAlign: 'center', marginTop:'10px'}}>
                    <div>{chopo?.description}</div>
                    <div style={{marginTop:"5px", height:"15px"}}>
                        {showLink && <Typography sx={{fontSize:12}}>See more Chopos on the secret <Link href='/pastimes/Chopo'>Chopo</Link> page</Typography>}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )


}