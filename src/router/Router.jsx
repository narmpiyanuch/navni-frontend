import { createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import { Outlet } from "react-router-dom"
import HomePageForUser from "../pages/userPage/HomePageForUser"
import RegisterPageForUser from "../pages/userPage/RegisterPageForUser"
import { RouterProvider } from "react-router-dom"
import TopUpToAmoutPage from "../pages/userPage/PaymentFlowPage/TopUpToAmoutPage"
import TopUpToMyWalletPage from "../pages/userPage/PaymentFlowPage/TopUpToMyWalletPage"
import QRcodePaymentPage from "../pages/userPage/PaymentFlowPage/QRcodePaymentPage"

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
            { path: '/register', element: <RegisterPageForUser /> },
            { path: '/topup', element: <TopUpToAmoutPage /> },
            { path: '/topupmywallet', element: <TopUpToMyWalletPage /> },
            { path: '/qrcode', element: <QRcodePaymentPage /> },


        ]
    }
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}
