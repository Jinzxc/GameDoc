import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Rewards from "./components/Rewards"
import TaskPage from "./pages/TaskPage";
import QuestionCard from "./components/QuestionCard";
import QuestionPage from "./pages/QuestionPage";

const App = () => {
  return (
      <div className="App" style={{backgroundColor: 'floralwhite'}}>
        <BrowserRouter>
        <NavigationBar />
        <div>
          <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/Rewards" element={<Rewards />} />
            <Route path="/Questions" element={<QuestionPage ids={[0,1,2]} />} />
          </Routes>
        </div>
        </BrowserRouter>
      </div>
  );
};

export default App;
