import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { PrivateRoute } from "./PrivateRoute";
import { MagazineIndex } from "../pages/MagazineIndex";
import { TourismIndex } from "../pages/TourismIndex";
import { JournalIndex } from "../pages/JournalIndex";

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="" element={<PrivateRoute element={<Home />} />} />
            <Route path="magazines" element={<PrivateRoute element={<MagazineIndex />} />} />
            <Route path="tourism" element={<PrivateRoute element={<TourismIndex />} />} />
            <Route path="journal" element={<PrivateRoute element={<JournalIndex />} />} />
        </Routes>
    );
};
