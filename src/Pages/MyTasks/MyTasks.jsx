import React from "react";
import { useLoaderData } from "react-router";

const MyTasks = () => {
  
  const myPostedTasks = useLoaderData();
  console.log(myPostedTasks);

  return (
    <>
        {
            <div className="overflow-x-auto">
                <div className="flex m-10 justify-center items-center min-h-screen p-4">
                    <div className="overflow-x-auto w-full max-w-8xl rounded-2xl border border-gray-300 shadow-lg bg-white">
                        <table className="min-w-full table-auto text-2xl font-bold rounded-2xl overflow-hidden">
                        <thead className="bg-purple-200 w-full  rounded-t-2xl text-gray-700">
                            <tr className="text-xl text-left">
                            <th className="py-3 px-4">No.</th>
                            <th className="py-3 px-4">Owner Email</th>
                            <th className="py-3 px-4">Task Description</th>
                            <th className="py-3 px-4">Task Deadline</th>
                            <th className="py-3 px-30 ">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            myPostedTasks.map((task, index) => (
                                <tr key={task._id} className="border-t hover:bg-gray-100">
                                    <td className="py-2 px-4">{index + 1}</td>
                                    <td className="py-2 px-4">{task.email}</td>
                                    <td className="py-2 px-4">{task.task_description}</td>
                                    <td className="py-2 px-6">{task.task_deadline}</td>
                                    <td className="flex gap-5 m-5">
                                        <button className="border-2 border-green-600 bg-green-300 hover:bg-green-600 text-green-800 hover:text-white py-1 px-3 rounded-md">Update</button>
                                        <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md">Delete</button>
                                        <button className="bg-amber-500 hover:bg-red-600 text-white py-1 px-3 rounded-md">Bid</button>

                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        }
    </>    
  );
};

export default MyTasks;
