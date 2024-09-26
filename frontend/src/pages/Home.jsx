import { Navigation } from "../components/Navigation"
import { PostsList } from "../components/PostsList"
import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate()

    return (
        <>
        <Navigation activeTab={"tab1"} />
        <section>
            <PostsList handleClick={(post) => navigate(`/admin/tourism/${post.id}`)}/>
            <Button variant={"black"} handleClick={() => navigate("/admin/tourism")}>Ver más</Button>
        </section>
        </>
    )
}