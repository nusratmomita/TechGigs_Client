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
  // console.log(user.displayName)
  // console.log(user.email)
  // console.log(user.email)

  const links = (
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/addTasks'>Add Tasks</NavLink></li>
      <li><NavLink to='/browseTasks'>Browse Tasks</NavLink></li>
      <li>
        <NavLink to={user ? `/myTasks/specific/${user.email}` : ""}>
          My Posted Tasks
        </NavLink>
      </li>
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
    <div id="header" className="navbar bg-base-100 shadow-lg flex gap-10 lg:gap-70 text-center">
        <div className="hidden lg:flex gap-5">
            <img className="w-35 h-25" src={siteLogo} alt="siteLogo" />
            <h1 className="mt-10 -ml-5 text-4xl font-bold">Tech<span className="underline text-purple-700">Gigs</span></h1>
        </div>
        <ul className="navLinks mt-5 text-xl font-bold flex gap-10">
            {
                links
            }
        </ul>
        <div className="lg:-ml-15 flex flex-col lg:flex-row justify-center items-center">
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
            className="react-switch"
            />        
          {
            user && user?.email ? 
            <div>
                <button className="" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
                  {
                    user?.photoURL ? <img className="w-20 h-20"src={user.photoURL} alt="userImg" /> :
                    <img className="w-20 h-20" src={defaultUserImg} alt="userImg" />
                  }
                  </button>
                <ul className="dropdown menu h-40 w-25 lg:w-35 rounded-box bg-base-100 shadow-sm"
                  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } }>
                  <li className="text-2xl text-center font-black mb-5">Hi, {user?.displayName ? user?.displayName : "User"} </li>
                  <li className="text-center"><button onClick={handleSignOut} className="flex justify-center items-center border-2 border-amber-900 text-2xl cursor-pointer bg-red-100 text-red-900 rounded-2xl p-3">Logout</button></li>
                </ul>          
            </div> 
            : 
            <div className="mt-5 text-xl font-bold flex gap-5">
              <NavLink to='/login'><button className="cursor-pointer bg-purple-100 text-purple-900 rounded-2xl p-3">Login</button></NavLink>
              <NavLink to='/register'><button className="cursor-pointer bg-purple-900 text-white rounded-2xl p-3">Register</button></NavLink>
            </div>
          }
        </div>
    </div>
      
  );
};

export default Header;