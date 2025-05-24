import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { authContext } from "../../Root/Root";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const UpdateTasks = () => {
    const task = useLoaderData();
    // console.log(task);

    const {user} = useContext(authContext);
    // console.log(user)
    const [startDate , setStartDate] = useState(new Date())

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = user.email;
        const name = user.displayName;

        const formData = new FormData(form);

        const {...restFormData} = Object.fromEntries(formData.entries())
        
        const updatedTasks = {
            email,
            name,
            ...restFormData
        }
        // console.log(updatedTasks)

        fetch(`http://localhost:3000/tasks/${task._id}`,{
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedTasks)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("Data added",data)
            if(data.modifiedCount){
                toast.success("Your Task has been successfully updated!")
            }
            // form.reset()
        })
    }
    
    return (
        <>
            <ToastContainer></ToastContainer>  
            <Header></Header>      
            <div className="p-24">
            <div className="bg-purple-300 rounded-3xl p-12 text-center space-y-5">
                <h1 className="text-5xl text-black">Update Task</h1>
                <form onSubmit={handleUpdate}>
                    <div className="mt-15 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label text-xl text-[#1B1A1A] font-bold">Task Title</label>
                            <input type="text" name="task_title" className="input w-full text-xl" defaultValue={task.task_title} placeholder="Enter task title"/>
                        </fieldset>
                        <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label text-xl text-[#1B1A1A] font-bold">Category</label>
                            <select className="text-xl text-[#1B1A1A] font-bold" defaultValue={task.category}>
                                <option value="Web Development">Web Development</option>
                                <option value="Graphic Design">Graphic Design</option>
                                <option value="Content Writing">Content Writing</option>
                                <option value="Game Development">Game Development</option>
                                <option value="Video Editing">Video Editing</option>
                                <option value="App Development">App Development</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                            </select>
                        </fieldset>
                        <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label text-xl text-[#1B1A1A] font-bold">Description</label>
                            <input type="text" name="task_description" className="input w-full text-xl" defaultValue={task.task_description} placeholder="Enter task description"/>
                        </fieldset>
                        <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label text-xl text-[#1B1A1A] font-bold">Deadline </label>
                            <DatePicker className="input input-bordered w-full"
                                        defaultValue={task.task_deadline}
                                        selected={startDate}
                                        onChange={(date)=>setStartDate(date)}
                                        name="task_deadline"
                            >
                            </DatePicker>
                        </fieldset>
                        <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label text-xl text-[#1B1A1A] font-bold">Budget</label>
                            <input type="text" name="budget" className="input w-full text-xl" defaultValue={task.budget} placeholder="Enter task budget"/>
                        </fieldset>
                        <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label text-xl text-[#1B1A1A] font-bold">User Name</label>
                            <input type="text" name="name" className="input w-full text-xl" placeholder={user.displayName} disabled={true}/>
                        </fieldset>
                        <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label  text-xl text-[#1B1A1A] font-bold">User Email</label>
                            <input type="text" name="email" className="input text-[#1B1A1A] w-full text-xl" placeholder={user.email} disabled={true}/>
                        </fieldset>
                        <div className='bg-base-300 border-2 border-blue-600 text-center text-xl font-extrabold rounded-3xl'>
                            <h1 className='mt-5'>Total Bids For this task : <span className='text-2xl font-extrabold'>0</span></h1>
                            <Link to='/browseTasks'><h2 className='tooltip' data-tip="Click here to visit page">To increment it please go to browse task, click on See details button and change it</h2></Link>
                        </div>
                    </div>
                    <button type="submit" className="mt-10 rounded-2xl btn lg:w-1/6 text-black text-2xl bg-[#8F87F1] border-2 border-purple-800" value="">Update Task</button>
                </form>
            </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default UpdateTasks;