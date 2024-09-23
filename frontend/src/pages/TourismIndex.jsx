import { Link } from "react-router-dom"
import { Navigation } from "../components/Navigation"
import { Post } from "../components/Post"
import { getAllPosts } from "../api/postApi"
import { useEffect, useState } from "react"
import './TourismIndex.css'

export const TourismIndex = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts().then(data => setPosts(data.data))
    },[])

    return (
        <>
        <Navigation />
        <Link to={'new-post'}>Nuevo post</Link>
        <main>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}

        </main>
        </>
    )
}