import React, { useContext, useState } from 'react';
import { authContext } from "../../Root/Root";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast, ToastContainer } from 'react-toastify';

const AddTasks = () => {

    const {user} = useContext(authContext);

    const [startDate , setStartDate] = useState(new Date())

    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const addTaskData = Object.fromEntries(formData.entries())
        // console.log(addTaskData);

        fetch('http://localhost:3000/tasks',{
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(addTaskData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("Data added",data)
            toast.success("New Task added successfully!")
        })

    }

    return (
        <>
            <ToastContainer></ToastContainer>        
            <div className="p-24">
            <div className="bg-purple-300 rounded-3xl p-12 text-center space-y-5">
                <h1 className="text-5xl text-black">Add New Task</h1>
                <form onSubmit={handleAddTask}>
                    <div className="mt-15 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label text-xl text-[#1B1A1A] font-bold">Task Title</label>
                            <input type="text" name="task_title" className="input w-full text-xl" placeholder="Enter task title"/>
                        </fieldset>
                        <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label text-xl text-[#1B1A1A] font-bold">Category</label>
                            <select className="text-xl text-[#1B1A1A] font-bold">
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
                            <input type="text" name="task_description" className="input w-full text-xl" placeholder="Enter task description"/>
                        </fieldset>
                        <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label text-xl text-[#1B1A1A] font-bold">Deadline </label>
                            <DatePicker className="input input-bordered w-full"
                                        selected={startDate}
                                        onChange={(date)=>setStartDate(date)}
                                        name="task_deadline"
                            >
                            </DatePicker>
                        </fieldset>
                        <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label text-xl text-[#1B1A1A] font-bold">Budget</label>
                            <input type="text" name="budget" className="input w-full text-xl" placeholder="Enter task budget"/>
                        </fieldset>
                        <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label text-xl text-[#1B1A1A] font-bold">User Name</label>
                            <input type="text" name="user_name" className="input w-full text-xl" placeholder={user.displayName} disabled={true}/>
                        </fieldset>
                        <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label  text-xl text-[#1B1A1A] font-bold">User Email</label>
                            <input type="text" name="email" className="input text-[#1B1A1A] w-full text-xl" placeholder={user.email} disabled={true}/>
                        </fieldset>
                    </div>
            
                    <button type="submit" className="mt-10 rounded-2xl btn w-1/6 text-black text-2xl bg-[#8F87F1] border-2 border-purple-800" value="">Add Task</button>
                </form>
            </div>
            </div>
        </>
        
    );
};

export default AddTasks;