import {createBrowserRouter} from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTasks from "../Pages/AddTasks/AddTasks";
import BrowseTasks from "../Pages/BrowseTasks/BrowseTasks";
import MyTasks from "../Pages/MyTasks/MyTasks";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            },
            {
                path: "/addTasks",
                Component: AddTasks
            },
            {
                path: "/browseTasks",
                Component: BrowseTasks
            },
            {
                path: "/myTasks",
                Component: MyTasks
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            },
        ]
    }
])