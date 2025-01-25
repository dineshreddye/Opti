import React, { useState } from "react";

import { Typography } from "antd";

import moment from "moment";
import DateFilter from "../../components/DateFilter";
import ReportsByMetrics from "./components/ReportsByMetrics";
import ConsolidatedGraph from "./components/ConsolidatedGraph";

import { filterByDateRange } from "../../utils/common.utils";
import { parseDataForConsolidatedGraph } from "./dashboard.helper";

import Topcharts from "./components/Topcharts/Topcharts";
import useMobile from "../../hooks/useMobile";

const { Title } = Typography;

function Dashboard({ allData }) {
  const [data, setData] = useState([]);
  const [currentDateFilterLabel, setCurrentDateFilterLabel] = useState("");
  const isMobile = useMobile();

  const handleDateFilter = (start, end, dateFilterLabel) => {
    const filteredData = filterByDateRange(
      allData,
      moment(start).toDate(),
      moment(end).toDate(),
    );

    setData(filteredData);
    setCurrentDateFilterLabel(dateFilterLabel);
  };

  return (
    <div>
      <div className="flex justify-between mb-2 items-center">
        <Title level={isMobile ? 3 : 2}>Welcome,</Title>
        <DateFilter onFilter={handleDateFilter} />
      </div>
      <ReportsByMetrics metrics={data} />
      <ConsolidatedGraph
        dateFilterLabel={currentDateFilterLabel}
        data={parseDataForConsolidatedGraph(data)}
      />
      <Topcharts data={data} />
    </div>
  );
}

export default Dashboard;
