<<<<<<< HEAD
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
=======
import { createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import { Outlet } from "react-router-dom"
import HomePageForUser from "../pages/userPage/HomePageForUser"
import RegisterPageForUser from "../pages/userPage/RegisterPageForUser"
import { RouterProvider } from "react-router-dom"
import TopUpToAmoutPage from "../pages/userPage/PaymentFlowPage/TopUpToAmoutPage"
import TopUpToMyWalletPage from "../pages/userPage/PaymentFlowPage/TopUpToMyWalletPage"
import QRcodePaymentPage from "../pages/userPage/PaymentFlowPage/QRcodePaymentPage"
import TopUpSuccess from "../pages/userPage/PaymentFlowPage/TopUpSuccess"
import TopUpFail from "../pages/userPage/PaymentFlowPage/TopUpFail"
import TaxiPage from "../pages/userPage/Booking/TaxiPage"
import ChooseNemberPeoplePage from "../pages/userPage/Booking/ChooseNemberPeoplePage"
import WaitingTaxiPage from "../pages/userPage/Booking/WaitingTaxiPage"
import OnTheWayPage from "../pages/userPage/Booking/OnTheWayPage"
import ServiceSuccesPage from "../pages/userPage/Booking/ServiceSuccesPage"

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
      { path: '/successtopup', element: <TopUpSuccess /> },
      { path: '/failtopup', element: <TopUpFail /> },
      { path: '/taxi', element: <TaxiPage /> },
      { path: '/numberpeople', element: <ChooseNemberPeoplePage /> },
      { path: '/waitingtaxi', element: <WaitingTaxiPage /> },
      { path: '/ontheway', element: <OnTheWayPage /> },
      { path: '/serviceend', element: <ServiceSuccesPage /> },
    ]
  }
>>>>>>> develop
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
