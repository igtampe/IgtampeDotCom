import { useEffect, useState } from "react";

export default function ChopoProfile(
    {
        height='50px'
    }
){

    const defaultURL = '/logo512.png'
    //This holds the image
    const [pfpSrc, setPfpSrc] = useState(defaultURL)
    
    useEffect(()=>{
        if(pfpSrc!==defaultURL){return}
        //Determine what pfp to use
        fetch('/pfp/index.json')
        .then((response)=>response.json())
        .then((data)=>{
            //get latest
            const latest = data.latest
            setPfpSrc(`/pfp/${latest}.png`)
        })
    })

    return(
        <>
            <img src={pfpSrc} alt='Current profile for Ignacio' height={height}/>
            <img src={'/bar.png'} alt='decorative bar' height={height}/>
        </>
    )

}