/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Chart } from "react-google-charts";

function LineChart({ data }) {
  // Sample data based on the chart provided
  // const data = [
  //   ["Date", "Amount Spent", "Revenue", "Net", "ROI", "Clicks"],
  //   ["2024-12-01", 3000, 3200, 200, 1.07, 150],
  //   ["2024-12-02", 2800, 3000, 200, 1.07, 140],
  //   ["2024-12-03", 2500, 2700, 200, 1.08, 130],
  //   ["2024-12-04", 2200, 2400, 200, 1.09, 120],
  //   ["2024-12-05", 2000, 2200, 200, 1.1, 110],
  //   ["2024-12-06", 1800, 2000, 200, 1.11, 100],
  //   ["2024-12-07", 2000, 2100, 100, 1.05, 120],
  //   ["2024-12-08", 2200, 2400, 200, 1.09, 130],
  //   ["2024-12-09", 2400, 2600, 200, 1.08, 140],
  //   ["2024-12-10", 2600, 2800, 200, 1.07, 150],
  //   ["2024-12-11", 2500, 2600, 100, 1.04, 140],
  //   ["2024-12-12", 2300, 2400, 100, 1.04, 130],
  //   ["2024-12-13", 2000, 2100, 100, 1.05, 120],
  //   ["2024-12-14", 1800, 2000, 200, 1.11, 100],
  //   ["2024-12-15", 1700, 1800, 100, 1.06, 90],
  //   ["2024-12-16", 1500, 1600, 100, 1.07, 80],
  //   ["2024-12-17", 1400, 1500, 100, 1.07, 75],
  //   ["2024-12-18", 1300, 1400, 100, 1.08, 70],
  //   ["2024-12-19", 1200, 1300, 100, 1.08, 65],
  //   ["2024-12-20", 1100, 1200, 100, 1.09, 60],
  //   ["2024-12-21", 1000, 1100, 100, 1.1, 55],
  //   ["2024-12-22", 900, 1000, 100, 1.11, 50],
  //   ["2024-12-23", 800, 900, 100, 1.13, 45],
  //   ["2024-12-24", 700, 800, 100, 1.14, 40],
  //   ["2024-12-25", 600, 700, 100, 1.16, 35],
  //   ["2024-12-26", 500, 600, 100, 1.2, 30],
  //   ["2024-12-27", 400, 500, 100, 1.25, 25],
  //   ["2024-12-28", 300, 400, 100, 1.33, 20],
  //   ["2024-12-29", 200, 300, 100, 1.5, 15],
  //   ["2024-12-30", 100, 200, 100, 2, 10],
  // ];

  // Chart options
  const options = {
    // title: "Performance Metrics",
    curveType: "function",
    legend: { position: "top", alignment: "center" },
    hAxis: {
      // title: "Date",
      textStyle: { fontSize: 10 }, // Adjust font size if necessary
      slantedText: true, // Enables tilting
      slantedTextAngle: 45, // Tilt angle for the x-axis labels
    },
    vAxis: {
      // title: "Values",
      textStyle: { fontSize: 10 },
    },
    series: {
      0: { color: "red" }, // Amount Spent
      1: { color: "green" }, // Revenue
      2: { color: "cyan" }, // Net
      3: { color: "blue" }, // ROI
      4: { color: "orange" }, // Clicks
    },
    chartArea: {
      width: "90%",
      height: "70%",
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "0 auto",
      }}
    >
      <Chart
        chartType="LineChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  );
}

export default LineChart;
