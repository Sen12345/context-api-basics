import { useState } from "react";
import NavLinks from "./NavLinks";
import { NavbarContext } from "./NavbarContext";

/*
This is where we set the state for the user and 
 the functions to login and logout. We then pass 
these values down to the children components using 
the Provider component from the NavbarContext. 
The value prop of the Provider is an object that
contains the user, logout, and login functions. 
*/

// Parent Component
const Navbar = () => {
  // State for user information
  const [user, setUser] = useState({ name: "Bob", age: 30 });

  // Function to log out the user by setting user state to null
  const logout = () => {
    setUser(null);
  };

  // Function to log in the user by setting user state to a predefined object
  const login = () => {
    setUser({ name: "Bob", age: 30 });
  };
  return (
    // Providing the context values to child components
    <NavbarContext.Provider value={{ user, logout, login }}>
      {/* The rest of the navbar UI */}
      <div className="nav-container">
        <nav className="navbar">
          <NavLinks />
        </nav>
        <h5>Context API In Use</h5>
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
