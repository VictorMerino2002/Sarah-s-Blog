import { useEffect, useState } from "react"
import { Post } from "./Post"
import { getAllPosts } from "../api/postApi"
import { sortPosts } from "../logic"
import "./style/PostsList.css"

/* eslint-disable react/prop-types */
export const PostsList = ({amount, handleClick}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts()
        .then(res => {
            const sortedPosts = sortPosts(res.data)
            setPosts(sortedPosts)
        })
    },[])

    return (
        <section className="posts-container">
                {posts.slice(0,amount).map(post => (
                    <Post key={post.id} post={post} handleClick={() => handleClick(post)} />
                ))}
        </section>
    )
}