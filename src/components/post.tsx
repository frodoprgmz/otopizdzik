import {PostData} from "../pages/main"; 
import React from 'react';

interface Props{
    post: PostData;
}

export const Post = (props: Props) => {
    const {post} = props;

    return (
        <div>
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
                <img src={post.imageUrl} alt={post.title} />
            </div>
            <div>
                <p>@{post.username}</p>
            </div>
        </div>
    )
}
