import { useState, useEffect } from "react";
import axios from "axios";
import { RouteTwo } from "./Routetwo";
import { Link, useNavigate } from "react-router-dom";
export const HomeRoute = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const info = "sam";
  const navigate = useNavigate();
  const fetchdata = (name) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => setData(res.data));
  };
  //   console.log(data);
  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <h1>Enter Names</h1>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => fetchdata(name)}>Enter</button>
      <br />
      {/* <Link to={"/routetwo/parameter-data"} state={{ true: true }}>
        Next page
      </Link> */}
      <button
        onClick={() =>
          navigate("/routetwo/parameter-data", { state: { state: data } })
        }
      >
        next page
      </button>
    </div>
  );
};
