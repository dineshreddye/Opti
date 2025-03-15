import React from "react";
import { DatePicker, Select } from "antd";

const { RangePicker } = DatePicker;
const { Option } = Select;

function DateFilter({
  selectedOption,
  setSelectedOption,
  options,
  customRange,
  setCustomRange,
}) {
  // const [selectedOption, setSelectedOption] = useState("last7days");
  // const [customRange, setCustomRange] = useState([null, null]);

  // const options = [
  //   { value: "last7days", label: "Last 7 Days" },
  //   { value: "last15days", label: "Last 15 Days" },
  //   { value: "last30days", label: "Last 30 Days" },
  //   { value: "last60days", label: "Last 60 Days" },
  //   { value: "custom", label: "Custom Range" },
  // ];

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleCustomRangeChange = (dates) => {
    setCustomRange(dates);
  };

  // useEffect(() => {
  //   // Fire the onFilter function with Last 7 Days by default
  //   const [startDate, endDate] = getDateRange("last7days");
  //   const selectedLabel = options.find(
  //     (option) => option.value === "last7days",
  //   )?.label;
  //   onFilter(startDate, endDate, selectedLabel);
  // }, []); // Run only once on component mount

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
