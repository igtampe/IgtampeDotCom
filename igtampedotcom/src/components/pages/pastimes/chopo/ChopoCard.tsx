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
            <Card style={{ padding: '10px', width: '100%' }} elevation={5}>
                <div style={{display:"flex"}}>
                    <img src={`/pfp/${index}.png`} height='100px' style={{ height: '100px', marginRight: '5px' }} />
                    <div style={{flex:"1"}}>
                        <div style={{marginTop:"10px"}}>
                            <div style={{fontFamily:"orbitron", fontWeight:"800", fontSize:"1.2em"}} >
                                <RenderChopoName name={chopo?.name} />
                            </div> 
                        </div>
                        <div style={{marginTop:"10px"}}>
                            #{index} ({chopo?.date})
                        </div>
                    </div>
                </div>
            </Card>
        </Button></>)

}

function RenderChopoName({ name = "" }) {

    const splitName = name.split(' ')

    return (<>
        <div style={{marginBottom:"-10px"}}>{splitName[0]}</div>
        <div>{splitName[1]}</div>
    </>
    )

}