import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";

const Grocery = lazy(()=>import("./components/Grocery"))

const About = lazy(()=>import("./components/About"))

 const AppLayout = () =>{
    return (
        <div>
            <HeaderComponent/>
            <Outlet/> 
        </div>
    )
 }

 const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: "/",
                element: <BodyComponent />
            },
            {
                path: "grocery",
                element: <Suspense fallback = {<h1>Loading.......</h1>}><Grocery /></Suspense>
            },
            {
                path: "/about",
                element: <Suspense fallback = {<h1>Loading.......</h1>}><About /></Suspense>
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <ErrorPage />
    },
    
 ])

const route = ReactDOM.createRoot(document.getElementById("root"));

route.render(<RouterProvider router={appRouter }/>);