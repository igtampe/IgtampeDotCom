import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './index.css'
import { ChopoRouter } from './ChopoRouter';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import Footer from './components/Footer';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as Element)

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#FF6A00', },
    secondary: { main: '#7F006E', },
  },
})

export function AppContainer(){
  return(
  
  <React.StrictMode>
  <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth='xl'>
        <Header/>
        <Navbar/>
        <div style={{paddingTop:'20px', textAlign:'left'}}>
          <RouterProvider router={ChopoRouter}/>          
        </div>
        <Footer/>
      </Container>
    </ThemeProvider>

  </React.StrictMode>)
}

root.render(<AppContainer/>)