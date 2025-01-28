import { Navigation } from "../components/Navigation/Navigation"
import { FrontSection } from "./sections/FrontSection"
import { CreativeStudioSection } from "./sections/CreativeStudioSection"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { AboutMeSection } from "./sections/AboutMeSection"
import { MyBookSection } from "./sections/MyBookSection"
import { WorkAndLifeSection } from "./sections/workandlife"
import { JournalSection } from "./sections/JournalSection"
import { TourismSection } from "./sections/TourismSection"
import { ContactSection } from "./sections/ContactSection"
export const Home = () => {

    const location = useLocation()

    useEffect(() => {
        const hash = location.hash

        if (!hash) return
        
        const element = document.querySelector(hash)
        if (element) element.scrollIntoView({behavior: "smooth"})
        
    },[location])

    return (
        <>
        <Navigation />
        <FrontSection />
        <AboutMeSection />
        <CreativeStudioSection />
        <MyBookSection />
        <WorkAndLifeSection />
        <JournalSection />
        <TourismSection />
        <ContactSection />
        </>
    )
}