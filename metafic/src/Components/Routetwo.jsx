import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

export const RouteTwo = ({ element }) => {
  // const { type } = useParams();
  const { state } = useLocation().state;
  console.log(state.name);

  //   const [data, setData] = useState({});

  //   console.log(element.props.info, "other commponents");
  //   useEffect(() => {
  //     setData(element.props.info);
  //   }, []);

  return (
    <div>
      <p>{state.name}</p>
    </div>
  );
};
