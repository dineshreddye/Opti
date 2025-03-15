import React, { useMemo, useState } from "react";

import { Typography } from "antd";
import _tail from "lodash/tail";
import _filter from "lodash/filter";
import moment from "moment";
import DateFilter from "../../components/DateFilter";
import ReportsByMetrics from "./components/ReportsByMetrics";
import ConsolidatedGraph from "./components/ConsolidatedGraph";

import { filterByDateRange } from "../../utils/common.utils";
import { parseDataForConsolidatedGraph } from "./dashboard.helper";

import Topcharts from "./components/Topcharts/Topcharts";
import useMobile from "../../hooks/useMobile";
import { PARTNER, PARTY_LABELS } from "../../constants/common";

const { Title } = Typography;

const options = [
  { value: "last7days", label: "Last 7 Days" },
  { value: "last15days", label: "Last 15 Days" },
  { value: "last30days", label: "Last 30 Days" },
  { value: "last60days", label: "Last 60 Days" },
  { value: "custom", label: "Custom Range" },
];

function Dashboard({ allData, selectedOptions, subDomain }) {
  const [selectedOption, setSelectedOption] = useState("last7days");
  const [customRange, setCustomRange] = useState([null, null]);

  const [currentDateFilterLabel, setCurrentDateFilterLabel] = useState("");
  const isMobile = useMobile();

  // const handleDateFilter = (start, end, dateFilterLabel) => {
  //   const filteredData = filterByDateRange(
  //     allData,
  //     moment(start).toDate(),
  //     moment(end).toDate(),
  //   );

  //   setData(filteredData);
  //   setCurrentDateFilterLabel(dateFilterLabel);
  // };

  const filteredData = useMemo(() => {
    const getDateRange = (option) => {
      const today = moment();
      switch (option) {
        case "last7days":
          return [today.clone().subtract(7, "days").toDate(), today.toDate()];
        case "last15days":
          return [today.clone().subtract(15, "days").toDate(), today.toDate()];
        case "last30days":
          return [today.clone().subtract(30, "days").toDate(), today.toDate()];
        case "last60days":
          return [today.clone().subtract(60, "days").toDate(), today.toDate()];
        default:
          return customRange.map((date) => (date ? date.toDate() : null));
      }
    };

    const [party, feed, partner] = _tail(selectedOptions);
    const partnerValue = partner.split("_")[2];
    const feedValue = feed.split("_")[1];
    let filteredDataByFeedAndPartner = allData;
    filteredDataByFeedAndPartner = _filter(
      filteredDataByFeedAndPartner,
      (dataFeed) => dataFeed.party === party,
    );
    filteredDataByFeedAndPartner = _filter(
      filteredDataByFeedAndPartner,
      (dataFeed) => dataFeed.feed === feedValue,
    );
    filteredDataByFeedAndPartner = _filter(
      filteredDataByFeedAndPartner,
      (dataPartner) => dataPartner.partner === partnerValue,
    );

    if (selectedOption !== "custom") {
      const [startDate, endDate] = getDateRange(selectedOption);
      const selectedLabel = options.find(
        (option) => option.value === selectedOption,
      )?.label;
      setCurrentDateFilterLabel(selectedLabel);
      const filteredDataByDateRange = filterByDateRange(
        filteredDataByFeedAndPartner,
        moment(startDate).toDate(),
        moment(endDate).toDate(),
      );
      return filteredDataByDateRange;
    }
    if (customRange && customRange[0] && customRange[1]) {
      setCurrentDateFilterLabel("Custom Range");
      const filteredDataByDateRange = filterByDateRange(
        filteredDataByFeedAndPartner,
        moment(customRange[0].toDate()).toDate(),
        moment(customRange[1].toDate()).toDate(),
      );
      return filteredDataByDateRange;
    }
    return [];
  }, [allData, customRange, selectedOption, selectedOptions]);

  return (
    <>
      <div className="flex justify-between mb-2 items-center">
        <Title level={isMobile ? 3 : 2}>
          Welcome{subDomain ? `, ${PARTY_LABELS[subDomain]}` : ""}
        </Title>
        <DateFilter
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          customRange={customRange}
          setCustomRange={setCustomRange}
          options={options}
        />
      </div>
      <ReportsByMetrics metrics={filteredData} />
      <ConsolidatedGraph
        dateFilterLabel={currentDateFilterLabel}
        data={parseDataForConsolidatedGraph(filteredData)}
      />
      <Topcharts data={filteredData} />
    </>
  );
}

export default Dashboard;
