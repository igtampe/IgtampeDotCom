import { Card, Divider, IconButton, Link, Tooltip, Typography } from "@mui/material";
import {
    Home, Construction, MultilineChart,
    Photo, MovieCreation, GitHub, Twitter,
    LinkedIn, Article, ExpandMore
} from '@mui/icons-material'
import { useState } from "react";
import { useHistory } from "react-router-dom";
import MenuItems from './MenuList.json'

function HandleLink({ link = {
    title: '', description: '',
    href: '', icon: ''
}
}) {

    const history = useHistory()

    const isExternal = link.href.toLowerCase().startsWith('https://') || link.href.toLowerCase().endsWith('.pdf')

    const navto = () => { 

        if(isExternal) {return;}

        history.push(link.href) 
    }

    const HandleImage = ({ image = "" }) => {
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

    return (
        <Link title={link.description} href={link.href} style={{ color: 'white' }}><table> <tbody> <tr>
            <td> <HandleImage image={link.icon} /> </td>
            <td> {link.title}</td>
        </tr></tbody></table></Link>

    )

}

export default function Navbar({
    Vertical = true
}) {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    const HandleHeader = ({
        menuItem = {
            title: '', description: '',
            link: false, menu: false,
            href: '/', icon: ''
        }
    }) => {
        return(<Typography fontFamily={'orbitron'} fontWeight={'200'}>
            {
                menuItem.link 
                ? <HandleLink link={menuItem} />
                : <>{menuItem.title}</>
            }
        </Typography>)
    }

    const HandleMenuItems = ({
        menuItem = {
            menu: false,
            menuItems: []
        }
    }) => {
        if (!menuItem.menu) { return (<></>) }
        return (
            <table>
                <tbody>
                    {menuItem.menuItems.map(a => (
                        <tr><td><HandleLink link={a} /></td></tr>
                    ))}
                </tbody>
            </table>
        )
    }

    const cellwidth = 100.0 / (MenuItems.length + 1)

    return (<Card style={{ padding: '10px' }}>
        <table width={'100%'} style={{ textAlign: 'left' }}>
            <thead>
                <tr>
                    {Vertical
                        ? <>
                            <td style={{ textAlign: 'center' }} width={`100%`}>
                                <IconButton onClick={() => { toggleMenuOpen() }}><ExpandMore style={!menuOpen ? {} : { transform: 'rotate(180deg)' }} /></IconButton>
                            </td>
                        </>
                        : <>
                            {MenuItems.map(a => (<td width={`${cellwidth}%`}>
                                <Link style={{color:'white'}} onClick={()=>{
                                    if(!a.link || menuOpen) {toggleMenuOpen()}
                                }} ><HandleHeader menuItem={a} /></Link>
                            </td>))}
                            <td style={{ textAlign: 'right' }} width={`${cellwidth}%`}>
                                <IconButton onClick={() => { toggleMenuOpen() }}><ExpandMore style={!menuOpen ? {} : { transform: 'rotate(180deg)' }} /></IconButton>
                            </td></>
                    }
                </tr>
            </thead>
            {menuOpen &&
                <tbody>
                    {Vertical
                        ? <>
                        {MenuItems.map(a => (<tr style={{ verticalAlign: 'top' }}>
                                {
                                    a.title==="" 
                                    ?<></>
                                    :<div style={{marginBottom:'20px', marginTop:'20px'}}>
                                    <HandleHeader menuItem={a}/>
                                    <Divider/></div>
                                    
                                }
                                <HandleMenuItems menuItem={a} />
                        </tr>))}</>
                        : <tr>
                            {MenuItems.map(a => (<td style={{ verticalAlign: 'top' }}>
                                <HandleMenuItems menuItem={a} />
                            </td>))}
                        </tr>
                    }
                </tbody>
            }
        </table>
    </Card>)
}