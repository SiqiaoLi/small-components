import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const { pathname } = useLocation();

  return (
    <ul className="menu-list">
      <Link to="/counter">
        <li className={`${pathname === "/counter" ? "is-active" : ""}`}>
          Counter
        </li>
      </Link>
      <Link to="/userList">
        <li className={`${pathname === "/userList" ? "is-active" : ""}`}>
          UserList
        </li>
      </Link>
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
      <Link to="/search">
        <li className={`${pathname === "/search" ? "is-active" : ""}`}>
          Search
        </li>
      </Link>
      <Link to="/debounce">
        <li className={`${pathname === "/debounce" ? "is-active" : ""}`}>
          Debounce search
        </li>
      </Link>
      <Link to="/customHook">
        <li className={`${pathname === "/customHook" ? "is-active" : ""}`}>
          CustomHook
        </li>
      </Link>
      <Link to="/useScroll">
        <li className={`${pathname === "/useScroll" ? "is-active" : ""}`}>
          UseScroll
        </li>
      </Link>
      <Link to="/reactLoadable">
        <li className={`${pathname === "/reactLoadable" ? "is-active" : ""}`}>
          ReactLoadable
        </li>
      </Link>
    </ul>
  );
};

export default SideNav;
