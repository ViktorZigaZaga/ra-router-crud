import React, { useContext } from "react";
import PostContext from "../contexts/PostContext"
import moment from 'moment'

function ChangedPost({ match, history }) {
    const {posts, deletePosts} = useContext(PostContext);
    const post = posts.find(post => post.id === match.params.id);

    return (
        <>
        <div className="changed-post">
            <span className="close-post" 
                onClick={() => {
                    history.push('/');
                }}
            >
                &#10006;
            </span>
            <p className="post-date">
                Дата: {moment(post.created).format('DD.MM.YYYY HH:mm:ss')}
            </p>
            <p className="post-text">
                {post.content}
            </p>
            <div className="post-interface">
                <span className="del-btn" onClick={() => {
                        deletePosts(post.id);
                        history.push('/');
                    }}
                >
                    Удалить
                </span>
                <span className="change-btn">
                    <Link className="link-post" 
                        to={{
                            pathname: `/posts/new`,
                            post:  post
                        }}
                    >
                        Изменить
                    </Link>
                </span>    
            </div>
        </div>
        </>
    );
}

export default ChangedPost