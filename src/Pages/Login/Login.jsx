import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useNavigate } from "react-router";
import { authContext } from '../../Root/Root';

const Login = () => {
    const {handleLogin , handleGoogleSignIn} = useContext(authContext);

    const navigate = useNavigate();

    const handleLoginForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        // console.log(email,password)
        if(!email || !password){
            toast.error("You must fill in all the fields!");
            return;
        }


        handleLogin(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            setTimeout(()=>{
                navigate('/')
            },1500)
        })
        .catch(() => {
            toast.error("You've put wrong credentials")
        });
    }

    const handleGoogle = () => {
        handleGoogleSignIn()
        .then(()=>{
            toast.success("You have successfully logged in!")
            setTimeout(()=>{
                navigate('/')
            },1500)
        })
        .catch(()=>{
            toast.error("You have put invalid credentials.")
        })
    }


    return (
       <>
        <ToastContainer></ToastContainer>
        <div className="hero  min-h-screen">
            <div className="hero-content w-full rounded-3xl mt-20 p-25  flex-col justify-evenly lg:flex-row">
                <div className="border-2 border-blue-600 p-2 rounded-2xl w-full max-w-lg shrink-0 shadow-2xl">
                    <div className="p-6 flex flex-col max-w-lg rounded-2xl sm:p-10 bg-gray-50 text-gray-800">
                        <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold underline">Login</h1>
                        <p className="text-lg dark:text-gray-600">
                            Login to your account
                        </p>
                            <div className="divider"></div>
                        </div>
                        <form onSubmit={handleLoginForm} className="space-y-12 ">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm">Enter Email</label>
                                    <input type="email" name="email" id="email" placeholder="Enter email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"/>
                                </div>
                                <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm">Enter Password</label>
                                </div>
                                <input type="password" name="password" id="password" placeholder="Enter password"className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <button type="submit" className="cursor-pointer w-full px-8 py-3 text-2xl font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Login</button>
                                </div>
                                <h1 className="text-center text-2xl font-bold">Or</h1>
                                <button type="button" onClick={handleGoogle} className="btn w-full bg-white text-black text-xl border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                                <div className="divider"></div>
                                <p className="px-6 text-xl text-center dark:text-gray-600">
                                Don't have an account?
                                <NavLink className="underline text-purple-700"to="/register"> Register here</NavLink>
                                </p>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Login;