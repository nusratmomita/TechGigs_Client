import React from "react";
import { GoVerified } from "react-icons/go";
import interiorDesigner from '../../assets/interiorDesigner.png'

const TopFreelancers = () => {
  return (
    <div className="mt-40">
      <h1 className="text-7xl text-center font-extrabold text-blue-400">
       | Meet Our Top 3 Freelancers of This Week |
      </h1>
      <div className="flex gap-10 justify-center items-center mt-10">
        <div className="card bg-base-100 w-100 shadow-sm">
            <figure className="px-10 pt-10">
            <img
                src={interiorDesigner}
                alt="gameDeveloper"
                className="rounded-xl bg-amber-500 border-2 border-amber-700"
            />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">Interior Designer</h2>
                <h1 className="text-2xl font-bold font-mono">Ms.Jenny Pearl</h1>
                <p className="text-xl">
                Completed 20 projects and highest payment received was $200k. Have experience of 5 years.
                </p>
                <button className="text-xl w-1/3 rounded-3xl btn bg-green-100 border-2 border-green-800 text-green-700"><GoVerified size={30} color='green'></GoVerified>Verified</button>
            </div>
      </div>
      <div className="card bg-base-100 w-100 shadow-sm">
            <figure className="px-10 pt-10">
            <img
                src="https://i.ibb.co/KjZBg0Kg/c7109d15fa91f781969931fa45e74bf9.jpg"
                alt="interiorDesigner"
                className="rounded-xl"
            />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">Game Developer</h2>
                <h1 className="text-2xl font-bold font-mono">Mr.Matthew Homes</h1>
                <p className="text-xl">
                    Developed An Unity Framework project under a prestigious company.Earned around $230k US dollers.
                </p>
                <button className="text-xl w-1/3 rounded-3xl btn bg-green-100 border-2 border-green-800 text-green-700"><GoVerified size={30} color='green'></GoVerified>Verified</button>
            </div>
      </div>
      <div className="card bg-base-100 w-100 shadow-sm">
            <figure className="px-10 pt-10">
            <img
                src="https://i.ibb.co/9krFwCsk/0d309bbc802545f9ef289357a3179b89.jpg"
                alt="digitalMarket"
                className="rounded-xl w-65 h-45"
            />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">Digital Marketer</h2>
                <h1 className="text-2xl font-bold font-mono">Mr.David Howling</h1>
                <p className="text-xl">
                    Got hired by Picker's Pick Company , suited in London with highest package. Have 10+ years of experiance.
                </p>
                <button className="text-xl  rounded-3xl btn bg-green-100 border-2 border-green-800 text-green-700">Not Verified</button>
            </div>
      </div>
      </div>
    </div>
  );
};

export default TopFreelancers;
