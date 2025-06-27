import React from "react";
import siteLogo from "../../assets/SiteLogo.png";
import { FiLinkedin } from "react-icons/fi";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-60 rounded-2xl footer footer-horizontal footer-center bg-[#afa9ef] text-black p-5">
      <aside>
        <img className="w-20 h-25 rounded-3xl" src={siteLogo} alt="siteLogo" />
        <p className="font-bold text-4xl">
          Tech<span className="underline text-purple-900">Gigs</span>
          <br />
          [ Find Freelancer work from reputed companies easily ]
        </p>
      </aside>
      <div className="mt-10 flex flex-col gap-10 justify-between">
        <div>
            <h1 className="-mt-8 text-2xl font-bold">Important Links</h1>
            <ul className="text-xl">
              <Link to='/'><li>Home</li></Link>
              <Link to='/browseTasks'><li>Browse Tasks</li></Link>
              <Link to='/addTasks'><li>Add Tasks</li></Link>
            </ul>
        </div>
        <div>
            <h1 className="text-2xl font-bold">Contact Details</h1>
            <div className="flex gap-4 text-xl font-sans">
                <h2>Email: <a href="mailto:nusratmomita@gmail.com">Send Email</a></h2>
                <h2>Mobile Number: 0171241600</h2>
            </div>
        </div>
      </div>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <h1 className="text-xl font-mono">Connect With Us: </h1>
          <a target="_blank" href="https://x.com/NushrathH18021">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/nushrathmomita/">
           <FiLinkedin size={25}></FiLinkedin>
          </a>
          <a target="_blank" href="https://www.facebook.com/nushrathmomita/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
