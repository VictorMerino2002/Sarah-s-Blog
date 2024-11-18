import { Button } from "../components/Button"
import { Navigation } from "../components/Navigation"
import { useEffect, useRef, useState } from "react"
import { createMagazine, getAllMagazine } from "../api/magazineApi"
import { MagazineList } from "../components/MagazineList"
import "./style/MagazineIndex.css"

export const MagazineIndex = () => {

    const [magazineModal, setMagazineModal] = useState(false)
    const [title, setTitle] = useState("")
    const [file, setFile] = useState(null)

    const [titleError, setTitleError] = useState(false)
    const [fileError, setFileError] = useState(false)

    const [magazines, setMagazines] = useState([])
    const inputFile = useRef()

    useEffect(() => {
        getAllMagazine().then(data => setMagazines(data.data))
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()

        setTitleError(!title)
        setFileError(!file)

        if (title && file) {
            const res = await createMagazine({title, content:file})
            
            setMagazines(prevMagazines => [...prevMagazines, res.data])

            setTitle("")
            setFile(null)
            inputFile.current.value = ""
            setMagazineModal(false)
        }
    }

    const handleFileChange = (e) => {
        if (!e.target || !e.target.files) return
        const selectedFile = e.target.files[0]

        if (selectedFile.type !== "application/pdf") {
            setFileError(true)
            setFile(null)
            inputFile.current.value = ""
        } else {
            setFileError(false)
            setFile(selectedFile)
        }
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
                    <input type="file" ref={inputFile} onChange={handleFileChange} accept=".pdf"/>
                    {fileError && <span className="error-msg">Enter a valid file</span>}
                    <Button variant={"black-border"} type={"submit"}>Upload</Button>
                </form>
            )}

            <MagazineList magazines={magazines} editor={true}/>
        </main>
        </>
    )
}