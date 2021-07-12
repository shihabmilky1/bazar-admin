import React, { useState, createContext, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import PrivetRoute from './components/PrivetRoute/PrivetRoute'
export const AdminInfo = createContext()

function App() {

  const [admin, setAdmin] = useState({ email: "" })
  const [isAdmin, setIsAdmin] = useState({ isAdmin: false, message: '' })
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAdmin({ email: user.email })
      } else {
        setAdmin({ email: '' })
      }
    });
  }, [])
  return (
    <AdminInfo.Provider value={[admin, setAdmin, isAdmin, setIsAdmin]}>
      <Router>
        <Switch>
          <PrivetRoute exact path="/">
            <Dashboard />
          </PrivetRoute>
          <PrivetRoute path="/dashboard">
            <Dashboard />
          </PrivetRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </AdminInfo.Provider>

  );
}

export default App;
