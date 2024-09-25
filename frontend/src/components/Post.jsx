/* eslint-disable react/prop-types */
import { Editor } from "./Editor"
import { capFirst } from "../logic"
import { useNavigate } from "react-router-dom"
import './style/Post.css'

export const Post = ({post}) => {

    const {id, location, date, content} = post

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/tourism/${id}`)
    }

    return (
        <div className="Post" onClick={handleClick}>
            <div className="Post-header">
                <div>
                    <small>{capFirst(location)}</small>
                    <small>{date}</small>
                </div>
            </div>
            <Editor readOnly={true} editorContent={content}/>
        </div>
    )
}