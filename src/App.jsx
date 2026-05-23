import { BrowserRouter } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import AppRoutes from "./Routes/AppRoutes"

import './App.css'


function App() {

    return (
    <>
        <Header/>
        <Navbar/>
        <AppRoutes/>
        <Footer/>


    </>
    )
}

export default App
