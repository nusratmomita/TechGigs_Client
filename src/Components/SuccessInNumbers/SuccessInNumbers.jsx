import React from 'react';
import CountUp from 'react-countup';
import { FaUsers, FaTasks, FaCheckCircle } from 'react-icons/fa';

const SuccessInNumbers = () => {
    const cardStyle =
        'bg-white rounded-2xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl';

    return (
        <div className='mt-20 text-center px-4'>
            <h1 className="text-5xl md:text-7xl font-extrabold text-blue-400 mb-12 animate-fade-in">
                | Join Our Team |
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {/* Users Joined */}
                <div className={cardStyle}>
                    <FaUsers className="text-blue-500 text-5xl mb-4 mx-auto animate-bounce" />
                    <h2 className="text-4xl font-bold text-blue-500">
                        <CountUp end={1500} duration={3} />+
                    </h2>
                    <p className="text-lg mt-2 text-gray-600">Users Joined</p>
                </div>

                {/* Tasks Posted */}
                <div className={cardStyle}>
                    <FaTasks className="text-violent-500 text-5xl mb-4 mx-auto animate-bounce" />
                    <h2 className="text-4xl font-bold text-green-500">
                        <CountUp end={3200} duration={3} />+
                    </h2>
                    <p className="text-lg mt-2 text-gray-600">Tasks Posted</p>
                </div>

                {/* Tasks Completed */}
                <div className={cardStyle}>
                    <FaCheckCircle className="text-purple-500 text-5xl mb-4 mx-auto animate-bounce" />
                    <h2 className="text-4xl font-bold text-purple-500">
                        <CountUp end={2800} duration={3} />+
                    </h2>
                    <p className="text-lg mt-2 text-gray-600">Tasks Completed</p>
                </div>
            </div>
        </div>
    );
};

export default SuccessInNumbers;
