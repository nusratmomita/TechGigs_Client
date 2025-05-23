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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import IndividualErrorPage from "../Pages/IndividualErrorPage/IndividualErrorPage";
import UpdateTasks from "../Pages/UpdateTasks/UpdateTasks";


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
                element:<PrivateRoute>
                            <TaskDetails></TaskDetails>
                        </PrivateRoute>,
                // errorElement: <IndividualErrorPage></IndividualErrorPage>
            },
            {
                path: "/myTasks/specific/:email",
                loader: ({params}) => fetch(`http://localhost:3000/tasks/specific/${params.email}`),
                element:<PrivateRoute>
                            <MyTasks></MyTasks>
                        </PrivateRoute>
            },
            {
                path:'/update/:id',
                loader: ({params}) => fetch(`http://localhost:3000/tasks/${params.id}`),
                element: <PrivateRoute>
                            <UpdateTasks></UpdateTasks>
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
            {
                path: "*",
                Component: ErrorPage
            }
        ]
    }
])
