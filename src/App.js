import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";

 const AppLayout = () =>{
    return (
        <div>
            <HeaderComponent/>
            <BodyComponent/> 
        </div>
    )
 }

 const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "contact",
        element: <Contact />
    }
 ])

const route = ReactDOM.createRoot(document.getElementById("root"));

route.render(<RouterProvider router={appRouter }/>);