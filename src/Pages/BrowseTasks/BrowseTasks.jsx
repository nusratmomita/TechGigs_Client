import React from 'react';
import { NavLink, useLoaderData, useNavigation } from 'react-router';
import { MdWorkHistory } from "react-icons/md";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const BrowseTasks = () => {
    const totalTasks = useLoaderData();

    const navigation = useNavigation();

    if(navigation.state === "loading"){
        return (
        <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg text-indigo-600"></span>
        </div>
        );
    }
   
    return (
        <>
            <Header></Header>
            <h1 className='text-center text-5xl font-bold mt-20 text-violet-900'>Currently total task(s) : {totalTasks.length}</h1>
            <div className='m-10 lg:m-30 grid justify-center items-center gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    totalTasks.map((task)=> 
                        <div key={task._id}
                            className="card  h-[450px] bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 rounded-3xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                            <div className="card-body text-gray-800 px-6 py-5">
                                <h2 className="text-center text-4xl font-bold flex justify-center items-center gap-2">
                                {task.task_title}
                                <MdWorkHistory className="text-indigo-600" />
                                </h2>
                                <div className="divider divider-neutral"></div>
                                <p className="text-2xl font-semibold flex items-start gap-2 mb-4">
                                🎯 {task.task_description}
                                </p>
                                <h1 className="text-xl font-semibold mb-4">
                                💂‍♂️ <span className="underline">Owner:</span> {task.email}
                                </h1>
                                <div className="divider divider-neutral"></div>
                                <div className="flex justify-center mt-4">
                                <NavLink to={`/detailedTask/${task._id}`}>
                                    <button className="cursor-pointer bg-indigo-200 text-indigo-900 font-semibold text-lg py-2 px-5 rounded-xl shadow hover:bg-indigo-300 transition-all duration-300">
                                        📝 See Details
                                    </button>
                                </NavLink>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <Footer></Footer>
        
        </>
    );
};

export default BrowseTasks;