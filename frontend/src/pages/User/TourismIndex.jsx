import { Navigation } from "../../components/Navigation/Navigation"
import { useEffect, useState } from "react"
import { getAllMagazine } from "../../api/tourismApi"
import "./../style/MagazineIndex.css"
import { TourismList } from "../../components/TourismList"

export const TourismIndex = () => {

    const [magazines, setMagazines] = useState([])

    useEffect(() => {
        getAllMagazine().then(data => setMagazines(data.data.reverse()))
    },[])


    return (
        <>
        <Navigation />
        <main className="Magazines-page">
            <TourismList magazines={magazines} />
        </main>
        </>
    )
}