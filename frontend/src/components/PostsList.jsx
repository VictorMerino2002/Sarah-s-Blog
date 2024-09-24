import { Post } from "./Post"
import "./style/PostsList.css"

/* eslint-disable react/prop-types */
export const PostsList = ({posts}) => {
    return (
        <section className="posts-container">
                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
        </section>
    )
}