'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { 
  ssr: false,
  loading: () => <p>Loading editor...</p>
})

// Import Quill styles
import 'react-quill/dist/quill.snow.css'

export default function HtmlEditor({ 
  value = '', 
  onChange, 
  placeholder = 'Write something...',
  height = '300px',
  readOnly = false 
}) {
  const [editorValue, setEditorValue] = useState(value)

  useEffect(() => {
    setEditorValue(value)
  }, [value])

  const handleChange = (content, delta, source, editor) => {
    setEditorValue(content)
    if (onChange) {
      onChange(content)
    }
  }

  // Quill modules configuration
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'align': [] }],
      ['blockquote', 'code-block'],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      matchVisual: false
    }
  }

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'list', 'bullet', 'indent',
    'direction', 'align',
    'blockquote', 'code-block',
    'link', 'image', 'video'
  ]

  return (
    <div className="html-editor-wrapper">
      <ReactQuill
        theme="snow"
        value={editorValue}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        readOnly={readOnly}
        style={{ height: height }}
      />
      <style jsx global>{`
        .html-editor-wrapper .quill {
          background: white;
          border-radius: 8px;
        }
        .html-editor-wrapper .ql-container {
          min-height: ${height};
          font-size: 16px;
          font-family: inherit;
        }
        .html-editor-wrapper .ql-toolbar {
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          background: #f8f9fa;
        }
        .html-editor-wrapper .ql-container {
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }
        .html-editor-wrapper .ql-editor {
          min-height: ${height};
        }
        .html-editor-wrapper .ql-editor.ql-blank::before {
          font-style: normal;
          color: #999;
        }
      `}</style>
    </div>
  )
}


