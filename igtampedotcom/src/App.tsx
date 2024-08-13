import './App.css'
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import Footer from './components/Footer';

export default function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#FF6A00', },
      secondary: { main: '#7F006E', },
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth='xl'>
        <Header/>
        <Navbar/>
        <div style={{paddingTop:'20px', textAlign:'left'}}>
          <Outlet/>
        </div>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}