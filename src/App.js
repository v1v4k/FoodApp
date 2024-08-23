import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
import { useState } from "react";

import UserContext from "./components/UserContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

import Cart from "./components/Cart";

const Grocery = lazy(()=>import("./components/Grocery"))

const About = lazy(()=>import("./components/About"))

 const AppLayout = () =>{

    
    const [userName, setUserName] = useState();
    
    //authentication
    useEffect(()=>{
        //make an api call and send username and password
        const data = {
           name: "Vivek Reddy" 
        }
        setUserName(data.name)
        
    },[])

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div>
            <HeaderComponent/>
            <Outlet/> 
        </div>
        </UserContext.Provider>
        </Provider>
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
            },
            {
                path: "/cart",
                element: <Cart />

            }
        ],
        errorElement: <ErrorPage />
    },
    
 ])

const route = ReactDOM.createRoot(document.getElementById("root"));

route.render(<RouterProvider router={appRouter }/>);