import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { auth } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const authContext = createContext();

const Root = () => {

    const provider = new GoogleAuthProvider()
        
    const [users , setUsers] = useState(null);
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

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUsers(currentUser)
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    },[])

    const handleForm = {
        createUser,
        handleGoogleSignIn,
        handleLogin,
        setUsers,
        users,
        setLoading,
        loading
    }


    return (
        <authContext.Provider value={handleForm}>
             <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </authContext.Provider>
        
    );
};

export default Root;