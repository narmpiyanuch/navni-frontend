import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { Outlet } from "react-router-dom";
import HomePageForUser from "../pages/userPage/HomePageForUser";
import RegisterPageForUser from "../pages/userPage/RegisterPageForUser";
import { RouterProvider } from "react-router-dom";
import RedirectIfAuthenticated from "../feature/auth/RedirectIfAuthenticated";

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
    path: "/",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      { path: "/", element: <HomePageForUser /> },
      { path: "/register", element: <RegisterPageForUser /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
