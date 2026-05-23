import { useContext } from "react";
import { NavbarContext } from "./NavbarContext";

const UserContainer = () => {
  // Using the context with the useContext hook
  const { user, logout, login } = useContext(NavbarContext);
  return (
    <div className="user-container">
      {user?.name ? (
        <div>
          <p>Hello there, {user.name.toUpperCase()}</p>
          <p>Age: {Number(user.age)}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <button className="btn" onClick={login}>
          Please login
        </button>
      )}
    </div>
  );
};

export default UserContainer;
