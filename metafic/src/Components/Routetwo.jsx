import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

export const RouteTwo = ({ element }) => {
  // const { type } = useParams();
  const { state } = useLocation().state;
  console.log(state.moves[20].move);

  return (
    <div
      style={{
        width: "350px",
        border: "2px solid red",
        margin: "auto",
        textAlign: "center",
        marginTop: "80px",
      }}
    >
      <h1>UserInfo</h1>
      <p>{`Name: ${state.name}`}</p>
      <p>{`Height: ${state.height}`}</p>
      <p>{`Base Experience: ${state.base_experience}`}</p>
      <p>{`Weight: ${state.weight}`}</p>
    </div>
  );
};
