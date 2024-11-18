import { useNavigate } from "react-router-dom"
import { PostsList } from "../../components/PostsList"
import { Button } from "../../components/Button"
import "./style/TourismPage.css"

export const TourismSection = () => {

    const navigate = useNavigate()

    return (
        <section id="tourism">
            <h2>Turismo</h2>
            <PostsList handleClick={(post) => navigate(`/admin/tourism/${post.id}`)}/>
            <Button variant={"main"} handleClick={() => navigate("/admin/tourism")}>See More</Button>
        </section>
    )
}