import { createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import { Outlet } from "react-router-dom"
import HomePageForUser from "../pages/userPage/HomePageForUser"
import RegisterPageForUser from "../pages/userPage/RegisterPageForUser"
import { RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: 'login',
        element: <LoginPage />
    },
    {
        path: '/',
        element: (
            <div>
                <Outlet />
            </div>
        ), children: [
            { path: '/', element: <HomePageForUser /> },
            { path: '/register', element: <RegisterPageForUser /> }
        ]
    }
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}
