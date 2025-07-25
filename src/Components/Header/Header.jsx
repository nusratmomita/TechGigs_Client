import React, { useContext } from "react";
import siteLogo from "../../assets/SiteLogo.png";
import { NavLink } from "react-router";
import './Header.css'
import { authContext } from "../../Root/Root";
import { toast } from "react-toastify";
import defaultUserImg from "../../assets/user.png";
import ReactSwitch from 'react-switch';


const Header = ({toggleTheme, theme}) => {
  const {user,handleLogout} = useContext(authContext);

  const links = (
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/addTasks'>Add Tasks</NavLink></li>
      <li><NavLink to='/browseTasks'>Browse Tasks</NavLink></li>
      <li>
        <NavLink to={user ? `/myTasks/specific/${user.email}` : "/login"}>
          My Posted Tasks
        </NavLink>
      </li>
      <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>
  );

  const handleSignOut = () => {
    handleLogout()
    .then(() => {
      toast.success("You've signed out successfully")
    })
    .catch(() => {
    });

  }
  return (
    <div id="header" className="navbar bg-base-100 shadow-lg flex gap-10 lg:gap-70 text-center p-5 fixed top-0 z-10 ">
        <div className="hidden lg:flex gap-5">
            <img className="w-35 h-25" src={siteLogo} alt="siteLogo" />
            <h1 className="mt-10 -ml-7 text-4xl font-bold">Tech<span className="underline text-purple-700">Gigs</span></h1>
        </div>
        <ul className="navLinks mt-5 text-xl font-bold flex gap-5 lg:whitespace-nowrap">
            {
                links
            }
        </ul>
        <div className="flex gap-4 flex-row lg:flex-row justify-center items-center">
          {
            user && user?.email ? 
            <div>
                {
                  user?.photoURL ? 
                  <div className="mt-5 flex flex-row-reverse justify-center items-center gap-4 lg:-ml-30">
                    <button className="text-center flex justify-center items-center border-2 border-purple-900 text-2xl cursor-pointer bg-purple-100 text-purple-900 rounded-2xl p-3" onClick={handleSignOut} >Logout</button>
                    <img className=" w-30 h-15 rounded-full"src={user.photoURL} alt="userImg" />
                  </div>
                  :
                  <div>                      
                    <img className="w-20 h-20" src={defaultUserImg} alt="userImg" />
                  </div>
                }  
            </div> 
            : 
            <div className="mt-5 text-xl font-bold flex flex-col lg:flex-row gap-5">
              <NavLink to='/login'><button className="cursor-pointer bg-purple-100 text-purple-900 rounded-2xl p-3">Login</button></NavLink>
              <NavLink to='/register'><button className="cursor-pointer bg-purple-900 text-white rounded-2xl p-3">Register</button></NavLink>
            </div>
          }
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === "dark"}
            checkedIcon={
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 18,
                color: "white",
                paddingLeft: 5
              }}>
                  🌙
              </div>
            }
            uncheckedIcon={
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 18,
                color: "black",
                paddingRight: 2
              }}>
                ☀️
              </div>
            }
            offColor="#EF88AD"     
            onColor="#7965C1"    
            onHandleColor="#483AA0" 
            offHandleColor="#FBE4D6"
            handleDiameter={30}
            height={40}
            width={90}
            className="react-switch mt-6"
          />  
        </div>
    </div>
      
  );
};

export default Header;