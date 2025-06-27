import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { authContext } from "../../Root/Root";
import MyTasksInDashBoard from "./MyTasksInDashBoard";

const Dashboard = () => {
    const { user } = useContext(authContext);
    const [allTasks, setAllTasks] = useState([]);
    const [userTasks, setUserTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch all tasks
        fetch("https://tech-gigs-server.vercel.app/tasks/allTasks")
            .then(res => res.json())
            .then(data => {
                setAllTasks(data);
                setLoading(false);
            })
            .catch();
        if (user?.email) {
            fetch(`https://tech-gigs-server.vercel.app/tasks/specific/${user.email}`)
                .then(res => res.json())
                .then(data => setUserTasks(data))
                .catch();
        }
    }, [user?.email]);

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-[#E9A5F1] lg:hidden">
                    <div className="flex-none">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 text-xl font-bold">Dashboard</div>
                </div>

                {/* Welcome Text */}
                <div className="mt-10  p-10">
                    <h1 className="text-5xl font-bold text-indigo-800 mb-3">
                        Welcome to the Dashboard, <span className="italic">{user?.displayName}</span>
                    </h1>
                    <p className="text-xl text-gray-700">Explore your dashboard and stay on top of your progress!</p>
                </div>

                {/* Stats Cards */}
                <div className="p-6 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">

                    <div className="bg-gradient-to-tr from-pink-100 to-pink-200 rounded-2xl shadow-lg p-6 text-center transition-all duration-300 hover:scale-105">
                        <h1 className="text-4xl font-bold text-pink-800 mb-2">
                            📊 All Tasks: {loading ? 'Loading...' : allTasks.length}
                        </h1>
                        <p className="text-gray-700">These are the total tasks across the platform.</p>
                    </div>
                    <div className="bg-gradient-to-tr from-blue-100 to-sky-200 rounded-2xl shadow-lg p-6 text-center transition-all duration-300 hover:scale-105">
                        <h1 className="text-4xl font-bold text-blue-900 mb-2">
                            👤 Your Tasks: {userTasks.length}
                        </h1>
                        <p className="text-gray-700">These are the tasks you created or are assigned to you.</p>
                    </div>

                    {/* User Info */}
                    <div className="bg-gradient-to-tr from-purple-100 to-purple-200 rounded-2xl shadow-lg p-6 text-center transition-all duration-300 hover:scale-105">
                        <div className="flex justify-center">
                            <img src={user?.photoURL} alt="user"
                                 className="w-24 h-24 rounded-full border-4 border-white shadow-md mb-4"/>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-1">👋 Hello, {user?.displayName}</h2>
                        <p className="text-gray-700">📧 {user?.email}</p>
                        <p className="mt-2 text-gray-600">🕓 Joined: {user?.metadata?.creationTime}</p>
                    </div>
                </div>

                <MyTasksInDashBoard userTasks={userTasks}></MyTasksInDashBoard>
            </div>

            

            {/* Sidebar */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="text-2xl menu p-4 w-60 rounded-tr-4xl rounded-br-4xl min-h-full bg-[#E9A5F1] text-base-content">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/addTasks"><li>Add Tasks</li></Link>
                    <Link to="/browseTasks"><li>All Tasks</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
