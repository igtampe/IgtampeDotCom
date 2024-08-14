import { Card, Grid, IconButton, Link, Typography } from "@mui/material";
import {
    Home, Construction, MultilineChart,
    Photo, MovieCreation, GitHub, Twitter,
    LinkedIn, Article, ExpandMore, Instagram
} from '@mui/icons-material'
import { useState } from "react";
import MenuItems from './MenuList.json'
import useWindowDimensions from "../../hooks/useWindowDimensions";

class NavBarLink {
    public constructor(
        public title?:string,
        public icon?:string,
        public href?: string,
        public description?:string,
    ){}
}

class NavBarMenuItem {
    public constructor(
        public title?:string,
        public description?:string,
        public icon?:string,
        public link? : boolean,
        public href?:string,
        public menu?: boolean,
        public menuItems? : NavBarLink[]
    ){}
}

function HandleLink(props : { link : NavBarLink}) {

    const {link} = props

    return (
        <Link title={link.description} href={link.href} style={{ color: 'white' }}>
            <div style={{display:"flex", padding:"2px"}}>
                <div style={{width:"20px", marginRight:"10px"}}><HandleImage image={link.icon ?? ""} /></div>
                <div style={{flex:"1"}}>{link.title}</div>
            </div>
        </Link>

    )
}

export function HandleTinyLink(props:{link:NavBarLink}) {
    
    const {link} = props

    return (<>{' '}
            <Link title={link.description} href={link.href} style={{ color: 'white' }}>
                <HandleImage image={link.icon ?? ""} />
            </Link>
        {' '}</>
    )
}

function HandleHeader (props : {
    menuItem : NavBarMenuItem
    noLink?:boolean
}) {
    
    const {menuItem, noLink} = props;

    return (<Typography fontFamily={'orbitron'} fontWeight={'200'}>
        {
            !menuItem.link || noLink
                ? <div style={{marginTop:"2px"}}>{menuItem.title}</div>
                : <HandleLink link={menuItem} /> 
        }
    </Typography>)
}

function HandleImage(props : { image : string }) {

    const {image} = props;

    if (image.toLowerCase().startsWith('material:')) {
        //Process the material icon
        switch (image.toLowerCase().substring(9)) {
            case 'home':
                return (<Home />)
            case 'construction':
                return (<Construction />)
            case 'multilinechart':
                return (<MultilineChart />)
            case 'photo':
                return (<Photo />)
            case 'moviecreation':
                return (<MovieCreation />)
            case 'github':
                return (<GitHub />)
            case 'twitter':
                return (<Twitter />)
            case 'instagram':
                return (<Instagram />)
            case 'linkedin':
                return (<LinkedIn />)
            case 'article':
                return (<Article />)
            default:
                return (<></>)
        }
    } else {
        return (<img src={image} height='20px' width='20px' />)
    }
}

export default function Navbar() {

    const {verticalMode : Vertical} = useWindowDimensions();

    const [menuOpen, setMenuOpen] = useState(false)
    
    const verticalTransition = "max-height 0.3s ease, opacity 0.3s ease";

    // Vertical Navbar
    if(Vertical){
        return <Card style={{padding:"10px"}}>
            <div>
                <IconButton onClick={() => { setMenuOpen(!menuOpen) }}><ExpandMore style={!menuOpen ? {} : { transform: 'rotate(180deg)' }} /></IconButton>
            </div>
            <div style={menuOpen 
                ? {textAlign:"left", maxHeight:"880px", opacity:100,transition:verticalTransition}
                : {textAlign:"left", maxHeight:"0px", opacity:0, transition:verticalTransition}
            }>
                {MenuItems.map(menuItem=>{
                    return <div style={{padding:"10px 20px"}}>
                        <HandleHeader menuItem={menuItem}/>
                        {menuItem.menuItems && <hr/>}
                        <Grid container>
                            {menuItem.menuItems?.map(subItem=><Grid xs={6}>
                                <HandleLink link={subItem}/>
                            </Grid>)}
                        </Grid>
                    </div>
                })}
            </div>
        </Card>
    }

    return (<Card style={{ padding: '10px' }}>
        <div style={{display:"flex"}}>
            {MenuItems.map(a => <HoverMenu menuItem={a}/>)}
        </div>            
    </Card>)
}

function HoverMenu(props:{
    menuItem : NavBarMenuItem
}){
    const {menuItem} = props
    const [hoverButton,setHoverButton] = useState(false)
    const [hoverMenu, setHoverMenu] = useState(false)
    const menuOpen = hoverButton || hoverMenu
    if(!menuItem.menuItems){
        return <div style={{marginRight:"20px"}}>
            <HandleHeader menuItem={menuItem} />
        </div>
    }

    const twoCols = (menuItem.menuItems?.length ?? 0) > 6;

    return <div style={{marginRight:"20px"}} onMouseEnter={()=>setHoverButton(true)} onMouseLeave={()=>setHoverButton(false)}>
        <HandleHeader menuItem={menuItem} />
        <Card elevation={5} style={
            {position:"absolute", maxHeight:menuOpen ? "400px" : "0px", width: twoCols ? "400px" : "200px",
                overflowX:"hidden", zIndex:menuOpen ? 20 : 19,
                transition:"max-height 0.5s ease", 
            }
        } onMouseEnter={()=>setHoverMenu(true)} onMouseLeave={()=>setHoverMenu(false)}>
            <div style={{padding:"20px", textAlign:"left"}}>
                <Grid container>
                    {menuItem.menuItems?.map(subItem=><Grid xs={ twoCols ? 6 : 12}>
                        <HandleLink link={subItem}/>
                    </Grid>)}
                </Grid>
            </div>
        </Card>
    </div>
}