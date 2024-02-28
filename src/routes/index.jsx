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
import PrivateRoute from "../context/PrivateRoute";
import CashIn from "../components/CashIn";
import AgentTransaction from "../components/agentTransaction";
import AllAgent from "../components/AllAgent";


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
        element: <PrivateRoute><Home /></PrivateRoute>
      },
      {
        path: "/allAgent",
        element: <PrivateRoute><AllAgent /></PrivateRoute>
      },
      {
        path: "/user",
        element: <PrivateRoute><User /></PrivateRoute>,
      },
      {
        path: "/chasIn",
        element: <PrivateRoute><CashIn /></PrivateRoute>,
      },
      {
        path: "/agentTransaction",
        element: <PrivateRoute><AgentTransaction /></PrivateRoute>,
      },
      {
        path: "/agent",
        element: <PrivateRoute><AgentPage /></PrivateRoute>,
      },
      {
        path: "/transaction",
        element: <PrivateRoute><Transaction /></PrivateRoute>,
      },
      {
        path: "/users",
        element: <PrivateRoute><AllUsers /></PrivateRoute>,
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