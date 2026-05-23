import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/*
This is the main entry point for this React application 

This application demonstrates the use of the Context API in React. 
The Context API allows us to share state and functions across components 
without having to pass props down manually at every level using prop-drilling.

Importantly, the Navbar component is where we set up the context provider. 
We create a context using createContext and then use the Provider component 
to pass down the user state and the login/logout functions to any child 
components that need them. This way, we can access the user information 
and authentication functions from any component that consumes the context.

Improvements:
1. The Context API is currently set up in the Navbar component, which 
   is fine for this example.However, if we want to use the same context 
   across multiple components that are not nested under Navbar,
   we might want to create a global context provider component that wraps 
   the entire application or the relevant part of the component tree. 
   This would allow us to avoid having to wrap each 
   component that needs access to the context with the Navbar component.

2. The user state is currently hardcoded to a specific user object. 
   In a real application,we would likely want to implement a more 
   dynamic authentication system that allows for different users 
   to log in and out, and possibly persist the user state across 
   sessions using something like localStorage 
   or cookies.

3. The login and logout functions are currently very simple and just 
   set the user state to a predefined object or null. 
   In a real application, these functions would likely 
   involve more complex logic, such as making API calls to a backend 
   server to authenticate the user and retrieve their information.

Overall, this code provides a basic example of how to use the Context 
API in React to manage state and functions across 
components without prop-drilling.

Please check out my Github repositories for more coding example 
project on how to setup and implement a global context 
provider component that wraps the entire application or 
the relevant part of the component tree,
*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
