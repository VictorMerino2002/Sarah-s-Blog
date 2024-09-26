/* eslint-disable react/prop-types */
import { Editor } from "./Editor"
import { capFirst } from "../logic"
import './style/Post.css'

export const Post = ({post, handleClick}) => {

    const {location, date, content} = post

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