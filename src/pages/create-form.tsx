import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {addDoc, collection} from "firebase/firestore";
import {auth, db, storage} from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface CreateFormData {
    title: string;
    description: string;
    image: FileList; // Zmieniono z File na FileList
}

export const CreateForm = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("Musisz dodać tytuł"),
        description: yup.string().required("Musisz dodać opis"),
        image: yup.mixed().required("Musisz dodać zdjęcie")
    });

    const {register, handleSubmit, formState: {errors}} = useForm<CreateFormData>({
        resolver: yupResolver(schema) as any,
    })

    const postsRef = collection(db, "posts");

    const onCreatePost = async (data: CreateFormData) => {
        const imageFile = data.image[0]; // Wybieramy pierwszy plik z FileList
        const imageDownloadUrl = await uploadImageToStorage(imageFile);
        const postData = {
            title: data.title,
            description: data.description,
            username: user?.displayName,
            userId: user?.uid,
            imageUrl: imageDownloadUrl
        };
        await addDoc(postsRef, postData);
        navigate("/");
    }

    const uploadImageToStorage = async (image: File) => {
        const storageRef = ref(storage, 'images/' + image.name);
        await uploadBytes(storageRef, image);
        const downloadUrl = await getDownloadURL(storageRef);
        return downloadUrl;
    }

    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input type="file" {...register("image")} />
            <p style={{color: "red"}}>{errors.image?.message}</p>
            <input placeholder="TYTUŁ" {...register("title")}/>
            <p style={{color: "red"}}>{errors.title?.message}</p>
            <textarea placeholder="OPIS" {...register("description")}/>
            <p style={{color: "red"}}>{errors.description?.message}</p>
            <button className="submitForm" type="submit">Create Post</button>
        </form>
    )
}
