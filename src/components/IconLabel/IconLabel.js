import React from "react";

import { Space } from "antd";
import Icon from "@ant-design/icons";

function IconLabel({ icon, label }) {
  return (
    <Space>
      <Icon component={icon} />
      <span>{label}</span>
    </Space>
  );
}

export default IconLabel;
