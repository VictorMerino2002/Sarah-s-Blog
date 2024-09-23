import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Editor } from "../components/Editor"
import { Navigation } from '../components/Navigation'
import { createPost } from '../api/postApi'

export const PostEdit = () => {
    const [editorContent, setEditorContent] = useState('')
    const { register, handleSubmit } = useForm()

    const handleClick = handleSubmit(async data => {
        if (editorContent == "") return
        data.content = editorContent
        console.log(data)
        const res = await createPost(data)
        console.log(res)
    })

    return (
        <main>
            <Navigation />
            <header>
                <input type="text" placeholder="Introduce la locaciación" {...register("location", { required : true })}/>
                <button onClick={handleClick}>Guardar</button>
            </header>
            <Editor editorContent={editorContent} setEditorContent={setEditorContent}></Editor>
        </main>
    )
}