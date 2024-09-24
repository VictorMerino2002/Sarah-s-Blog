import { useEffect, useState } from 'react'
import { Editor } from "../components/Editor"
import { Navigation } from '../components/Navigation'
import { createPost, deletePost, getPost, updatePost } from '../api/postApi'
import { useNavigate, useParams } from 'react-router-dom'
import { capFirst } from '../logic'
import "./PostEdit.css"

export const PostEdit = () => {

    const params = useParams()
    const [location, setLocation] = useState('')
    const [editorContent, setEditorContent] = useState('')
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

    const handleClick = () => {
        const styledLocation = location.trim().toLowerCase()
        if (editorContent == "" || styledLocation == "") return
        const post = {id:params.id,"location":styledLocation,"content":editorContent}
        
        if (post.id) updatePost(post)
        else createPost(post)
    }

    const handleDelete = () => {
        const accepted = confirm("Estas seguro de que quieres eliminar el post?")
        if (!accepted) return
        deletePost(params.id)
        navigate("/tourism")
    }

    return (
        <main className='editor-page'>
            <Navigation />
            <header>
                <input type="text" defaultValue={location} onChange={(e) => setLocation(e.target.value)} placeholder="Introduce la locaciación"/>

                <div>
                    <button onClick={handleClick}><span className="material-symbols-outlined">save</span></button>
                    {params.id && <button onClick={handleDelete}><span className="material-symbols-outlined">delete</span></button>}
                </div>
            </header>
            <Editor editorContent={editorContent} setEditorContent={setEditorContent}></Editor>
        </main>
    )
}