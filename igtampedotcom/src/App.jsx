import './App.css'
import useWindowDimensions from './hooks/useWindowDimensions';
import { Route, Switch } from 'react-router';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Home from './components/pages/home/HomePage';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Navbar from './components/nav/Navbar';
import VibePage from './components/pages/programs/vibe/VibePage';
import NecoPage from './components/pages/programs/neco/NecoPage';
import BasicRenderPage from './components/pages/programs/basicrender/BasicRenderPage';
import ClothespinPage from './components/pages/programs/clothespin/ClothespinPage';
import IredPage from './components/pages/programs/ired/IredPage';
import AtlasPage from './components/pages/programs/atlas/AtlasPage';
import InsoPage from './components/pages/programs/inso/InsoPage';
import PSGPage from './components/pages/programs/psg/PSGPage';
import SmokeSignalPage from './components/pages/programs/smokesignal/SmokesignalPage';
import SwitchboardPage from './components/pages/programs/switchboard/SwitchboardPage';
import ColloquorPage from './components/pages/programs/colloquor/ColloquorPage';
import UMSATPage from './components/pages/programs/umsat/UmsatPage';
import AirportBoardPage from './components/pages/programs/airportboard/AirportBoardPage';
import JavaPage from './components/pages/programs/java/JavaPage';
import OmtatPage from './components/pages/endeavors/omtat/OmtatPage';
import ArelecPage from './components/pages/endeavors/arelec/ArelecPage';
import UMSPage from './components/pages/passtimes/ums/UMSPage';
import GraphicsPage from './components/pages/passtimes/graphics/GraphicsPage';
import PhotosPage from './components/pages/passtimes/photos/PhotosPage';
import VideosPage from './components/pages/passtimes/videos/VideosPage';
import UMSWebPage from './components/pages/programs/umsweb/UMSWebPage';
import BatchPage from './components/pages/programs/batch/BatchPage';
import NotFoundPage from './components/pages/notfound/NotFoundPage';

export default function App() {

  const { width } = useWindowDimensions();
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#FF6A00', },
      secondary: { main: '#7F006E', },
    },
  })

  var Vertical = width < 900;

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth='xl'>
        <Header Vertical={Vertical} />
        <Navbar Vertical={Vertical} />

        <div style={{paddingTop:'20px', textAlign:'left'}}>

        <Switch>
        {/* The routes */}

        <Route exact path='/'><Home Vertical={Vertical}/></Route>

        {/* Programs */}

        <Route exact path='/Programs/Vibe'><VibePage Vertical={Vertical}/></Route>
        <Route exact path='/Programs/Neco'><NecoPage Vertical={Vertical}/></Route>
        <Route exact path='/Programs/BasicRender'><BasicRenderPage Vertical={Vertical}/></Route>
        <Route exact path='/Programs/Clothespin'><ClothespinPage Vertical={Vertical}/></Route>
        <Route exact path='/Programs/IRED'><IredPage Vertical={Vertical}/></Route>
        <Route exact path='/Programs/Atlas'><AtlasPage Vertical={Vertical}/></Route>
        <Route exact path='/Programs/INSO'><InsoPage Vertical={Vertical}/></Route>
        <Route exact path='/Programs/PSG'><PSGPage Vertical={Vertical}/></Route>
        <Route exact path='/Programs/SmokeSignal'><SmokeSignalPage Vertical={Vertical}/></Route>
        <Route exact path='/Programs/Switchboard'><SwitchboardPage Vertical={Vertical}/></Route>
        <Route exact path='/Programs/Colloquor'><ColloquorPage Vertical={Vertical}/></Route>
        <Route exact path='/Programs/UMSAT'><UMSATPage Vertical={Vertical}/></Route>
        <Route exact path='/Programs/AirportBoard'><AirportBoardPage Vertical={Vertical}/></Route>
        <Route exact path='/Programs/Java'><JavaPage Vertical={Vertical}/></Route>
        <Route exact path='/Programs/UMSWEB'><UMSWebPage Vertical={Vertical}/></Route>
        <Route exact path='/Programs/Batch'><BatchPage Vertical={Vertical}/></Route>

        {/* Endeavors */}

        <Route exact path='/Endeavors/OMTAT'><OmtatPage Vertical={Vertical}/></Route>
        <Route exact path='/Endeavors/ARElec'><ArelecPage Vertical={Vertical}/></Route>

        {/* Passtimes */}

        <Route exact path='/Passtimes/UMS'><UMSPage Vertical={Vertical}/></Route>
        <Route exact path='/Passtimes/Graphics'><GraphicsPage Vertical={Vertical}/></Route>
        <Route exact path='/Passtimes/Photos'><PhotosPage Vertical={Vertical}/></Route>
        <Route exact path='/Passtimes/Videos'><VideosPage Vertical={Vertical}/></Route>

        {/* The 404 Page */}
        
        <Route path="*"><NotFoundPage Vertical={Vertical}/></Route>

        </Switch>
        </div>
        
        
        <Footer />
      </Container>
    </ThemeProvider>
  )
}