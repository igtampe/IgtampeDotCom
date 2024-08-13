import './App.css'
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import Footer from './components/Footer';

export default function App() {

  
  return (
    <Outlet/>  
  )
}