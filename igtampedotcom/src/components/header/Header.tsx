import { Card, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useEffect, useState } from "react";
import HeaderModal from "./HeaderModal";
import { HeaderImage } from "../../model/HeaderImage";
import useApi, { generateApi } from "../../hooks/useApi";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ChopoProfile from "../chopo/ChopoProfile";

function HeaderGreeting() {

    const [greeting, setGreeting] = useState(undefined as any as string);
    const [loading, setLoading] = useState(false);

    const AnyGreetings = ['Hello', 'Hi', 'Allo', 'Salutations', 'Greetings']
    const MorningGreetings = ['Good morning', 'Bonjour', 'Buenos Dias', 'Top o\' the morning to ya']
    const DayGreetings = ['Good Day', 'Bonjour', 'Buenas tardes']
    const EveningGreetings = ['Good evening', 'Bonsoir', 'Buenas tardes']

    //There are no night greetings because every night greeting isn't really a greeting it's a farewell.
    //Who the heck do you know that starts a midnight conversation like 'GOOD NIGHT MR. JOHNSON FAIR WEATHER WE'RE HAVING AIN'T IT?'

    //For funsies though let's jab at those late night people (AKA myself). These will only show up from 1-5 AM
    // const UltraLateNightGreetings = ['Bit late isn\'t it', 'Heading to bed soon', 'Maybe go to sleep soon', 'Isn\'t it past your bedtime', 'What now', 
    // 'What kind of late night transaction are you up to', 'Is this really necessary now'] 

    //We don't want to do ultra late night jabs on my professional website

    //Ripped from the MDN Web Docs
    function getRandomInt(max : number) { return Math.floor(Math.random() * max); }

    const GetGreetingFromCollection = (collection : string[]) => {

        //assume we already have the collection
        setGreeting(collection[getRandomInt(collection.length)])

    }

    //Any should contain an image that's usable at any time of day (like an interior or underground shot)

    if (!greeting && !loading) {

        //Flip a weighted coin to determine if to take from the any set or the time of day set
        //Unlike images, we favor more the any. 60% for Any

        //How do I comment a comment
        ////EXCEPT: if the current hour is after 1 and before 5 we jump straight to getting from ultra late night
        var hour = (new Date()).getHours();
        setLoading(true)

        var Any = getRandomInt(10) < 6;
        if (Any) { GetGreetingFromCollection(AnyGreetings); return; } else {
            //Unlike images, morning greetings go from 5 to 12 midday

            if (5 <= hour && hour < 12) { GetGreetingFromCollection(MorningGreetings); return; }

            //Day goes from 12 to 5
            if (12 <= hour && hour < 17) { GetGreetingFromCollection(DayGreetings); return; }

            //and evening for anything else
            GetGreetingFromCollection(EveningGreetings);

        }
    }

    return (
        <Typography fontSize='10px' style={{ textAlign: 'left' }}>
            {greeting ? `${greeting}!` : '...'}
        </Typography>
    );

}

export default function Header() {

    const [src, setSrc] = useState(undefined as any as string);
    const [image,setImage] = useState(undefined as any as HeaderImage)
    const [collection,setCollection] = useState("")
    const {verticalMode:Vertical} = useWindowDimensions();

    const headerImageAPI = useApi(generateApi<[HeaderImage]>((collection : string)=>{
        return {url:`/headers/${collection}/index.json`}
    }))

    const [detailsOpen, setDetailsOpen] = useState(false)

    //Ripped from the MDN Web Docs
    function getRandomInt(max : number) { return Math.floor(Math.random() * max); }

    const GetImageFromCollection = (collection : 'any' | 'day' | 'sun' | 'night') => {
        headerImageAPI.fetch((data)=>{
            console.log('Fetched!')
                //data should be an array with length. Select a random one
                var img = data[getRandomInt(data.length)]

                //ok we should now have a random image.
                setCollection(collection)
                setImage(img)
                setSrc(`/headers/${collection}/cropped/${img.file}`)
        },undefined,collection)
    }

    //Any should contain an image that's usable at any time of day (like an interior or underground shot)
    const GetAny = () => { GetImageFromCollection('any') }

    const GetCurrent = () => {

        //Determine what the current time of day is
        var hour = (new Date()).getHours();

        //Any hour between 8 AM (8) to 5 PM (17) is Day
        //Any hour from 5 AM (5) to 8 AM (8) is Sunrise
        //Any hour from 5 PM (17) to 8 PM (20) is Sunset
        //Anything else is night

        if (8 <= hour && hour < 17) { GetImageFromCollection('day'); return; }
        if (5 <= hour && hour < 8) { GetImageFromCollection('sun'); return; }
        if (17 <= hour && hour < 20) { GetImageFromCollection('sun'); return; }
        GetImageFromCollection('night')

    }

    useEffect(()=>{
        console.log('Time to load an image!')

        //Flip a weighted coin to determine if to take from the any set or the time of day set
        //Let's do 70% time of day shots, 30% any shots

        var Any = getRandomInt(10) < 3;
        if (Any) { GetAny(); } else { GetCurrent(); }
    },[])

    const ready = src && src.length>0 && image


    return (
        <div style={{ marginBottom: '15px', position: 'relative' }}>
            <HeaderModal open={detailsOpen} setOpen={setDetailsOpen} image={image} collection={collection} showLink/>
            <img src={ready ? src : '/headers/placeholder.jpg'} alt={ready ? image.name : 'Getting...'} width='100%' /><br />
            {!Vertical && <>
                <div style={{ position: 'absolute', bottom: '10%', left: '16px', textShadow: '2px 2px 8px #000000' }}>
                    <Card style={{ padding: '10px' }} elevation={2}> <table> <tbody>
                        <tr>
                            <td rowSpan={2} style={{ verticalAlign: 'top' }}>
                                <div style={{ height: '0', paddingRight: '5px' }}> <ChopoProfile /> </div>
                            </td>
                            <td> <Typography fontFamily={'Orbitron'} fontWeight={'800'} fontSize='20px'>
                                Ignacio Tampe
                            </Typography> </td>
                        </tr>
                        <tr> <td> <HeaderGreeting /> </td> </tr>
                    </tbody> </table> </Card>
                </div>
                <div style={{ position: 'absolute', bottom: '16px', right: '16px', textShadow: '2px 2px 8px #000000' }}>
                    <Paper>
                        <Tooltip title={'Learn more about this image!'}>
                            <IconButton onClick={() => { setDetailsOpen(true) }}> <InfoOutlinedIcon /> </IconButton>
                        </Tooltip>
                    </Paper>
                </div> </>}
            {Vertical && <>
                <Card style={{ textAlign: 'left', padding: '10px' }}>
                    <table width='100%'><tbody><tr>
                        <td width='45px' style={{ verticalAlign: 'top' }}>
                            <div style={{ height: '0' }}> <ChopoProfile height='30px' /> </div>
                        </td>
                        <td>
                            <Typography fontFamily={'Orbitron'} fontWeight={'800'} fontSize='20px'>
                                Ignacio Tampe
                            </Typography>
                        </td>
                        <td style={{ textAlign: 'right', verticalAlign: 'top' }}>
                            <div style={{ height: '0' }}> <Tooltip title={'Learn more about the above image!'}>
                                <IconButton style={{marginTop:'-6px'}} onClick={() => { setDetailsOpen(true) }}>
                                    <InfoOutlinedIcon/>
                                </IconButton>
                            </Tooltip></div>
                        </td>
                    </tr></tbody></table>
                </Card>
            </>}
        </div>
    );

}
