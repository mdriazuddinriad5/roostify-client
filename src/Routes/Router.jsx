import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import RoomDetails from "../pages/Rooms/RoomDetails";
import Bookings from "../pages/Bookings/Bookings";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";



const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            },
            {
                path: '/roomDetails/:id',
                element: <RoomDetails></RoomDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
            },
            {
                path: '/bookings',
                element: <Bookings></Bookings>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ])
    }
])

export default Router;