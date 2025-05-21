import {createBrowserRouter} from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTasks from "../Pages/AddTasks/AddTasks";
import BrowseTasks from "../Pages/BrowseTasks/BrowseTasks";
import MyTasks from "../Pages/MyTasks/MyTasks";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import TaskDetails from "../Components/TaskDetails/TaskDetails";


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
                element: <PrivateRoute>
                            <AddTasks></AddTasks>
                        </PrivateRoute>
            },
            {
                path: "/browseTasks",
                loader: () => fetch('http://localhost:3000/tasks'),
                Component: BrowseTasks
            },
            {
                path: "/detailedTask/:id",
                loader: ({params}) => fetch(`http://localhost:3000/tasks/${params.id}`),
                Component: TaskDetails
            },
            {
                path: "/myTasks",
                element: <PrivateRoute>
                            <MyTasks></MyTasks>
                        </PrivateRoute>
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