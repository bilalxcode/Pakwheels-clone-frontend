import "./App.css";
import EmailValidationPage from "./layout/emailValidation/EmailValidationPage";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import useAuth from "./utils/useAuth";
import SellVehiclePage from "./pages/SellVehiclePage";
import CarInfoPage from "./pages/CarInfoPage";
import Myads from "./pages/Myads";
import ErrorPage from "./layout/ErrorPage/ErrorPage";
import AdminLogin from "./layout/Admin/AdminLogin";
import AdminHome from "./layout/Admin/AdminHome";
function App() {
  const user = useSelector((state) => state.authentication.user);
  const userLoggedIn = useAuth();

  const generateProfilePath = () => (user?._id ? `/profile/${user._id}` : "/");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/verify",
      element: <EmailValidationPage />,
    },
    {
      path: generateProfilePath(),
      element: <Profile />,
    },
    {
      path: "/sell-vehicle/post-ad",
      element: user ? <SellVehiclePage /> : <p>Loading...</p>,
    },
    {
      path: "/sell-vehicle/post-ad/car",
      element: user ? <CarInfoPage /> : <p>Loading...</p>,
    },
    {
      path: "/my-ads",
      element: user ? <Myads /> : <p>Loading...</p>,
    },
    {
      path: "/admin",
      element: <AdminLogin />,
    },
    {
      path: "/admin/home",
      element: <AdminHome />,
    },
    {
      // Route for the error page
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
