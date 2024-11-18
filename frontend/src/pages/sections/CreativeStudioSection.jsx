import { useEffect, useState } from "react"
import { getAllMagazine } from "../../api/magazineApi"
import { MagazineList } from "../../components/MagazineList"
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom"
import "./style/CreativeStudioSection.css"

export const CreativeStudioSection = () => {

    const [magzines, setMagazines] = useState([])
    useEffect(() => {
        getAllMagazine()
        .then(data => setMagazines(data.data))
    },[])

    const navigate = useNavigate()

    return (
        <section id="creativestudio">
            <h2>Creative Studio</h2>
            <MagazineList magazines={magzines} />
            <Button variant={"main"} handleClick={() => navigate("/admin/magazines")}>See More</Button>
        </section>
    )
}