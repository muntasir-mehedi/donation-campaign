import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../pages/Home";
import Donation from "../pages/Donation";
import Statistics from "../pages/Statistics";
 


  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=> fetch('/public/Data.json')
        },
        {
            path:'/donation',
            element: <Donation></Donation>
        },
        {
            path:'/statistics',
            element: <Statistics></Statistics>
        }
      ]
    },
  ]);
export default router;