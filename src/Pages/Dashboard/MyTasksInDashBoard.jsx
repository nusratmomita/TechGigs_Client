import React from 'react';

const MyTasksInDashBoard = ({userTasks}) => {
    console.log(userTasks)
    return (
        <div className="mt-20 overflow-x-auto">
            <h1 className=" ml-5 text-4xl font-bold mb-3">Tasks you've created</h1>
            <div className="flex justify-center items-center min-h-screen p-6">
                <div className="-mt-100 overflow-x-auto w-full max-w-8xl rounded-2xl border border-gray-300 shadow-lg bg-white">
                    <table className="min-w-full table-auto text-2xl font-bold rounded-2xl overflow-hidden">
                    <thead className="bg-purple-200 w-full rounded-t-2xl text-gray-700">
                        <tr className="text-xl text-left">
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Owner Email</th>
                            <th className="py-3 px-4">Task Description</th>
                            <th className="py-3 px-4">Task Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        userTasks.map((task, index) => (
                            <tr key={task._id} className="border-t hover:bg-gray-100">
                                <td className="py-2 px-4">{index + 1}</td>
                                <td className="py-2 px-4">{task.email}</td>
                                <td className="py-2 px-4">{task.task_description}</td>
                                <td className="py-2 px-6">{task.task_deadline}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                    </table>
                </div>
            </div>
        </div> 
      
    );
};

export default MyTasksInDashBoard;     