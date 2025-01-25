import React from "react";
import { Spin } from "antd";

import "./Loader.css"; // Import the CSS file for styling

function Loader({ loading = true, tip = "Loading..." }) {
  if (!loading) {
    return null; // Render nothing if not loading
  }

  return (
    <div className="full-screen-loader">
      <Spin size="large" tip={tip} />
    </div>
  );
}

export default Loader;
