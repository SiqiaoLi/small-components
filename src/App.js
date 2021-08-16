import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import ChatApp from "./pages/ChatApp";
import SideNav from "./components/SideNav";
import CommentBox from "./pages/CommentBox";
import TabSelector from "./pages/TabSelector";
import Clock from "./pages/Clock";
import Snapshot from "./pages/Snapshot";
import Timer from "./pages/Timer";
import { AdvancedTabSelectorSample } from "./pages/AdvancedTabSelector";
import Search from "./pages/Search";
import NestedRoute from "./pages/NestedRoute";
import UseCallback from "./pages/UseCallback";
import UseMemo from "./pages/UseMemo";
import CustomHook from "./pages/CustomHook";
import UseScroll from "./pages/UseScroll";
import Debounce from "./pages/Debounce";
import ReactLoadable from "./pages/ReactLoadable";
import Counter from "./pages/Counter";
import UserList from "./pages/UserList";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <SideNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/userList" component={UserList} />
          <Route path="/chat" component={ChatApp} />
          <Route path="/comment" component={CommentBox} />
          <Route path="/tab-selector" component={TabSelector} />
          <Route path="/clock" component={Clock} />
          <Route path="/snapshot" component={Snapshot} />
          <Route
            path="/advanced-tab-selector"
            component={AdvancedTabSelectorSample}
          />
          <Route path="/nested-route" component={NestedRoute} />
          <Route path="/useCallback" component={UseCallback} />
          <Route path="/useMemo" component={UseMemo} />
          <Route path="/timer" component={Timer} />
          <Route path="/search" component={Search} />
          <Route path="/customHook" component={CustomHook} />
          <Route path="/useScroll" component={UseScroll} />
          <Route path="/debounce" component={Debounce} />
          <Route path="/reactLoadable" component={ReactLoadable} />
          <Route path="/counter" component={Counter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
