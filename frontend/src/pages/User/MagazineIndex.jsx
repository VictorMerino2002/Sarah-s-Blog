import { Navigation } from "../../components/Navigation/Navigation"
import { useEffect, useState } from "react"
import { getAllMagazine } from "../../api/magazineApi"
import { MagazineList } from "../../components/MagazineList"
import "./../style/MagazineIndex.css"

export const MagazineIndex = () => {

    const [magazines, setMagazines] = useState([])

    useEffect(() => {
        getAllMagazine().then(data => setMagazines(data.data.reverse()))
    },[])


    return (
        <>
        <Navigation />
        <main className="Magazines-page">
            <MagazineList magazines={magazines}/>
        </main>
        </>
    )
}