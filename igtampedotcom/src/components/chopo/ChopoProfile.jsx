import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import ChopoModal from "./ChopoModal";

export default function ChopoProfile(
    {
        height = '50px'
    }
) {

    const defaultURL = '/logo512.png'
    //This holds the image
    const [pfpSrc, setPfpSrc] = useState(defaultURL)
    const [chopo, setChopo] = useState({
        "index": 0,
        "name": "",
        "alt": "",
        "description": "",
        "date": ""
    })

    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        if (pfpSrc !== defaultURL) { return }
        //Determine what pfp to use
        fetch('/pfp/index.json')
            .then((response) => response.json())
            .then((data) => {
                //get latest
                const latest = data.latest
                setPfpSrc(`/pfp/${latest}.png`)
                setChopo(data.data[latest])
            })
    })

    return (
        <>
            <ChopoModal chopo={chopo} setOpen={setModalOpen} open={modalOpen} showLink/>
            <div onClick={()=>setModalOpen(true)}>
                <img src={pfpSrc} alt='Current profile for Ignacio' height={height} />
                <img src={'/bar.png'} alt='decorative bar' height={height} />
            </div>
        </>
    )

}