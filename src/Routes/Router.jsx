import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import RoomDetails from "../pages/Rooms/RoomDetails";
import Bookings from "../pages/Bookings/Bookings";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRouter";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FAQ from "../pages/FAQ/FAQ";
import AboutUs from "../pages/AboutUs/AboutUs";



const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                loader: ({ params }) => fetch(`https://roostify-server.vercel.app/rooms/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path:'/about',
                element: <AboutUs></AboutUs>
            }
        ])
    }
])

export default Router;