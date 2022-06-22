import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

export const RouteTwo = ({ element }) => {
  // const { type } = useParams();
  const { state } = useLocation().state;
  console.log(state.name);

  return (
    <div>
      <h1>UserInfo</h1>
      <p>{`Name: ${state.name}`}</p>
      <p>{`Height: ${state.height}`}</p>
      <p>{`Base Experience: ${state.base_experience}`}</p>
    </div>
  );
};
