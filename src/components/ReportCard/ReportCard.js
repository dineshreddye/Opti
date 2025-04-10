import React from "react";
import { Card, Typography } from "antd";
import { LineChart, Line, ResponsiveContainer } from "recharts";

import "./ReportCard.css"; // Import the CSS file

const { Text } = Typography;

function ReportCard({
  title = "Revenue",
  value = "$0",
  data = [],
  color = "#1890ff",
  dotColor = "#9254de",
}) {
  return (
    <Card className="revenue-card" style={{ padding: 0 }}>
      {/* Title with Dot Indicator */}
      <div className="revenue-card-header">
        <div
          className="revenue-card-dot"
          style={{
            backgroundColor: dotColor,
            boxShadow: `0 0 10px 0 ${dotColor}`,
          }}
        />
        <Text strong style={{ color: dotColor }}>
          {title}
        </Text>
      </div>

      {/* Value Display */}
      <Text className="revenue-card-value">{value}</Text>

      {/* Line Chart */}
      <div className="revenue-card-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default ReportCard;
