/* eslint-disable react/prop-types */
import { Worker, Viewer } from '@react-pdf-viewer/core'
import "./style/PDF.css"

export const PDF = ({base64Content}) => {
    const pdfData = `data:application/pdf;base64,${base64Content}`

    return (
        <div className="PDF">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
                <Viewer fileUrl={pdfData} />
            </Worker>
        </div>
    )
}