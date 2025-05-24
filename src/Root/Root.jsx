import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { auth } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const authContext = createContext();

const Root = () => {

    const provider = new GoogleAuthProvider()
        
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true)


    // creating user
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // handle Google login
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth,provider)
    }

    // handle login 
    const handleLogin = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    // update user
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser , updatedData)
    }

    // handle logout
    const handleLogout = () => {
        return signOut(auth)
    }


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
    },[])

    const handleForm = {
        createUser,
        handleGoogleSignIn,
        handleLogin,
        updateUser,
        handleLogout,
        setUser,
        user,
        setLoading,
        loading
    }


    return (
        <authContext.Provider value={handleForm}>
            <Outlet></Outlet>
        </authContext.Provider>
        
    );
};

export default Root;