import { useEffect, useState } from 'react'
import { Editor } from "../components/Editor"
import { Navigation } from '../components/Navigation'
import { createPost, deletePost, getPost, updatePost } from '../api/postApi'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from "../components/Button"
import { Loader } from "../components/Loader"
import { capFirst } from '../logic'
import "./style/PostEdit.css"

export const PostEdit = () => {

    const params = useParams()
    const [location, setLocation] = useState('')
    const [editorContent, setEditorContent] = useState('')
    const [saving, setSaving] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (params.id) {
            getPost(params.id)
            .then(res => {
                const {data} = res
                setLocation(capFirst(data.location))
                setEditorContent(data.content)
            })
        }
    },[params.id])

    const handleClick = async () => {
        const styledLocation = location.trim().toLowerCase()
        if (editorContent == "" || styledLocation == "") return
        const post = {id:params.id,"location":styledLocation,"content":editorContent}
        
        setSaving(true)

        if (post.id) await updatePost(post)
        else await createPost(post)

        setSaving(false)
    }

    const handleDelete = () => {
        const accepted = confirm("Estas seguro de que quieres eliminar el post?")
        if (!accepted) return
        deletePost(params.id)
        navigate("/tourism")
    }

    return (
        <main className='editor-page'>
            <Navigation activeTab={"tab4"}/>
            <header>
                <input type="text" defaultValue={location} onChange={(e) => setLocation(e.target.value)} placeholder="Introduce la locaciación"/>

                <div>
                    {saving 
                    ? <div className='Loader-container'><Loader /></div>
                    : <Button handleClick={handleClick} variant={"black"}>Save</Button>}
                    
                    {params.id && <Button handleClick={handleDelete} variant={"negative black"}>Delete</Button>}
                </div>
            </header>
            <Editor editorContent={editorContent} setEditorContent={setEditorContent}></Editor>
        </main>
    )
}