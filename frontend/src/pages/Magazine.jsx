import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMagazine } from "../api/magazineApi"
import { PDF } from "../components/PDF"

export const Magazine = () => {

    const params = useParams()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [date, setDate] = useState("")

    useEffect(() => {
        if (params.id) {
            getMagazine(params.id)
            .then(res => {
                const {data} = res
                setTitle(data.title)
                setContent(data.content)
                setDate(data.date)
            })
        }
    }, [params.id])

    return (
        <main>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <PDF base64Content={content} />
        </main>
    )
}