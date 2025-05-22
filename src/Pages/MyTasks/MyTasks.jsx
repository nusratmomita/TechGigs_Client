import React from 'react';
import { useLoaderData } from 'react-router';

const MyTasks = () => {
    const myPostedTasks = useLoaderData();
    console.log(myPostedTasks);
    
    
    return (
        <div>
            My Tasks
        </div>
    );
};

export default MyTasks;