import { useState } from "react";
import { Chopo } from "../../model/Chopo";
import useApi, { generateSimpleApi } from "../../hooks/useApi";
import ChopoModal from "./ChopoModal";

export default function ChopoProfile(props:{
    height?:string
}) {

    const {height} = props

    const defaultURL = '/logo512.png'
    //This holds the image
    const [pfpSrc, setPfpSrc] = useState(defaultURL)
    const [index, setIndex] = useState(-1)
    const [chopo, setChopo] = useState(undefined as any as Chopo)
    
    const chopoApi = useApi(generateSimpleApi<[Chopo]>("/pfp/index.json"),true,(val:Chopo[])=>{
        const latestIndex = val.length-1
        const latest = val[latestIndex]

        setIndex(latestIndex)
        setPfpSrc(`/pfp/${latestIndex}.png`)
        setChopo(latest)
    })

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <ChopoModal index={index} chopo={chopo} setOpen={setModalOpen} open={modalOpen} showLink/>
            <div style={{display:"flex"}} onClick={chopoApi.loading ? undefined : ()=>setModalOpen(true)}>
                <img src={pfpSrc} alt='Current profile for Ignacio' height={height ?? "50px"} />
                <img src={'/bar.png'} alt='decorative bar' height={height ?? "50px"} />
            </div>
        </>
    )

}