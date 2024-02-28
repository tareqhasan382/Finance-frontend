import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import App from "../App";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import NotFound from "../screens/NotFound";
import User from "../screens/User";
import AgentPage from "../screens/AgentPage";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import AllUsers from "../components/AllUsers";
import Agents from "../components/Agents";
import Transaction from "../screens/Transaction";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/agent",
        element: <AgentPage />,
      },
      {
        path: "/transaction",
        element: <Transaction />,
      },
      {
        path: "/users",
        element: <AllUsers />,
      },
      {
        path: "/agents",
        element: <Agents />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  //   {
  //     path: "/dashboard",
  //     element: <Dashboard />,
  //     children: [
  //       {
  //         path: "/dashboard",
  //         element: <AllFood />,
  //       },
  //       {
  //         path: "/dashboard/add",
  //         element: <FromPage />,
  //       },
  //     ],
  //   },
]);
export default routes;