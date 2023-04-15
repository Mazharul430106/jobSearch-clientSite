import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Main from "../../../Layout/Main/Main";
import Register from "../../Register/Register";
import Login from "../../Login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])
