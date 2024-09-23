import { Link } from "react-router-dom"
import { Navigation } from "../components/Navigation"
import { Post } from "../components/Post"

export const TourismIndex = () => {


    return (
        <main>
            <Navigation />
            <Link to={'new-post'}>Nuevo post</Link>
            <Post />
        </main>
    )
}