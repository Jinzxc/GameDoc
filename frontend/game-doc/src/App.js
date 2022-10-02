import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Tasks from "./components/Tasks";
import Rewards from "./components/Rewards"

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <div>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/Tasks" element={<Tasks/>} />
            <Route path="/Rewards" element={<Rewards />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
