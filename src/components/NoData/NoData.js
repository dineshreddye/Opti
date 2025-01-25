import React from "react";
import { Empty } from "antd";

function NoData() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Empty description="No Data" />
    </div>
  );
}

export default NoData;
