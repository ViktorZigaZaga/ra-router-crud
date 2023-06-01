import React, { useContext, useState } from "react"
import PostContext from "../contexts/PostContext"

function CreatedPost({ history, location }) {
    const { updatePosts } = useContext(PostContext);
    const [form, setForm] = useState(location.post.content);

    const onChange = (e) => {
        const {value} = e.target;
        setForm(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!location.post) {
            updatePosts({content: form});
            history.push('/');
        } else {
            updatePosts({id: location.post.id, content: form});
            history.push('/');
        }
    }

    return (
        <>
            <form className="created-post" onSubmit={onSubmit}>
                <textarea onChange={onChange}>
                    {content}
                </textarea>
                <button type="submit">Опубликовать</button>
            </form>
            <span className="close-post" onClick={() => {
                post ? history.goBack() : history.push('/');
            }}
            >
                &#10006;
            </span>
        </>
    );
}

export default CreatedPost