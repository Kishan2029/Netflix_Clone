import React from "react";
import "../CssFiles/App.css";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = null;
  return (
    <div className="app">
      {/* <HomeScreen /> */}
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
