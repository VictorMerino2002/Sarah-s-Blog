/* eslint-disable react/prop-types */
import { Button } from "../components/Button"
import { deleteMagazine } from "../api/magazineApi"
import { PDFThumbnail } from "../components/PDFThumbnail"
import "../components/style/MagazineList.css"

export const MagazineList = ({magazines, editor}) => {

    const handleClick = (magazine) => {
        const confirmation = confirm(`Delete ${magazine.title}`)

        if (confirmation) {
            deleteMagazine(magazine.id)
            .then(res => alert("Delete complete"))
        }
    }

    return (
        <div className="magazine-list">
        {magazines.map(magazine => (
            <div className="Magazine" key={magazine.id}>
                {editor && (
                <Button variant={"black btn-delete"} handleClick={() => handleClick(magazine)}>
                    <span className="material-symbols-outlined">delete</span>
                </Button>
                )}
                <PDFThumbnail key={magazine.id} id={magazine.id} title={magazine.title} date={magazine.date} base64={magazine.content} section={"magazines"}/>
            </div>
        ))}
        </div>
    )
}