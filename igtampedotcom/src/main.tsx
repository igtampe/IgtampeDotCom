import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './index.css'
import { ChopoRouter } from './ChopoRouter';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as Element)

export function AppContainer(){
  return(<React.StrictMode>
    <RouterProvider router={ChopoRouter}/>
  </React.StrictMode>)
}

root.render(<AppContainer/>)