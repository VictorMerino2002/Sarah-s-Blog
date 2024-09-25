import { useNavigate } from "react-router-dom"
import { Navigation } from "../components/Navigation"
import { PostsList } from "../components/PostsList"
import { getAllPosts } from "../api/postApi"
import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import './TourismIndex.css'

export const TourismIndex = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts().then(data => {
            setPosts(data.data)
        })
    },[])

    const navigate = useNavigate()

    return (
        <>
            <Navigation activeTab={"tab4"} />
        <main className="posts-page">
            <Button variant={"black-border"} handleClick={() => navigate("new-post")}>New post</Button>
            <PostsList posts={posts} />
        </main>
        </>
    )
}