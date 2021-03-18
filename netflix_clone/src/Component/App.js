import React,{useEffect} from "react";
import "../CssFiles/App.css";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "../firebase";
import {useDispatch} from "react-redux"
import {login, logout} from "../userSlice"

function App() {
  const user = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        //Logged In
        console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email: userAuth.email
        }))
      }else{
        //Logged Out
        dispatch(logout);
      }
      
    });
    return unsubscribe;
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
