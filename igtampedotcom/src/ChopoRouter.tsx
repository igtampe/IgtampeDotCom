import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./components/pages/notfound/NotFoundPage";
import App from "./App";

export const ChopoRouter = createBrowserRouter([{
    path:"",
    element:<App/>,
    //This is where we put the 404
    errorElement:<NotFoundPage/>,
    children: [
        
        { path:'/', element: <Home/> },

        { path:'/Programs/Vibe', element: <VibePage/> },
        { path:'/Programs/Neco', element: <NecoPage/> },
        { path:'/Programs/BasicRender', element: <BasicRenderPage/> },
        { path:'/Programs/Clothespin', element: <ClothespinPage/> },
        { path:'/Programs/IRED', element: <IredPage/> },
        { path:'/Programs/Atlas', element: <AtlasPage/> },
        { path:'/Programs/INSO', element: <InsoPage/> },
        { path:'/Programs/PSG', element: <PSGPage/> },
        { path:'/Programs/SmokeSignal', element: <SmokeSignalPage/> },
        { path:'/Programs/Switchboard', element: <SwitchboardPage/> },
        { path:'/Programs/Colloquor', element: <ColloquorPage/> },
        { path:'/Programs/UMSAT', element: <UMSATPage/> },
        { path:'/Programs/AirportBoard', element: <AirportBoardPage/> },
        { path:'/Programs/Java', element: <JavaPage/> },
        { path:'/Programs/UMSWEB', element: <UMSWebPage/> },
        { path:'/Programs/IgtDos', element: <IgtampeDosPage/> },

        { path:'/Endeavors/OMTAT', element: <OmtatPage/> },
        { path:'/Endeavors/ARElec', element: <ArelecPage/> },

        {/* pastimes */}

        { path:'/pastimes/UMS', element: <UMSPage/> },
        { path:'/pastimes/Chopo', element: <ChopoPage/> },
        { path:'/pastimes/Graphics', element: <GraphicsPage/> },
        { path:'/pastimes/Photos', element: <PhotosPage/> },
        { path:'/pastimes/Videos', element: <VideosPage/> },

        {/* Avocado */}
        { path:'/Avocado', element: <AvocadoPage/> },
        { path:'/🥑', element: <AvocadoPage/> },
    ]


}])