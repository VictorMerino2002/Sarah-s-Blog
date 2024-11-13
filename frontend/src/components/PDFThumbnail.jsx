/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Worker, Viewer } from '@react-pdf-viewer/core'
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail"
import { pageThumbnailPlugin } from "./plugins/thumbnail"
import "./style/PDFThumbnail.css"
import { useNavigate } from "react-router-dom"

export const PDFThumbnail = ({ id, title, date, base64 }) => {
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

  const thumbnailPluginInstance = thumbnailPlugin()
  const { Cover } = thumbnailPluginInstance

  const pageThumbnailPluginInstance = pageThumbnailPlugin(<Cover width={250} getPageIndex={() => 0} />)

  const navigate = useNavigate()

  return (
    <div className="PDFThumbnail" onClick={() =>navigate("/magazines/"+ id)}>
      {pdfData ? (
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
          <Viewer 
          fileUrl={pdfData}
          plugins={[pageThumbnailPluginInstance, thumbnailPluginInstance]}
          />
        </Worker>
      ) : (<p>Cargando PDF ...</p>)}
      <p>{title}</p>
      <p>{date}</p>
    </div>
  )
}