import React, { useContext } from "react"
import { Link } from 'react-router-dom';
import Post from './Post'
import PostContext from "../contexts/PostContext"

function ListPosts() {
    const { posts } = useContext(PostContext);
  
    return (
        <>
            <div className="add-post">
                <Link className="link-post" to={`/post/new`}>Создать пост</Link>
            </div>
            <div className="posts-list">
                {posts.map((post) => 
                    <Post key={post.id} post={post} />
                )}
            </div>
        </>
    )
}

export default ListPosts