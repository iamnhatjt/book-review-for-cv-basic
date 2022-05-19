import React from "react";
import Fixed from "./component/Fixed";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Disploy from "./component/Disloy";
import SetupRouter from "./SetupRouter";
import TopHot from "./component/Disloy/TopHot";
import Footer from "./component/Footer";

export default function App() {
  return (
    <Router>
      <div>
        <Fixed />
        <div className="contain bg-dark text-light">
          <Switch>
            <SetupRouter />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
