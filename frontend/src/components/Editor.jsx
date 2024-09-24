/* eslint-disable react/prop-types */
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import ResizeModule from "@majintd/quill-image-resize";

Quill.register("modules/resize", ResizeModule);

export const Editor = ({editorContent, setEditorContent,readOnly}) => {

    const handleEditorChange = (content) => {
        if (readOnly) return
        console.log(content)
        setEditorContent(content)
    }


    const formats = [
        'bold', 'italic', 'underline', 'strike', 
        'blockquote', 'link', 'image', 'video', 
        'list', 'bullet', 'check', 'indent', 
        'size', 'header', 'color', 'background', 
        'font', 'align'
    ]

  let modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote'],
      ['link', 'image', 'video'],
               
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
  
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
      [{ 'color': [] }, { 'background': [] }], 
      [{ 'font': [] }],
      [{ 'align': [] }]
      ],
      resize: {
        locale: {},
      }
  }

  if (readOnly) {
    modules = {
      toolbar : false,
      resize: {locale : {}}
    }
  }

  return (
    <div className='Editor'>
        <ReactQuill
          value={editorContent}
          onChange={handleEditorChange}
          theme='snow'
          readOnly={readOnly}
          modules={modules}
          formats={formats}
        />
    </div>
  )
}