import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function Post(props) {
    const { post } = props;
    
    return (
        <div className="post">
            <Link className="post-link" to={`/posts/${post.id}`}>
                <p className="post-date">Дата: {moment(post.created).format('DD.MM.YYYY HH:mm:ss')}</p>
                <p className="post-text">{post.content}</p>
            </Link>
        </div>
    );
}

export default Post;