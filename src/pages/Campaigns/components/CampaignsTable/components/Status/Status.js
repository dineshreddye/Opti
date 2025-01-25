import React from "react";

function Status({ isActive }) {
  const dotStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: isActive ? "green" : "red",
  };

  return <div style={dotStyle} />;
}

export default Status;
