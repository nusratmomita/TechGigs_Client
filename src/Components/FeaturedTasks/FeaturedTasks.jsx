import React from 'react';
import { Link } from 'react-router';


const FeaturedTasks = ({data}) => {
    console.log(data)
    
    return (
        <div  className="lg:-mt-40 p-5">
            <h2 className="text-7xl text-center font-extrabold text-blue-400 mb-10">| Featured Tasks |</h2>
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.map(task => (
                    <div key={task._id} className="h-[280px] w-[360px] border p-6 rounded-xl shadow-lg bg-white">
                        <h3 className="text-2xl font-semibold mb-2">{task.task_title}</h3>
                        <p className="text-gray-700 text-xl">{task.task_description}</p>
                        <p className="text-xl mt-2 text-purple-600">Deadline: {new Date(task.task_deadline).toLocaleDateString()}</p>
                        <p className="text-lg text-green-600">Budget: {task.budget}</p>
                        <p className="text-lg text-blue-600">Category: {task.category}</p>
                        <Link to={`/detailedTask/${task._id}`}>
                            <button className='rounded-2xl p-3 text-2xl btn border-purple-900 bg-purple-100 text-purple-900 mt-8'>See More</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedTasks;
