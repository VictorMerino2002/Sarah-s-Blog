import { Button } from "../components/Button"
import { Navigation } from "../components/Navigation"
import { useEffect, useState } from "react"
import { createMagazine, getMagazine } from "../api/magazineApi"
import { PDF } from "../components/PDF"
import "./style/MagazineIndex.css"

export const MagazineIndex = () => {

    const [magazineModal, setMagazineModal] = useState(false)
    const [title, setTitle] = useState("")
    const [file, setFile] = useState(null)

    const [titleError, setTitleError] = useState(false)
    const [fileError, setFileError] = useState(false)

    const [magazine, setMagazine] = useState(null)

    useEffect(() => {
        getMagazine(2).then(data => {
            console.log(data.data)
            setMagazine(data.data)
        })
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()

        setTitleError(!title)
        setFileError(!file)

        if (title && file) {
            const res = await createMagazine({title, content:file})
            console.log(res)
        }
    }

    const handleFileChange = (e) => {
        if (!e.target || !e.target.files) return
        setFile(e.target.files[0])
    }

    return (
        <>
        <Navigation activeTab={"tab6"} />
        <main className="Magazines-page">
            <Button variant={"black-border"} handleClick={() => setMagazineModal(true)}>New Magazine</Button>
            {magazineModal && (
                <form onSubmit={handleSubmit} className="form-modal">
                    <Button type={"button"} handleClick={() => setMagazineModal(false)}>x</Button>
                    <h2>Upload magazine</h2>
                    <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                    {titleError && <span className="error-msg">Enter a title</span>}
                    <input type="file" onChange={handleFileChange} multiple/>
                    {fileError && <span className="error-msg">Enter a file</span>}
                    <Button variant={"black-border"} type={"submit"}>Upload</Button>
                </form>
            )}
            {magazine && <PDF title={magazine.title} date={magazine.date} base64={magazine.content}/>}
        </main>
        </>
    )
}