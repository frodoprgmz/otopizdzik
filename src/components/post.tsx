import {Post as IPost} from "../pages/main";
import React from 'react';

interface Props{
    post: IPost;
}

export const Post = (props: Props) => {
    const {post} = props;

    return (
        <div>
            <div className="title">
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
                <p>@{post.username}</p>
            </div>
        </div>
    )
}