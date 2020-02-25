import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import PrivateRoute from './utils/PrivateRoute';
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/colors" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
