import { Navigation } from "../../components/Navigation/Navigation"
import { useEffect, useState } from "react"
import { getAllMagazine } from "../../api/journalApi"
import "./../style/MagazineIndex.css"
import { JournalList } from "../../components/JournalList"

export const JournalIndex = () => {

    const [magazines, setMagazines] = useState([])

    useEffect(() => {
        getAllMagazine().then(data => setMagazines(data.data.reverse()))
    },[])


    return (
        <>
        <Navigation />
        <main className="Magazines-page">
            <JournalList magazines={magazines} />
        </main>
        </>
    )
}