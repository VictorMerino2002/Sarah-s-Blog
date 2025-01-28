import { useEffect, useState } from "react"
import { getAllMagazine } from "../../api/magazineApi"
import { MagazineList } from "../../components/MagazineList"
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom"
import "./style/CreativeStudioSection.css"
import eagel from "../../assets/creativestudio/eagel.webp"
import hand from "../../assets/creativestudio/hand.webp"

export const CreativeStudioSection = () => {

    const [magzines, setMagazines] = useState([])
    useEffect(() => {
        getAllMagazine()
        .then(data => setMagazines(data.data.reverse()))
    },[])

    const navigate = useNavigate()

    const url = window.location.pathname.includes("admin") ? "/admin/magazines" : "/magazines"

    return (
        <section id="creativestudio">
            <header>
                <img className="eagel" src={eagel} alt="eagel" />
                <h2>Creative <b>Studio</b></h2>
                <span>Expression of thought</span>
                <img className="hand" src={hand} alt="hand" />
            </header>
            <MagazineList magazines={magzines.slice(0,10)} section={"magazines"}/>
            <Button variant={"main"} handleClick={() => navigate(url)}>See More</Button>
        </section>
    )
}