import React from "react";
import { NavLink, useLoaderData } from "react-router";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


const MyTasks = () => {
  
  const myPostedTasks = useLoaderData();
  console.log(myPostedTasks);

  return (
    <>
        <h1 className="mt-25 flex justify-center items-center text-4xl font-bold text-purple-500 hover:text-purple-900">All the tasks created by YOU are shown here...</h1>
        {
            <div className="overflow-x-auto">
                <div className="flex justify-center items-center min-h-screen p-16">
                    <div className="overflow-x-auto w-full max-w-8xl rounded-2xl border border-gray-300 shadow-lg bg-white">
                        <table className="min-w-full table-auto text-2xl font-bold rounded-2xl overflow-hidden">
                        <thead className="bg-purple-200 w-full rounded-t-2xl text-gray-700">
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
                                        <NavLink to={`/update/${task._id}`}><button className="cursor-pointer flex gap-1 justify-center items-center border-2 border-green-600 bg-green-200 hover:bg-green-600 text-green-800 hover:text-white py-1 px-3 rounded-md"><FiEdit></FiEdit> Update</button></NavLink>
                                        <button className="cursor-pointer flex gap-1 justify-center items-center border-2 border-red-600 bg-red-200 hover:bg-red-600 text-red-800 hover:text-white py-1 px-3 rounded-md"><RiDeleteBin5Line></RiDeleteBin5Line> Delete</button>
                                        <button className="cursor-pointer flex gap-1 justify-center items-center border-2 border-purple-600 bg-purple-200 hover:bg-purple-600 text-purple-800 hover:text-white py-1 px-3 rounded-md"><FaArrowUpRightFromSquare></FaArrowUpRightFromSquare> Bid(X)</button>
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