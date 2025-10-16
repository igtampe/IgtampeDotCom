import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./components/pages/notfound/NotFoundPage";
import App from "./App";
import Home from "./components/pages/home/HomePage";
import VibePage from "./components/pages/programs/vibe/VibePage";
import NecoPage from "./components/pages/programs/neco/NecoPage";
import BasicRenderPage from "./components/pages/programs/basicrender/BasicRenderPage";
import ClothespinPage from "./components/pages/programs/clothespin/ClothespinPage";
import IredPage from "./components/pages/programs/ired/IredPage";
import AtlasPage from "./components/pages/programs/atlas/AtlasPage";
import InsoPage from "./components/pages/programs/inso/InsoPage";
import PSGPage from "./components/pages/programs/psg/PSGPage";
import SmokeSignalPage from "./components/pages/programs/smokesignal/SmokesignalPage";
import SwitchboardPage from "./components/pages/programs/switchboard/SwitchboardPage";
import ColloquorPage from "./components/pages/programs/colloquor/ColloquorPage";
import UMSATPage from "./components/pages/programs/umsat/UmsatPage";
import AirportBoardPage from "./components/pages/programs/airportboard/AirportBoardPage";
import JavaPage from "./components/pages/programs/java/JavaPage";
import UMSWebPage from "./components/pages/programs/umsweb/UMSWebPage";
import IgtampeDosPage from "./components/pages/programs/igtampedos/IgtampeDosPage";
import OmtatPage from "./components/pages/endeavors/omtat/OmtatPage";
import ArelecPage from "./components/pages/endeavors/arelec/ArelecPage";
import UMSPage from "./components/pages/pastimes/ums/UMSPage";
import ChopoPage from "./components/pages/pastimes/chopo/ChopoPage";
import GraphicsPage from "./components/pages/pastimes/graphics/GraphicsPage";
import PhotosPage from "./components/pages/pastimes/photos/PhotosPage";
import VideosPage from "./components/pages/pastimes/videos/VideosPage";
import AvocadoPage from "./components/pages/avocado/AvocadoPage";
import ChamomilePage from "./components/pages/programs/chamomile/ChamomilePage";

export const ChopoRouter = createBrowserRouter([{
    path: "/",
    element: <App />,
    //This is where we put the 404
    errorElement: <NotFoundPage />,
    children: [

        { path: '/', element: <Home /> },

        { path: '/Programs/Vibe', element: <VibePage /> },
        { path: '/Programs/Neco', element: <NecoPage /> },
        { path: '/Programs/BasicRender', element: <BasicRenderPage /> },
        { path: '/Programs/Clothespin', element: <ClothespinPage /> },
        { path: '/Programs/IRED', element: <IredPage /> },
        { path: '/Programs/Atlas', element: <AtlasPage /> },
        { path: '/Programs/INSO', element: <InsoPage /> },
        { path: '/Programs/PSG', element: <PSGPage /> },
        { path: '/Programs/SmokeSignal', element: <SmokeSignalPage /> },
        { path: '/Programs/Switchboard', element: <SwitchboardPage /> },
        { path: '/Programs/Colloquor', element: <ColloquorPage /> },
        { path: '/Programs/UMSAT', element: <UMSATPage /> },
        { path: '/Programs/AirportBoard', element: <AirportBoardPage /> },
        { path: '/Programs/Java', element: <JavaPage /> },
        { path: '/Programs/UMSWEB', element: <UMSWebPage /> },
        { path: '/Programs/IgtDos', element: <IgtampeDosPage /> },
        { path: '/Programs/Chamomile', element: <ChamomilePage /> },

        { path: '/Endeavors/OMTAT', element: <OmtatPage /> },
        { path: '/Endeavors/ARElec', element: <ArelecPage /> },

        { path: '/Pastimes/UMS', element: <UMSPage /> },
        { path: '/Pastimes/Chopo', element: <ChopoPage /> },
        { path: '/Pastimes/Graphics', element: <GraphicsPage /> },
        { path: '/Pastimes/Photos', element: <PhotosPage /> },
        { path: '/Pastimes/Videos', element: <VideosPage /> },

        { path: '/Avocado', element: <AvocadoPage /> },
        { path: '/🥑', element: <AvocadoPage /> },
    ]


}])