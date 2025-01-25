import React, { useEffect, useState } from "react";
import { DatePicker, Select } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;
const { Option } = Select;

function DateFilter({ onFilter }) {
  const [selectedOption, setSelectedOption] = useState("last7days");
  const [customRange, setCustomRange] = useState([null, null]);

  const options = [
    { value: "last7days", label: "Last 7 Days" },
    { value: "last15days", label: "Last 15 Days" },
    { value: "last30days", label: "Last 30 Days" },
    { value: "custom", label: "Custom Range" },
  ];

  const getDateRange = (option) => {
    const today = moment();
    switch (option) {
      case "last7days":
        return [today.clone().subtract(7, "days").toDate(), today.toDate()];
      case "last15days":
        return [today.clone().subtract(15, "days").toDate(), today.toDate()];
      case "last30days":
        return [today.clone().subtract(30, "days").toDate(), today.toDate()];
      default:
        return customRange.map((date) => (date ? date.toDate() : null));
    }
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    if (value !== "custom") {
      const [startDate, endDate] = getDateRange(value);
      const selectedLabel = options.find(
        (option) => option.value === value,
      )?.label;
      onFilter(startDate, endDate, selectedLabel);
    }
  };

  const handleCustomRangeChange = (dates) => {
    setCustomRange(dates);
    if (dates && dates[0] && dates[1]) {
      onFilter(dates[0].toDate(), dates[1].toDate(), "Custom Range");
    }
  };

  useEffect(() => {
    // Fire the onFilter function with Last 7 Days by default
    const [startDate, endDate] = getDateRange("last7days");
    const selectedLabel = options.find(
      (option) => option.value === "last7days",
    )?.label;
    onFilter(startDate, endDate, selectedLabel);
  }, []); // Run only once on component mount

  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Select
        value={selectedOption}
        onChange={handleOptionChange}
        style={{ width: 200 }}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>

      {selectedOption === "custom" && (
        <RangePicker value={customRange} onChange={handleCustomRangeChange} />
      )}
    </div>
  );
}

export default DateFilter;
