import React, { useState, useEffect } from "react";
import { Select, DatePicker, Row, Col, Typography } from "antd";
import moment from "moment";
import { CAMPAIGN_KEYS } from "../../../../constants/common";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Text } = Typography;

function Filters({ data, onFilterChange }) {
  const [trafficSources, setTrafficSources] = useState([]);
  const [filteredAccounts, setFilteredAccounts] = useState([]);
  const [selectedTrafficSource, setSelectedTrafficSource] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState([]);

  useEffect(() => {
    // Extract unique traffic sources
    const uniqueTrafficSources = [
      ...new Set(data.map((item) => item[CAMPAIGN_KEYS.TRAFFIC_SOURCE])),
    ];
    setTrafficSources(uniqueTrafficSources);
  }, [data]);

  useEffect(() => {
    // Extract unique accounts when data or traffic source changes
    const uniqueAccounts = data
      .filter(
        (item) =>
          item[CAMPAIGN_KEYS.TRAFFIC_SOURCE] === selectedTrafficSource ||
          !selectedTrafficSource,
      )
      .map((item) => item[CAMPAIGN_KEYS.ADACCOUNT]);
    setFilteredAccounts([...new Set(uniqueAccounts)]);
  }, [data, selectedTrafficSource]);

  const notifyParent = (trafficSource, account, dateRange) => {
    if (onFilterChange) {
      onFilterChange({ trafficSource, account, dateRange });
    }
  };

  const handleTrafficSourceChange = (value) => {
    setSelectedTrafficSource(value);
    setSelectedAccount(""); // Reset account dropdown
    setFilteredAccounts(
      data
        .filter((item) => item[CAMPAIGN_KEYS.TRAFFIC_SOURCE] === value)
        .map((item) => item[CAMPAIGN_KEYS.ADACCOUNT]),
    );
    notifyParent(value, "", selectedDateRange);
  };

  const handleAccountChange = (value) => {
    setSelectedAccount(value);
    notifyParent(selectedTrafficSource, value, selectedDateRange);
  };

  const handleDateRangeChange = (_, dateStrings) => {
    const selecteddates = [];
    if (dateStrings?.[0]) selecteddates.push(dateStrings[0]);
    if (dateStrings?.[1]) selecteddates.push(dateStrings[1]);

    setSelectedDateRange(selecteddates); // Store the selected date range as an array of [startDate, endDate]
    notifyParent(selectedTrafficSource, selectedAccount, selecteddates);
  };

  return (
    <Row gutter={[16, 16]} style={{ width: "100%" }}>
      {/* Traffic Source Dropdown */}
      <Col xs={24} sm={12} md={6}>
        <Text>Traffic Source</Text>
        <Select
          placeholder="Select Traffic Source"
          style={{ width: "100%" }}
          value={selectedTrafficSource || undefined}
          onChange={handleTrafficSourceChange}
        >
          {trafficSources.map((source) => (
            <Option key={source} value={source}>
              {source}
            </Option>
          ))}
        </Select>
      </Col>

      {/* Account Dropdown */}
      <Col xs={24} sm={12} md={6}>
        <Text>Ad Account</Text>
        <Select
          placeholder="Select Account"
          style={{ width: "100%" }}
          value={selectedAccount || undefined}
          onChange={handleAccountChange}
          disabled={!selectedTrafficSource} // Disable if no traffic source selected
        >
          {filteredAccounts.map((account) => (
            <Option key={account} value={account}>
              {account}
            </Option>
          ))}
        </Select>
      </Col>
      {/* Date Range Picker */}
      <Col xs={24} sm={12} md={6}>
        <Text>Date Range</Text>
        <RangePicker
          onChange={handleDateRangeChange}
          style={{ width: "100%" }}
          value={
            selectedDateRange.length > 0
              ? [
                  moment(selectedDateRange[0], "MM/DD/YYYY"),
                  moment(selectedDateRange[1], "MM/DD/YYYY"),
                ]
              : []
          }
          format="MM/DD/YYYY"
        />
      </Col>
    </Row>
  );
}

export default Filters;
