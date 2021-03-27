import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import ChatApp from "./pages/ChatApp";
import SideNav from "./components/SideNav";
import CommentBox from "./pages/CommentBox";
import TabSelector from "./pages/TabSelector";
import Clock from "./pages/Clock";
import Snapshot from "./pages/Snapshot";
import { AdvancedTabSelectorSample } from "./pages/AdvancedTabSelector";
import NestedRoute from "./pages/NestedRoute";
import UseCallback from "./pages/UseCallback";
import UseMemo from "./pages/UseMemo";
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
