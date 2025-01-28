import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { MagazineIndex } from "../pages/User/MagazineIndex"
import { TourismIndex } from "../pages/User/TourismIndex"
import { JournalIndex } from "../pages/User/JournalIndex"
import { Subscription } from "../pages/Subscription"
import { Unsubsribe } from "../pages/Unsubscibe"

export const UserRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/magazines" element={<MagazineIndex />} />
            <Route path="/tourism" element={<TourismIndex />} />
            <Route path="/journal" element={<JournalIndex />} />
            <Route path="/subscribe" element={<Subscription />} />
            <Route path="/unsubscribe" element={<Unsubsribe />} />
        </Routes>
    )
}