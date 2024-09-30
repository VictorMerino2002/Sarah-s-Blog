import { Navigation } from "../components/Navigation"
import { FrontPage } from "./sections/FrontPage"
import { TourismPage } from  "./sections/TourismPage"
export const Home = () => {

    return (
        <>
        <Navigation activeTab={"tab1"} />
        <FrontPage />
        <TourismPage />
        </>
    )
}