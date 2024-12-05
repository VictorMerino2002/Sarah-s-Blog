import { Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login"
import { Home } from "../pages/Home"
import { PrivateRoute } from "./PrivateRoute"
import { MagazineIndex } from "../pages/MagazineIndex"
import { Magazine } from "../pages/Magazine"

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<PrivateRoute element={<Home />} />} />
            <Route path="/admin/magazines" element={<PrivateRoute element={<MagazineIndex />} />} />
            <Route path="/magazines/:id" element={<PrivateRoute element={<Magazine />} />} />
        </Routes>
    )
}