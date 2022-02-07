import "./styles/App.css";
import { Nav } from "./components/Nav.jsx";
import { Landing } from "./components/Landing.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
  <div>
        <Routes>
            <Route path="/" element={<Nav />} />
        </Routes>
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
  </div>
  );
}

export default App;
