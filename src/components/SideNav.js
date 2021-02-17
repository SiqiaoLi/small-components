import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const { pathname } = useLocation();

  return (
    <ul className="menu-list">
      <Link to="/chat">
        <li className={`${pathname === "/chat" ? "is-active" : ""}`}>
          chat-app
        </li>
      </Link>
    </ul>
  );
};

export default SideNav;
