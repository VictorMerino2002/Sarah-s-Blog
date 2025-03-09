import { useEffect, useState } from "react"
import { getAllMagazine } from "../../api/magazineApi"
import { MagazineList } from "../../components/MagazineList"
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom"
import "./style/CreativeStudioSection.css"
import flower from "../../assets/creativestudio/flower.png"
import hand from "../../assets/creativestudio/hand.webp"
import moon from "../../assets/creativestudio/moon.webp"
import flowers from "../../assets/creativestudio/flowers.webp"

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
                <h2>
                    <span>ROMSIL</span>
                    Creative<b>Studio</b>
                    <img src={flower} alt="flower" className="flower"/>
                </h2>
                <img src={hand} alt="hand" className="hand"/>
                <img src={moon} alt="moon" className="moon"/>
                <h3 className="flowers-label">Expression of thought</h3>
                <img src={flowers} alt="flowers" className="flowers"/>
            </header>
            <MagazineList magazines={magzines.slice(0,10)} section={"magazines"}/>
            <Button variant={"main"} handleClick={() => navigate(url)}>See More</Button>
        </section>
    )
}