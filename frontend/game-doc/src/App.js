import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

const NotFoundRedirect = () => <Navigate to="/home" />;
const NotFoundRedirectLanding = () => <Navigate to="/" />;

const App = () => {
  return;
  <Router path="/home"></Router>;
};

export default App;
