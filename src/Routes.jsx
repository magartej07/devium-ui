import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import AppLayout from "./AppLayout";

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"",
        element:<Home/>,
      },
      {
        path:"auth/register",
        element:<Register/>,
      },
      {
        path:"auth/login",
        element:<Login/>,
      },
    ]
  },


])
const Routes = () => {
  return <RouterProvider router={router}/>
};
export default Routes;