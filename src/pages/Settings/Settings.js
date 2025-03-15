import React from "react";
import Users from "./Users";

function Settings({ subDomain }) {
  return (
    <div>
      <Users subDomain={subDomain} />
    </div>
  );
}

export default Settings;
