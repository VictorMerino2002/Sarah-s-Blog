import { useEffect, useState } from "react"
import { JournalList } from "../../components/JournalList"
import { Button } from "../../components/Button"
import { getAllMagazine } from "../../api/journalApi"
import candle from "../../assets/journal/candle.webp"
import page1 from "../../assets/journal/page-1.webp"
import page2 from "../../assets/journal/page-2.png"
import page3 from "../../assets/journal/page-3.png"
import "./style/JournalSection.css"
import { useNavigate } from "react-router-dom"

export const JournalSection = () => {

    const [magazines, setMagazines] = useState([])

    useEffect(() => {
        getAllMagazine()
        .then(data => setMagazines(data.data.reverse()))
    },[])

    const navigate = useNavigate()

    const url = window.location.pathname.includes("admin") ? "/admin/journal" : "/journal"

    return (
        <section id="journal">
            <header>
                <h2>Journal</h2>
                <p>you’ve now stepped into the never-
                ending rabbit hole</p>
            </header>

            <div className="magazine-container">
                <JournalList magazines={magazines.slice(0,3)}/>
                <Button variant={"main"} handleClick={() => navigate(url)}>See more</Button>
            </div>

            <img src={candle} alt="candle" className="candle"/>
            <img src={page1} alt="page" className="page-1"/>
            <img src={page2} alt="page" className="page-2"/>
            <img src={page3} alt="page" className="page-3"/>
        </section>
    )
}