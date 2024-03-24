import {auth, provider} from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import React from 'react';

export const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth,provider);
        console.log(result);
        navigate('/');
    }

    return <div>
        <div className="pedal"> 
        <p>Zaloguj się przez google aby kontynuować</p>
        <button onClick={signInWithGoogle}>Zaloguj przez google</button>
    </div>

    </div>
}