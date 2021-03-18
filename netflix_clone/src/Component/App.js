import React,{useEffect} from "react";
import "../CssFiles/App.css";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "../firebase";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        console.log(userAuth);
      }else{

      }
      return unsubscribe;
    });
  }, []);

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
