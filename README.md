# CHAPTER-2
Package Manager (npm) - manages the packages for the project
    ==> npm init
    which adds pkg.json file to the folder which is a configuration for our npm

Learned about parcel(builder) which gives power(muscles) to our app(skeleton)
    ==> npm install-D parcel
    which adds pkg-lock.json and node_modules to our project

we don't push node_modules to github because we can regenerate them
    ==> npm install

we can execute the parcel package
    ==> npx parcel index.html

Installing "react" as a package to our project
    ==> npm install react
Installing "react-dom" as a package to our project
    ==> npm i react-dom

we can use the react for our application by importing from node_modules
    ==> import React from "react";
    ==> import ReactDom from "react-dom/client";

Error: Browsers scripts cannot have imports or exports
    add type="module" to the script
    <script type="module" src="./app.js"></script>

We can make our app compatible for older versions of browsers 
    we can configure  it in pkg.json by adding
        "browserslist": [
                "last 10 versions"
         ]
    we can check coverage of the browsers website: https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z


# CHAPTER-3
Configuring scripts for lengthy commands
    npx parcel index.html ~ npm run start ~ npm start
    npx parcel build index.html ~ npm run build

JSX is a xml/html like syntax
    JSX ==> react element (BABEL) ~ JS Object ==> html element (render)
    BABEL(minister) package is installed along with the PARCEL(Prime Minister)
    BABEL is a transpiler which converts JSX code to JS Object

React Component
    - class based (old)
    - functional based (new) 
    React Functional Component is a JS function which returns JSX code
    Naming of components should start with capital letter
    React component can be rendered by using render(<Component/> or {Component()})
    Component Composition - composing two components into one another
    We can put React element inside a Component(jsx) using {element}
    JSX takes care of injection attacks like cross-site scripting 

# CHAPTER-4
building a food app
inline css  {{}} ==> inner - it's a javascript code, outer - js object
Dynamically passing data
    passing data as props to a component 
    destructuring of data on fly
config driven UI's
using data from swiggy api for restaurant cards
we're building reusable cards and passing data to it through dynamic props
How to use for loop instead of array.map method ?
Iterating using array.map method (used this method very much in react)
Using keys while looping
    not using key (not acceptable) <<<< using index <<<<<< using unique id(best practice)
Optional Chaining

# CHAPTER-5
restrucuturing our app
two types of imports/exports
    default import/export
        export default Component;
        import Component from "path";
    named import/export
        export const variable/Component;
        import {Component} from "path";

Implementing filter button "Top Rated Restaurants" in our app
React Hooks - normal JS function which gives us state variables so that 
we can keep UI in sync with the DATA layer
whenever state variable changes React rerenders the component
Diff Algorithm(React Fiber)


# CHAPTERR - 6
monolith and microservices architecture
using swiggy live api instead of hard coded data (useEffect hook)
fetch, async, await
cors error
shimmer UI
login button in header
search feature in body 
fixing the bug in search feature

# CHAPTER - 7
more about useEffect hook
usage of useState hook
Routing in React
installing react-router-dom
    npm i react-rotuer-dom
importing the package
    import { createBrowserRouter, RouterProvider} from "react-router-dom";
using the hook
    const appRouter = createBrowserRouter([]);
using RouterProvider for rendering
    route.render(<RouterProvider router={appRouter }/>);
creating customised error page (Error Handling)
    we can use the hook import { useRouteError } from "react-router-dom"; to get more information 
    about the error.
Creating children routes to the "root route" ("/") i.e., the AppLayout component
    keeping the header page intact and only the BodyComponent should change while navigating b/w pages
    importing Outlet component from react-router-dom
        import {Outlet} from "react-router-dom";
        const AppLayout = () =>{
            return (
                <div>
                    <HeaderComponent/>
                    <Outlet/> 
                </div>
            )
        }
        rendering pages(components like body,about etc.,) through Outlet Component
Using "Link" component instead of anchor tages to navigate b/w the pages
    import {Link} from "react-router-dom";
Two types of routing
    server-side routing
        networks to load every page
    client-side routing (React follows this)
        No reloading while navigating b/w the pages
        only one network call when we load the page for the first time
        other network call is fetching the "swiggy api"
Dynamic Routing
    creating different pages for different restaurants
    using {params} hook in ResMenu to get resId from the url (/restaurants/resId)
        import { useParams } from "react-router-dom";
    using this resId in url to fetch the resMenu data
    destructuring the data should be done after checking for null with if statement orelse we get errors

# CHAPTER - 8
class based components vs functional components in the about page
passing props in class based components
using state variables in class based components
How state variables are updated in class based components



 