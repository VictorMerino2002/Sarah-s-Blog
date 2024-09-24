import { Link } from "react-router-dom"
import { Navigation } from "../components/Navigation"
import { PostsList } from "../components/PostsList"
import { getAllPosts } from "../api/postApi"
import { useEffect, useState } from "react"
import './TourismIndex.css'

export const TourismIndex = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts().then(data => {
            setPosts(data.data)
        })
    },[])

    return (
        <>
            <Navigation />
        <main className="posts-page">
            <Link to={'new-post'} className="new-post-btn"><span className="material-symbols-outlined">add</span></Link>
            <PostsList posts={posts} />
        </main>
        </>
    )
}