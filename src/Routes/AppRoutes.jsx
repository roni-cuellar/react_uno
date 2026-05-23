import { Routes, Route } from "react-router-dom"

import Principal_page from "../Pages/Principal_page/Principal_page"
import Seccion_dos from "../Pages/Seccion_dos/Seccion_dos"

function AppRoutes() {
    return (
        <Routes>
        <Route path="/" element={<Principal_page />} />
        <Route path="/segunda" element={<Seccion_dos />} />
        </Routes>
    )
}

export default AppRoutes