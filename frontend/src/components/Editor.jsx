/* eslint-disable react/prop-types */
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import ResizeModule from "@majintd/quill-image-resize";

Quill.register("modules/resize", ResizeModule);

const Embed = Quill.import('blots/block/embed');

class ImageBlot extends Embed {
  static create(value) {
    let node = super.create();
    node.setAttribute('src', value.url || value);
    if (value.style) {
      node.setAttribute('style', value.style);
    }
    return node;
  }

  static value(node) {
    return {
      url: node.getAttribute('src'),
      style: node.getAttribute('style')
    };
  }
}

ImageBlot.blotName = 'image';
ImageBlot.tagName = 'img';

Quill.register(ImageBlot);

export const Editor = ({editorContent, setEditorContent,readOnly}) => {

    const handleEditorChange = (content) => {
        if (readOnly) return
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
        locale: {
          center : {}
        },
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