import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../pages/Home";
import Donation from "../pages/Donation";
import Statistics from "../pages/Statistics";
import Error from "../pages/Error";
import ShowCard from "../components/card/ShowCard";

 


  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
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
        },
        {
          path:'/showdetails/:id',
          element:<ShowCard></ShowCard>,
          loader: ()=> fetch('/public/Data.json')
        }
      ]
    },
  ]);
export default router;