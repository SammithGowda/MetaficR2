import { useState, useEffect } from "react";

export const RouteTwo = ({ element }) => {
  //   const [data, setData] = useState({});
  const data = element.props.info;

  //   console.log(element.props.info, "other commponents");
  //   useEffect(() => {
  //     setData(element.props.info);
  //   }, []);
  console.log(data);
  return <div>Routetwo</div>;
};
