import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path='/bubblesPage' component={BubblePage} /> 
      </div>
    </Router>
  );
}

export default App;