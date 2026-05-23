import UserContainer from "./UserContainer";

const NavLinks = () => {
  return (
    <div>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li>
            <a href="#"></a>Home
          </li>
          <li>
            <a href="#"></a>About
          </li>
          <li>
            <a href="#"></a>Bio
          </li>
          <li>
            <a href="#"></a>Contact
          </li>
        </ul>
      </div>
      <img
        src="./senator.png"
        width="250"
        height="300"
        alt="logo"
        className="logo"
      />
      <UserContainer />
    </div>
  );
};

export default NavLinks;
