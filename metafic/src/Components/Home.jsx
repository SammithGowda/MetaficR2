import { useState, useEffect } from "react";
import axios from "axios";
import { RouteTwo } from "./Routetwo";
export const HomeRoute = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const info = "sam";

  const fetchdata = (name) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => setData(res.data));
  };
  //   console.log(data);
  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <RouteTwo
        path="/routetwo"
        element={<RouteTwo render={(params) => ({ ...params })} info={data} />}
      />
      <h1>Enter Names</h1>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => fetchdata(name)}>Enter</button>
    </div>
  );
};
