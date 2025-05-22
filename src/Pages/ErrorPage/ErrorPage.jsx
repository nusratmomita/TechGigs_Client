import React from 'react';
import errorGIF from '../../assets/errorGIF.gif'
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='m-20 p-2 rounded-3xl flex justify-center items-center border-2 border-purple-900'>
            <img className="w-150 h-150"src={errorGIF} alt="errorGIF" />
            <div className='space-y-5'>
                <h1 className='text-4xl font-bold'>Got Lost?🧐</h1>
                <p className='text-3xl font-bold '>Don't worry! We've got you!!</p>
                <p className='text-2xl text-purple-500'> Get Back to chasing your dream job with US:)</p>
                <div>
                    <NavLink to="/"><button className='ml-5 cursor-pointer bg-blue-200 p-3 font-bold rounded-2xl -rotate-6'>Home</button></NavLink>
                    <NavLink to="/login"><button className='ml-5 cursor-pointer bg-purple-200 p-3 font-bold rounded-2xl'>Login</button></NavLink>
                    <NavLink to="/register"><button className='ml-5 cursor-pointer bg-red-200 p-3 font-bold rounded-2xl rotate-6'>Register</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;