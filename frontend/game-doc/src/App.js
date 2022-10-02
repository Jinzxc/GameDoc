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
import TaskPage from "./pages/TaskPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <div>
          <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/Tasks" element={<TaskPage/>} />
            <Route path="/Rewards" element={<Rewards />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
