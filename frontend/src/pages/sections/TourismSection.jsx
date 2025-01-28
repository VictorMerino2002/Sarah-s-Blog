import { useEffect, useState } from "react"
import { TourismList } from "../../components/TourismList"
import { Button } from "../../components/Button"
import { getAllMagazine } from "../../api/tourismApi"
import caset from "../../assets/tourism/caset.png"
import fish from "../../assets/tourism/fish.png"
import "./style/TourismSection.css"
import { useNavigate } from "react-router-dom"

export const TourismSection = () => {

    const [magazines, setMagazines] = useState([])

    useEffect(() => {
        getAllMagazine()
        .then(data => setMagazines(data.data.reverse()))
    },[])

    const navigate = useNavigate()

    const url = window.location.pathname.includes("admin") ? "/admin/tourism" : "/tourism"

    return (
        <section id="tourism">
            <div className="text">
                <h2>Tourism</h2>
                <p>I’m studying Tourism in college because I love getting to know people, stories, and cultures—but let’s be real, I’m mostly here for the food. My dream is to pack my dog into a caravan and spend three months in Iceland pretending I’m at peace with life. Until that happens, I’ll keep things interesting by sharing essays and projects from college (i won’t forget about the trips)—because who doesn’t love a little homework, right?</p>
                <span>F*ck the free world</span>
                <img src={caset} alt="" className="caset"/>
            </div>

            <img src={fish} alt="" className="fish"/>
            <div className="magazine-container">
                <TourismList magazines={magazines.slice(0,1)} />
                <Button variant={"main"} handleClick={() => navigate(url)}>See more</Button>
            </div>
        </section>
    )
}