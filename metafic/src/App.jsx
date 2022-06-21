import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomeRoute } from "./Components/Home";
import { RouteTwo } from "./Components/Routetwo";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        {/* <Route path="/routetwo" children={<RouteTwo user={user} />} /> */}
        <Route
          path="/routetwo"
          element={<RouteTwo render={(params) => ({ ...params })} />}
        />
      </Routes>
    </div>
  );
}

export default App;
