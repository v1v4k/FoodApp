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


# CHAPTER - 3

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