import { Navigation } from "../components/Navigation/Navigation"
import { FrontSection } from "./sections/FrontSection"
import { MyBookSection } from "./sections/MyBookSection"
import { CreativeStudioSection } from "./sections/CreativeStudioSection"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
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
        <Navigation activeTab={"tab1"} />
        <FrontSection />
        <MyBookSection />
        <CreativeStudioSection />
        </>
    )
}