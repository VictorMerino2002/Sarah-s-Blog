/* eslint-disable react/prop-types */
import { Editor } from "./Editor"
import { capFirst } from "../logic"
import { Link } from "react-router-dom"
import './Post.css'

export const Post = ({post}) => {

    const {location, date, content} = post

    return (
        <div className="Post">
            <div className="Post-header">
                <div>
                    <small>{capFirst(location)}</small>
                    <small>{date}</small>
                </div>

                <div className="Post-btns">
                    <Link><span className="material-symbols-outlined">edit</span></Link>
                    <button><span className="material-symbols-outlined">delete</span></button>
                </div>
            </div>
            <Editor readOnly={true} editorContent={content}/>
        </div>
    )
}