import "./App.css";
import Login from "./components/Authen/Login";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import RightSide from "./components/RigtSide/RightSide";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <div className="AppGlass">
          <Routes>
            <Route path="/dashboard" element={<Sidebar />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
