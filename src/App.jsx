import { BrowserRouter } from "react-router-dom"

import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Principal_page from "./Pages/Principal_page"

import AppRoutes from "./Routes/AppRoutes"


function App() {

    return (
    <BrowserRouter>
        <Header/>
        <Navbar/>
        <Principal_page/>
        <Footer/>

    </BrowserRouter>
    )
}

export default App
