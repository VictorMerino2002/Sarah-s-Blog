/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Worker, Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'

export const PDF = ({ base64 }) => {
  const [pdfData, setPdfData] = useState(null)

  useEffect(() => {
    if (!base64) return
    const binary = window.atob(base64)
    const len = binary.length
    const bytes = new Uint8Array(len)
    for (let i = 0; i < len; i++) {
      bytes[i] = binary.charCodeAt(i)
    }

    const blob = new Blob([bytes], {type: "application/pdf"})
    setPdfData(URL.createObjectURL(blob))
  },[base64])

  return (
    <div>
      {pdfData ? (
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={pdfData} />
        </Worker>
      ) : (<p>Cargando PDF ...</p>)}
    </div>
  )
}