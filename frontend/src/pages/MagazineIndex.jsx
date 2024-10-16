import { Button } from "../components/Button"
import { Navigation } from "../components/Navigation"
import { useState } from "react"
import { createMagazine } from "../api/magazineApi"
import "./style/MagazineIndex.css"

export const MagazineIndex = () => {

    const [magazineModal, setMagazineModal] = useState(true)
    const [title, setTitle] = useState("")
    const [files, setFiles] = useState([])

    const [titleError, setTitleError] = useState(false)
    const [fileError, setFileError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(files)
        const haveTitle = !!title
        const haveFiles = files > 0

        setTitleError(!haveTitle)
        setFileError(!haveFiles)

        if (haveTitle && haveFiles) {
            files.forEach(async file => {
                const res = await createMagazine({title, content:file})
                console.log(res)
            })
        }
    }

    const handleFileChange = (e) => {
        if (!e.target || !e.target.files) return
        setFiles(Array.from(e.target.files))
    }

    return (
        <>
        <Navigation activeTab={"tab6"} />
        <main className="Magazines-page">
            <Button variant={"black-border"} handleClick={() => setMagazineModal(true)}>New Magazine</Button>
            {magazineModal && (
                <form onSubmit={handleSubmit} className="form-modal">
                    <h2>Upload magazine</h2>
                    <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                    {titleError && <span className="error-msg">Enter a title</span>}
                    <input type="file" onChange={handleFileChange} multiple/>
                    {fileError && <span className="error-msg">Enter a file</span>}
                    <Button variant={"black-border"} type={"submit"}>Upload</Button>
                </form>
            )}
        </main>
        </>
    )
}