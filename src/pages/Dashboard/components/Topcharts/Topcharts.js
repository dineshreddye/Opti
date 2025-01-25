import React, { useState, useEffect } from "react";
import { Typography } from "antd";

import Table from "../../../../components/Table";
import { groupAndSortWithSumByKeyName } from "../../../../utils/common.utils";
import {
  PERFORMANCE_BY_AD_ACCOUNT_TABLE_CONFIG,
  TRAFFIC_SOURCE_TABLE_CONFIG,
} from "./topCharts.config";

import "./Topcharts.css";
import useMobile from "../../../../hooks/useMobile";
import { CAMPAIGN_KEYS } from "../../../../constants/common";

const { Title } = Typography;

// Define components outside of the render function
const components = {
  header: {
    cell: ({ style, ...props }) => (
      <th
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        style={{
          ...style,
          backgroundColor: "white", // Custom background color
          color: "#000", // Custom text color
          fontWeight: "bold",
        }}
      />
    ),
  },
};

function Topcharts({ data }) {
  const [topchartsData, setTopchartsData] = useState({});
  const isMobile = useMobile();

  useEffect(() => {
    const trafficSourceData = groupAndSortWithSumByKeyName(
      data,
      CAMPAIGN_KEYS.TRAFFIC_SOURCE,
    ).slice(0, 5);
    const performanceByAdAccount = groupAndSortWithSumByKeyName(
      data,
      CAMPAIGN_KEYS.ADACCOUNT,
    );
    setTopchartsData((prev) => {
      return {
        ...prev,
        trafficSourceData: {
          data: trafficSourceData,
          columns: TRAFFIC_SOURCE_TABLE_CONFIG.columns,
        },
        performanceByAdAccount: {
          data: performanceByAdAccount,
          columns: PERFORMANCE_BY_AD_ACCOUNT_TABLE_CONFIG.columns,
        },
      };
    });
  }, [data]);

  const { trafficSourceData, performanceByAdAccount } = topchartsData;

  console.log({ trafficSourceData });

  return (
    <div className="mt-16">
      <div className="flex items-start justify-between">
        <div className="overflow-scroll width48">
          <Title level={isMobile ? 5 : 4}>Performance by Traffic Source</Title>
          <Table
            pagination={false}
            columns={trafficSourceData?.columns}
            data={trafficSourceData?.data}
            rowKey="key"
            components={components}
          />
        </div>
        <div className="overflow-scroll width48">
          <Title level={isMobile ? 5 : 4}>Performance by Ad Account Name</Title>
          <Table
            pagination={false}
            columns={performanceByAdAccount?.columns}
            data={performanceByAdAccount?.data}
            rowKey="key"
            components={components}
          />
        </div>
      </div>
    </div>
  );
}

export default Topcharts;
