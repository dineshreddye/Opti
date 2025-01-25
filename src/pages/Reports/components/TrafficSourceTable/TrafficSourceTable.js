import React, { useState, useMemo } from "react";
import { Table, Button, Select } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import * as XLSX from "xlsx";

import "./TrafficSourceTable.css"; // Import custom CSS
import { groupAndSumByKey } from "../../Reports.helpers";
import useMobile from "../../../../hooks/useMobile";
import { CAMPAIGN_KEYS } from "../../../../constants/common";

const { Option } = Select;

function TrafficSourceTable({ data, columns, keyName }) {
  const [pageSize, setPageSize] = useState(10);
  const isMobile = useMobile();

  const groupedData = useMemo(() => {
    return groupAndSumByKey(data, keyName);
  }, [data, keyName]);

  // Download CSV function
  const downloadCSV = () => {
    const csvContent = `data:text/csv;charset=utf-8,${[
      columns.map(({ title }) => title),
      ...groupedData.map((row) => {
        return [
          row[keyName],
          Number(row[CAMPAIGN_KEYS.AMOUNT_SPENT]).toFixed(2),
          row[CAMPAIGN_KEYS.IMPRESSIONS],
          row[CAMPAIGN_KEYS.LINK_CLICKS],
          row[CAMPAIGN_KEYS.CONVERSIONS],
          Number(row[CAMPAIGN_KEYS.NET]).toFixed(2),
          Number(row[CAMPAIGN_KEYS.ROI]).toFixed(2),
        ];
      }),
    ]
      .map((e) => e.join(","))
      .join("\n")}`;

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${keyName}.csv`);
    document.body.appendChild(link); // Required for FF
    link.click();
    document.body.removeChild(link);
  };

  // Download Excel function
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      groupedData.map((row) => {
        return [
          row[keyName],
          Number(row[CAMPAIGN_KEYS.AMOUNT_SPENT]).toFixed(2),
          row[CAMPAIGN_KEYS.IMPRESSIONS],
          row[CAMPAIGN_KEYS.LINK_CLICKS],
          row[CAMPAIGN_KEYS.CONVERSIONS],
          Number(row[CAMPAIGN_KEYS.NET]).toFixed(2),
          Number(row[CAMPAIGN_KEYS.ROI]).toFixed(2),
        ];
      }),
      { origin: "A2", skipHeader: true },
    );

    const headings = [columns.map(({ title }) => title)];
    XLSX.utils.sheet_add_aoa(worksheet, headings, { origin: "A1" });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `${keyName} Data`);
    XLSX.writeFile(workbook, `${keyName}.xlsx`);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      {/* Table */}
      <div style={{ overflow: "scroll" }}>
        <Table
          columns={columns}
          dataSource={groupedData}
          pagination={{
            pageSize,
            showQuickJumper: false,
            showSizeChanger: false,
          }}
          rowClassName={(record, index) =>
            index % 2 === 0 ? "alternate-row" : ""
          }
        />
      </div>
      {/* Footer section */}
      <div
        style={{
          display: isMobile ? "block" : "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
        className="px-2"
      >
        <div>
          <Select value={pageSize} onChange={(value) => setPageSize(value)}>
            <Option value={10}>10 Rows</Option>
            <Option value={20}>20 Rows</Option>
            <Option value={50}>50 Rows</Option>
            <Option value={100}>100 Rows</Option>
          </Select>
        </div>
        <div
          style={{
            display: isMobile ? "block" : "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Button
            icon={<DownloadOutlined />}
            onClick={downloadCSV}
            style={{ marginRight: "10px" }}
          >
            Download CSV
          </Button>
          <Button icon={<DownloadOutlined />} onClick={downloadExcel}>
            Download Excel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TrafficSourceTable;
