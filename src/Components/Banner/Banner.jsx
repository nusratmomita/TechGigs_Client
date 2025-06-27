import React from "react";
import digitalMarketing from "../../assets/digitalmarketing.png"
import contentWriting from "../../assets/contentwriting.png"
import uiux from "../../assets/uiux.png"
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
  return (
    <div id='banner' className="m-50 rounded-3xl h-[500px] flex items-center justify-center bg-[#E9A5F1]">
        <div className="carousel w-full max-w-7xl rounded-box">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="m-20 flex flex-col lg:flex-row gap-30 justify-center items-center">
                    <img src={digitalMarketing} className="bg-purple-100 p-10 w-full h-1/3 object-cover rounded-box" />
                    <div>
                        <h1 className="text-3xl font-bold">
                            Hire A Digital Market {' '}
                            <span style={{ color: 'black', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={['Expert']}
                                    loop={5}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                        <p className="text-xl font-medium">Marketing your product in this AI era can be very tough. We will make it easier for you.So Register Now!</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
            <div className="m-20 flex flex-col lg:flex-row gap-30 justify-center items-center">
                    <img src={contentWriting} className="bg-orange-100 p-10 w-full h-1/3 object-cover rounded-box" />
                    <div>
                        <h1 className="text-3xl font-bold">
                            Hire A Content {' '}
                            <span style={{ color: 'black', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={['Writer']}
                                    loop={5}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                        <p className="text-xl font-medium">Writing content for your product can be very tough. We will make it easier for you.We've experts just for your need.Register Now to win world with writing!</p>
                    </div>
                </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
            <div className="m-20 flex flex-col lg:flex-row gap-30 justify-center items-center">
                    <img src={uiux} className="bg-purple-100 p-10 w-full h-1/3 object-cover rounded-box" />
                    <div>
                        <h1 className="text-3xl font-bold">
                            Hire A Digital Market {' '}
                            <span style={{ color: 'black', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={['Specialist']}
                                    loop={5}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                        <p className="text-xl font-medium">Making UI and doing UX is developers worst dream.Here we help coders to get the best design.So Register Now , hire Website designers & just chill & CODE:)</p>
                    </div>
                </div>            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
            </div>
        </div>
    </div>

  );
};

export default Banner;
