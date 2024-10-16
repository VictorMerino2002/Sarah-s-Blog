import { Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login"
import { Home } from "../pages/Home"
import { PostEdit } from "../pages/PostEdit"
import { TourismIndex } from "../pages/TourismIndex"
import { PrivateRoute } from "./PrivateRoute"
import { MagazineIndex } from "../pages/MagazineIndex"

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<PrivateRoute element={<Home />} />} />
            <Route path="/admin/tourism/new-post" element={<PrivateRoute element={<PostEdit />} />} />
            <Route path="/admin/tourism" element={<PrivateRoute element={<TourismIndex />} />} />
            <Route path="/admin/tourism/:id" element={<PrivateRoute element={<PostEdit />} />} />
            <Route path="/admin/magazines" element={<PrivateRoute element={<MagazineIndex />} />} />
        </Routes>
    )
}