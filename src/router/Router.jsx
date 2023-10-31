import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { Outlet } from "react-router-dom";
import HomePageForUser from "../pages/userPage/HomePageForUser";
import RegisterPageForUser from "../pages/userPage/RegisterPageForUser";
import { RouterProvider } from "react-router-dom";
import TopUpToAmoutPage from "../pages/userPage/PaymentFlowPage/TopUpToAmoutPage";
import TopUpToMyWalletPage from "../pages/userPage/PaymentFlowPage/TopUpToMyWalletPage";
import QRcodePaymentPage from "../pages/userPage/PaymentFlowPage/QRcodePaymentPage";
import TopUpSuccess from "../pages/userPage/PaymentFlowPage/TopUpSuccess";
import TopUpFail from "../pages/userPage/PaymentFlowPage/TopUpFail";
import RedirectIfAuthenticated from "../feature/auth/RedirectIfAuthenticated";
import RedirectIfNotAuthenticated from "../feature/auth/RedirectIfNotAuthenticated";

const router = createBrowserRouter([
  {
    path: "login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/register",
    element: (
      <RedirectIfAuthenticated>
        <RegisterPageForUser />,
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/",
    element: (
      <RedirectIfNotAuthenticated>
        <Outlet />
      </RedirectIfNotAuthenticated>
    ),
    children: [
      { path: "/", element: <HomePageForUser /> },

      { path: "/topup", element: <TopUpToAmoutPage /> },
      { path: "/topupmywallet", element: <TopUpToMyWalletPage /> },
      { path: "/qrcode", element: <QRcodePaymentPage /> },
      { path: "/successtopup", element: <TopUpSuccess /> },
      { path: "/failtopup", element: <TopUpFail /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
