import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const { pathname } = useLocation();

  return (
    <ul className="menu-list">
      <Link to="/chat">
        <li className={`${pathname === "/chat" ? "is-active" : ""}`}>
          Chat App
        </li>
      </Link>
      <Link to="/comment">
        <li className={`${pathname === "/comment" ? "is-active" : ""}`}>
          Comment Box
        </li>
      </Link>
      <Link to="/tab-selector">
        <li className={`${pathname === "/tab-selector" ? "is-active" : ""}`}>
          Tab Selector
        </li>
      </Link>
      <Link to="/clock">
        <li className={`${pathname === "/clock" ? "is-active" : ""}`}>Clock</li>
      </Link>
    </ul>
  );
};

export default SideNav;
