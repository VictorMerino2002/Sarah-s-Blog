/* eslint-disable react/prop-types */
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export const Editor = ({editorContent, setEditorContent,readOnly}) => {

  const handleEditorChange = (content) => {
    console.log(editorContent)
    setEditorContent(content)
  }
  let modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote'],
      ['link', 'image', 'video'],
               
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent
  
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }]
      ]
  }

  if (readOnly) {
    modules = {
      toolbar : false
    }
  }


  return (
    <div className='Editor'>
      <ReactQuill 
        value={editorContent}
        onChange={handleEditorChange}
        theme='snow'
        placeholder='Escribe algo aquí'
        readOnly={readOnly}
        modules={modules}
      />
    </div>
  )
}