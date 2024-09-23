import { useState } from 'react'
import { Editor } from "../components/Editor"
import { Navigation } from '../components/Navigation'

export const PostEdit = () => {
    const [editorContent, setEditorContent] = useState('')

    return (
        <main>
            <Navigation />
            <header>
                <input type="text" placeholder="Introduce la locaciación"/>
                <button>Guardar</button>
            </header>
            <Editor editorContent={editorContent} setEditorContent={setEditorContent}></Editor>
        </main>
    )
}