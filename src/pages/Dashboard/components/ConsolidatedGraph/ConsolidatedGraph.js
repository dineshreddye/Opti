import React from "react";

import { Typography } from "antd";
import LineChart from "../../../../components/LineChart";
import NoData from "../../../../components/NoData";

const { Title } = Typography;

// function CustomLegend({ payload }) {
//   return (
//     <ul
//       style={{
//         listStyleType: "disc",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: 0,
//         margin: 0,
//         gap: "15px",
//       }}
//     >
//       {payload.map((entry, index) => (
//         <li
//           // eslint-disable-next-line react/no-array-index-key
//           key={`item-${index}`}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "5px",
//             color: entry.color,
//             fontSize: "14px",
//           }}
//         >
//           <span
//             style={{
//               width: "10px",
//               height: "10px",
//               backgroundColor: entry.color,
//               borderRadius: "50%",
//               display: "inline-block",
//             }}
//           />
//           {entry.value}
//         </li>
//       ))}
//     </ul>
//   );
// }

function ConsolidatedGraph({ dateFilterLabel, data }) {
  return (
    <div className="mt-16">
      <Title level={5} className="mb-8">
        {dateFilterLabel}
      </Title>
      <div
        style={{
          width: "100%",
          height: 400,
          border: "1px solid #f0f0f0",
          borderRadius: "8px",
        }}
      >
        {data.length > 0 && <LineChart data={data} />}
        {data.length === 0 && <NoData />}
      </div>
    </div>
  );
}

export default ConsolidatedGraph;

// <LineChart
//             data={data}
//             margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//           >
//             {/* <CartesianGrid /> */}
//             <XAxis dataKey="Date" tick={{ fontSize: 12 }} />
//             <YAxis tick={{ fontSize: 12 }} />
//             <Tooltip />
//             <Legend
//               content={<CustomLegend />}
//               verticalAlign="top"
//               align="right"
//               wrapperStyle={{
//                 top: 0,
//                 right: 0,
//                 padding: "10px",
//               }}
//             />

//             {/* Area for Shaded Background */}
//             <defs>
//               <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
//                 <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
//               </linearGradient>
//             </defs>

//             {/* Line Chart Lines */}
//             <Line
//               type="monotone"
//               dataKey="Amount Spent"
//               stroke="#ff7300"
//               strokeWidth={2}
//               dot={false}
//               connectNulls
//             />
//             <Line
//               type="monotone"
//               dataKey="Revenue"
//               stroke="#387908"
//               strokeWidth={2}
//               dot={false}
//               connectNulls
//             />
//             <Line
//               type="monotone"
//               dataKey="NET"
//               stroke="#8884d8"
//               strokeWidth={2}
//               dot={false}
//               connectNulls
//             />
//             <Line
//               type="monotone"
//               dataKey="ROI"
//               stroke="#003f5c"
//               strokeWidth={2}
//               dot={false}
//               connectNulls
//             />
//             <Line
//               type="monotone"
//               dataKey="Link Clicks"
//               stroke="#845EC2"
//               strokeWidth={2}
//               dot={false}
//               connectNulls
//             />
//           </LineChart>
