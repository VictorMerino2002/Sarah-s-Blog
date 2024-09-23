/* eslint-disable react/prop-types */
import { Editor } from "./Editor"

export const Post = ({location, date, content}) => {

    return (
        <div>
            <div>
                <small>{location}</small>
                <small>{date}</small>
            </div>
            <Editor readOnly={true} editorContent={content}/>
        </div>
    )
}