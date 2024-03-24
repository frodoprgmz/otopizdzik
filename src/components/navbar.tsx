import {Link} from "react-router-dom";
import {auth} from "../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut} from "firebase/auth";
import React from 'react';


export const Navbar = () => {
    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    }
    return(
        <div className="navbar"> 
       
         <div id="logo">   </div>
            <div className="links">
              
                <Link to="/" className="btn btn-dark">Strona Główna</Link>
                {!user ? (
                    <Link to="/login" className="btn btn-dark">Zaloguj się</Link>
                ) : (
                    <Link to="/createpost" className="btn btn-dark">Utwórz ogłoszenie</Link>
                )}    
            </div>
      
            <div className="user">
                {user && (
                    <>
                    <p>{auth.currentUser?.displayName}</p>
                    <img src={auth.currentUser?.photoURL || ""} referrerPolicy="no-referrer"/>
                    <button onClick={signUserOut} className="btn btn-outline-danger">Wyloguj się</button>
                    </>
                )}
            </div>
        </div>
    )
}