import React from 'react';


const FeaturedTasks = ({data}) => {
    
    return (
        <div className="p-12">
            <h2 className="text-7xl text-center font-extrabold text-purple-400 mb-20">| Featured Tasks |</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map(task => (
                    <div key={task._id} className="border p-6 rounded-xl shadow-lg bg-white">
                        <h3 className="text-2xl font-semibold mb-2">{task.task_title}</h3>
                        <p className="text-gray-700 text-xl">{task.task_description}</p>
                        <p className="text-xl mt-2 text-purple-600">Deadline: {new Date(task.task_deadline).toLocaleDateString()}</p>
                        <p className="text-lg text-green-600">Budget: {task.budget}</p>
                        <p className="text-lg text-blue-600">Category: {task.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedTasks;
