import React from 'react';
import hired from '../../assets/hired.png'
import first from '../../assets/first.png'

const FreelancerEmployer = () => {
    return (
        <div className='mt-40'>
            <h1 className="text-7xl text-center font-extrabold text-purple-400">| Success Well |</h1>
            <div className='mt-20 flex gap-20 justify-center items-center'>
                {/* employers */}
                <div className='p-10 text-center bg-blue-200 border-2 border-blue-900 rounded-4xl'>
                    <div className='flex gap-2'>
                        <h1 className='mt-5 flex gap-4 text-3xl font-extrabold'>Recently Hired From our site</h1>
                        <img className="w-16 h-16" src={hired} alt="hired" />
                    </div>
                    <ul className='mt-5'>
                        <li className='text-2xl font-bold'>Picker's Pick Company</li>
                        <li className='text-2xl font-bold'>Gamers DevLoop</li>
                        <li className='text-2xl font-bold'>WriteFy</li>
                        <li className='text-2xl font-bold'>Mr.Perry</li>
                    </ul>
                </div>
                {/* freelancers */}
                 <div className='p-10 text-center bg-pink-200 border-2 border-pink-900 rounded-4xl'>
                    <div className='flex gap-2'>
                        <h1 className='mt-5 flex gap-4 text-3xl font-extrabold'>Got First Task From our site</h1>
                        <img className="w-16 h-16" src={first} alt="first" />
                    </div>
                    <ul className='mt-5'>
                        <li className='text-2xl font-bold'>Mr.David Howling</li>
                        <li className='text-2xl font-bold'>Ms.Jenner</li>
                        <li className='text-2xl font-bold'>Lisa Cox</li>
                        <li className='text-2xl font-bold'>Akash Khan</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FreelancerEmployer;