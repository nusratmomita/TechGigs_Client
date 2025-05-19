import React from "react";
import siteLogo from "../../assets/SiteLogo.png";
import { NavLink } from "react-router";
import './Header.css'

const Header = () => {
  const links = (
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/addTasks'>Add Tasks</NavLink></li>
      <li><NavLink to='/browseTasks'>Browse Tasks</NavLink></li>
      <li><NavLink to='/myTasks'>My Posted Tasks</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm flex gap-70 text-center">
        <div  className="flex">
            <img className="w-35 h-25" src={siteLogo} alt="" />
            <h1 className="mt-10 -ml-5 text-4xl font-bold">Tech<span className="underline text-purple-700">Gigs</span></h1>
        </div>
        <ul className="navLinks mt-5 text-xl font-bold flex gap-10">
            {
                links
            }
        </ul>
        <div className="mt-5 text-xl font-bold flex gap-5">
        <NavLink to='/login'><button className="cursor-pointer bg-purple-100 text-purple-900 rounded-2xl p-3">Login</button></NavLink>
        <NavLink to='/register'><button className="cursor-pointer bg-purple-900 text-white rounded-2xl p-3">Register</button></NavLink>
        </div>
    </div>
      
  );
};

export default Header;
