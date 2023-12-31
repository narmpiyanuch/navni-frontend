import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import RedirectIfAuthenticated from "../feature/auth/RedirectIfAuthenticated";
//import RedirectIfNotAuthenticated from "../feature/auth/RedirectIfNotAuthenticated";
import RedirectIfNotUserAuth from "../feature/auth/RedirectIfNotUserAuth";
import RedirectIfNotDriverAuth from "../feature/auth/RedirectIfNotDriverAuth";
import RedirectIfNotAdminAuth from "../feature/auth/RedirectIfNotAdminAuth";
import LoginPage from "../pages/LoginPage";
import HomePageForUser from "../pages/userPage/HomePageForUser";
import RegisterPageForUser from "../pages/userPage/RegisterPageForUser";
import TopUpToAmoutPage from "../pages/userPage/PaymentFlowPage/TopUpToAmoutPage";
import TopUpToMyWalletPage from "../pages/userPage/PaymentFlowPage/TopUpToMyWalletPage";
import QRcodePaymentPage from "../pages/userPage/PaymentFlowPage/QRcodePaymentPage";
import TopUpSuccess from "../pages/userPage/PaymentFlowPage/TopUpSuccess";
import TopUpFail from "../pages/userPage/PaymentFlowPage/TopUpFail";
import TaxiPage from "../pages/userPage/Booking/TaxiPage";
import ChooseNemberPeoplePage from "../pages/userPage/Booking/ChooseNemberPeoplePage";
import WaitingTaxiPage from "../pages/userPage/Booking/WaitingTaxiPage";
import ServiceSuccesPage from "../pages/userPage/Booking/ServiceSuccesPage";
import ServiceHistory from "../pages/userPage/ServiceHistory";
import InformationPage from "../pages/userPage/InformationPage";
import RegisterDriverPage from "../pages/driverPage/RegisterDriverPage";
import MyWalletPage from "../pages/userPage/MyWalletPage";
import HomeDriver from "../pages/driverPage/HomeDriver";
import StartDriverPage from "../pages/driverPage/StartDriverPage";
import ServiceHistoryDriver from "../pages/driverPage/ServiceHistoryDriver";
import ChatAdminPage from "../pages/adminPage/ChatAdminPage";
import AllDriverPage from "../pages/adminPage/AllDriverPage";
import LocationPage from "../pages/adminPage/LocationPage";
import AllDriverPendingPage from "../pages/adminPage/AllDriverPendingPage";

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
        <Outlet />
      </RedirectIfAuthenticated>
    ),
    children: [
      { path: "registerUser", element: <RegisterPageForUser /> },
      { path: "registerdriver", element: <RegisterDriverPage /> },
    ],
  },

  {
    path: "/",
    element: (
      <RedirectIfNotUserAuth>
        <Outlet />
      </RedirectIfNotUserAuth>
    ),

    children: [
      { path: "/", element: <Navigate replace to="/home" /> },
      { path: "/home", element: <HomePageForUser /> },
      { path: "/topup", element: <TopUpToAmoutPage /> },
      { path: "/topupmywallet", element: <TopUpToMyWalletPage /> },
      { path: "/qrcode", element: <QRcodePaymentPage /> },
      { path: "/mywallet", element: <MyWalletPage /> },
      { path: "/successtopup", element: <TopUpSuccess /> },
      { path: "/failtopup", element: <TopUpFail /> },
      { path: "/taxi", element: <TaxiPage /> },
      { path: "/numberpeople", element: <ChooseNemberPeoplePage /> },
      { path: "/waitingtaxi", element: <WaitingTaxiPage /> },
      { path: "/serviceend", element: <ServiceSuccesPage /> },
      { path: "/servicehistory", element: <ServiceHistory /> },
      { path: "/information", element: <InformationPage /> },
    ],
  },

  {
    path: "/",
    element: (
      <RedirectIfNotDriverAuth>
        <Outlet />
      </RedirectIfNotDriverAuth>
    ),

    children: [
      { path: "/registerdriver", element: <RegisterDriverPage /> },
      { path: "/servicehistorydriver", element: <ServiceHistoryDriver /> },
      { path: "/homedriver", element: <HomeDriver /> },
      { path: "/startdrive", element: <StartDriverPage /> },
    ],
  },
  {
    path: "/",
    element: (
      <RedirectIfNotAdminAuth>
        <Outlet />
      </RedirectIfNotAdminAuth>
    ),

    children: [
      { path: "/chatadmin", element: <ChatAdminPage /> },
      { path: "/alldriver", element: <AllDriverPage /> },
      { path: "/location", element: <LocationPage /> },
      { path: "/alldriverpendingpage", element: <AllDriverPendingPage /> },
    ],
  },

  // {
  //   path: "/",
  //   element: (
  //     <RedirectIfNotAuthenticated>
  //       <Outlet />
  //     </RedirectIfNotAuthenticated>
  //   ),

  //   children: [
  //     { path: "/", element: <Navigate replace to="/home" /> },
  //     { path: "/home", element: <HomePageForUser /> },
  //     { path: "/topup", element: <TopUpToAmoutPage /> },
  //     { path: "/topupmywallet", element: <TopUpToMyWalletPage /> },
  //     { path: "/qrcode", element: <QRcodePaymentPage /> },
  //     { path: "/mywallet", element: <MyWalletPage /> },
  //     { path: "/successtopup", element: <TopUpSuccess /> },
  //     { path: "/failtopup", element: <TopUpFail /> },
  //     { path: "/taxi", element: <TaxiPage /> },
  //     { path: "/numberpeople", element: <ChooseNemberPeoplePage /> },
  //     { path: "/waitingtaxi", element: <WaitingTaxiPage /> },
  //     { path: "/serviceend", element: <ServiceSuccesPage /> },
  //     { path: "/servicehistory", element: <ServiceHistory /> },
  //     { path: "/information", element: <InformationPage /> },
  //     { path: "/registerdriver", element: <RegisterDriverPage /> },
  //     { path: "/servicehistorydriver", element: <ServiceHistoryDriver /> },
  //     { path: "/homedriver", element: <HomeDriver /> },
  //     { path: "/startdrive", element: <StartDriverPage /> },
  //     { path: "/chatadmin", element: <ChatAdminPage /> },
  //     { path: "/alldriver", element: <AllDriverPage /> },
  //     { path: "/location", element: <LocationPage /> },
  //     { path: "/chatroom", element: <ChatRoom /> },
  //     { path: "/alldriverpendingpage", element: <AllDriverPendingPage /> },
  //   ],
  // },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
