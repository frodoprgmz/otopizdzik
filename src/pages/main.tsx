import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface PostData { // Dodano słowo kluczowe 'export'
    title: string;
    description: string;
    username: string;
    userId: string;
    imageUrl: string;
}

export const Main = () => {
    const [posts, setPosts] = useState<PostData[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const postsCollection = collection(db, 'posts');
            const postsSnapshot = await getDocs(postsCollection);
            const postsList = postsSnapshot.docs.map(doc => doc.data() as PostData);
            setPosts(postsList);
        };

        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map((post, index) => (
                <div className="ogloszenie" key={index}>
                    <h2  className="title">{post.title}</h2>
                    <p>{post.description}</p>
                    <img className="postphoto" src={post.imageUrl} alt={post.title} />
                    <p>Dodane przez: {post.username}</p>
                </div>
            ))}
        </div>
    );
};
