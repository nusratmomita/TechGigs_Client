import React, { useContext } from "react";
import siteLogo from "../../assets/SiteLogo.png";
import { NavLink } from "react-router";
import './Header.css'
import { authContext } from "../../Root/Root";
import { toast } from "react-toastify";

const Header = () => {
  const {user,handleLogout} = useContext(authContext);
  console.log(user)
  const links = (
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/addTasks'>Add Tasks</NavLink></li>
      <li><NavLink to='/browseTasks'>Browse Tasks</NavLink></li>
      <li><NavLink to='/myTasks'>My Posted Tasks</NavLink></li>
    </>
  );

  const handleSignOut = () => {
    handleLogout()
    .then(() => {
      toast.success("You've signed out successfully")
    }).catch(() => {
      // An error happened.
    });

  }
  return (
    <div className="navbar bg-base-100 shadow-sm flex gap-70 text-center">
        <div  className="flex">
            <img className="w-35 h-25" src={siteLogo} alt="siteLogo" />
            <h1 className="mt-10 -ml-5 text-4xl font-bold">Tech<span className="underline text-purple-700">Gigs</span></h1>
        </div>
        <ul className="navLinks mt-5 text-xl font-bold flex gap-10">
            {
                links
            }
        </ul>
        {
          user && user.email ? 
          <div className="flex">
            <button onClick={handleSignOut} className="cursor-pointer bg-purple-100 text-purple-900 rounded-2xl p-3">Logout</button>
            <img src={user.photoURL} alt="userImage"></img>
          </div>
           : 
          <div className="mt-5 text-xl font-bold flex gap-5">
            <NavLink to='/login'><button className="cursor-pointer bg-purple-100 text-purple-900 rounded-2xl p-3">Login</button></NavLink>
            <NavLink to='/register'><button className="cursor-pointer bg-purple-900 text-white rounded-2xl p-3">Register</button></NavLink>
          </div>
        }
    </div>
      
  );
};

export default Header;
