import { useNavigate } from "react-router-dom"
import { PostsList } from "../../components/PostsList"
import { Button } from "../../components/Button"
import "./style/TourismPage.css"

export const TourismPage = () => {

    const navigate = useNavigate()

    return (
        <section id="tourism">
            <h1>Turismo</h1>
            <PostsList handleClick={(post) => navigate(`/admin/tourism/${post.id}`)}/>
            <Button variant={"black"} handleClick={() => navigate("/admin/tourism")}>Ver más</Button>
        </section>
    )
}