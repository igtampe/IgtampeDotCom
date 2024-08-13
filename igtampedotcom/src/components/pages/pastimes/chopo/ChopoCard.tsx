import { Button, Card, Typography } from "@mui/material";
import { useState } from "react";
import ChopoModal from "../../../chopo/ChopoModal";
import { Chopo } from "../../../../model/Chopo";

export default function ChopoCard(props:{
    chopo:Chopo
    index: number
}) {

    const {chopo, index} = props
    const [open, setOpen] = useState(false);

    return (<>
        <ChopoModal index={index} chopo={chopo} setOpen={setOpen} open={open} />
        <Button onClick={() => setOpen(true)} style={{ width: '310px' }}>
            <Card style={{ padding: '10px', width: '100%' }} elevation={5}> <table style={{width:'100%'}}> <tbody>
                <tr>
                    <td rowSpan={2} style={{ verticalAlign: 'top', width:'0'}}>
                        <div style={{ height: '100px', paddingRight: '5px' }}> <img src={`/pfp/${index}.png`} height='100px' /> </div>
                    </td>
                    <td> <Typography fontFamily={'Orbitron'} fontWeight={'800'} fontSize='17px'>
                        <RenderChopoName name={chopo.name}/>
                    </Typography> </td>
                </tr>
                <tr> <td> #{index} ({chopo.date})</td> </tr>
            </tbody> </table> </Card>
        </Button></>)

}

function RenderChopoName({ name = "" }) {

    const sname = name.split(' ')

    return (<>
        {sname[0]}
        <br />
        {sname[1]}
    </>
    )

}