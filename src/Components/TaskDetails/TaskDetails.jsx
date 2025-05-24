import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const TaskDetails = () => {
    const taskData = useLoaderData();
    // console.log(taskData)
    const [bidCount , setBidCount] = useState(0);

    const handleBidCount = (id) => {
        fetch(`https://tech-gigs-server.vercel.app/tasks/bid/${id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then((data) => {
            if(data.modifiedCount){
                setBidCount(bidCount + 1);
            }
        });
    };

    // console.log(bidCount)



    return (
        <>
            <Header></Header>
            <h1 className='text-center text-6xl font-extrabold mt-20 text-blue-400'>[ You bid for : {bidCount} opportunities. ]</h1>
            <div className='flex justify-center items-center mt-30 '>
                <div className="card  bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-3xl shadow-md hover:shadow-2xl transition-transform transform hover:scale-90">
                    <div className="card-body text-gray-800 px-6 py-5">
                        <h2 className="text-center text-4xl font-bold flex justify-center items-center gap-2">Task Name : {taskData.task_title}</h2>
                        <div className="divider divider-neutral"></div>
                        <div className='border-2 border-purple-950 rounded-2xl p-4 space-y-4'>
                        <p className="text-2xl font-semibold flex items-start gap-2">🎯 Description : {taskData.task_description}</p>
                        <p className="text-2xl font-semibold flex items-start gap-2">⏱ Deadline : {taskData.task_deadline}</p>
                            {
                                `${taskData.budget}`.length > 4 ? 
                                <p className="text-2xl font-semibold flex items-start gap-2 border-2 border-red-700 bg-red-200 w-1/2 p-2 rounded-2xl">💸 Budget : {taskData.budget}</p> : 
                                <p className="text-2xl font-semibold flex items-start gap-2 border-2 border-green-700 bg-green-200 w-1/2 p-2 rounded-2xl">💸 Budget : {taskData.budget}</p> 
                            }
                        
                        <button onClick={()=>handleBidCount(taskData._id)} className='cursor:pointer text-2xl font-semibold flex items-start gap-2 border-2 border-purple-700 bg-purple-200 w-1/2 p-2 rounded-2xl'>
                            Click To increase the Bid Count : {bidCount}
                        </button>                            
                            <p className="text-2xl font-semibold">🚨  Owner Name : {taskData.name} </p>
                            <p className="text-2xl font-semibold">💂‍♂️ <span className="">Owner Email : {taskData.email}</span> </p>

                        </div>
                        <div className="divider divider-neutral"></div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default TaskDetails;