import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomeRoute } from "./Components/Home";
import { RouteTwo } from "./Components/Routetwo";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/routetwo" element={<RouteTwo />} />
      </Routes>
    </div>
  );
}

export default App;
