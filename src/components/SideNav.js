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
      <Link to="/snapshot">
        <li className={`${pathname === "/snapshot" ? "is-active" : ""}`}>
          Snapshot
        </li>
      </Link>
      <Link to="/advanced-tab-selector">
        <li
          className={`${
            pathname === "/advanced-tab-selector" ? "is-active" : ""
          }`}
        >
          Advanced-tab-selector
        </li>
      </Link>
      <Link to="/nested-route">
        <li className={`${pathname === "/nested-route" ? "is-active" : ""}`}>
          Nested-route
        </li>
      </Link>
      <Link to="/useCallback">
        <li className={`${pathname === "/useCallback" ? "is-active" : ""}`}>
          useCallback
        </li>
      </Link>
      <Link to="/useMemo">
        <li className={`${pathname === "/useMemo" ? "is-active" : ""}`}>
          useMemo
        </li>
      </Link>
      <Link to="/timer">
        <li className={`${pathname === "/timer" ? "is-active" : ""}`}>Timer</li>
      </Link>
    </ul>
  );
};

export default SideNav;
