import React, { useMemo } from "react";
import { Table, Button, Space, Switch, Empty } from "antd";

import Status from "./components/Status";

import { useCampaignsTable } from "./useCampaignsTable";

const columns = [
  {
    title: "Name",
    dataIndex: "campaignName",
    key: "campaignName",
    sorter: (a, b) => a.campaignName.localeCompare(b.campaignName),
  },
  {
    title: "Results",
    dataIndex: "results",
    key: "results",
    sorter: (a, b) => a.results - b.results,
  },
  {
    title: "Impressions",
    dataIndex: "impressions",
    key: "impressions",
    sorter: (a, b) => a.results - b.results,
  },
  {
    title: "Amount Spent",
    dataIndex: "amountSpent",
    key: "amountSpent",
    sorter: (a, b) => a.results - b.results,
  },
  {
    title: "Link Clicks",
    dataIndex: "linkClicks",
    key: "linkClicks",
    sorter: (a, b) => a.results - b.results,
  },
  {
    title: "Net",
    dataIndex: "net",
    key: "net",
    sorter: (a, b) => a.results - b.results,
  },
  {
    title: "Conversions",
    dataIndex: "conversions",
    key: "conversions",
    sorter: (a, b) => a.results - b.results,
  },
];

function CampaignsTable({ data, openCreateCampaignModal, subDomain }) {
  const {
    tableData,
    handleRowSelection,
    selectedRowKeys,
    handleToggle,
    handleDownloadExcel,
  } = useCampaignsTable(data);

  const rowSelection = {
    selectedRowKeys,
    onChange: handleRowSelection,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
    ],
  };

  const enhancedColumns = useMemo(
    () => [
      {
        title: "Actions",
        key: "toggle",
        render: (_, record) => (
          <Switch
            checked={record.status === "Active"}
            onChange={() => handleToggle(record.key)}
          />
        ),
      },
      {
        title: "Status",
        key: "Status",
        render: (_, record) => <Status isActive={record.status === "Active"} />,
      },
      ...columns,
    ],
    [handleToggle],
  );

  const dataColumns = useMemo(() => {
    if (subDomain) return enhancedColumns;
    return [
      ...enhancedColumns,
      {
        title: "Id",
        dataIndex: "id",
        key: "id",
      },
    ];
  }, [enhancedColumns, subDomain]);

  return (
    <div>
      <Space
        style={{
          marginBottom: 16,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button onClick={openCreateCampaignModal}>Create Campaign</Button>
        <Button onClick={handleDownloadExcel}>Download Excel</Button>
      </Space>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={dataColumns}
        dataSource={tableData}
        pagination={{
          pageSizeOptions: [10, 20, 50, 100].map(String), // Convert sizes to strings for Ant Design
          showSizeChanger: true, // Enables changing page size
          defaultPageSize: "20", // Default to the first size in the array
        }}
        locale={{
          emptyText: <Empty />,
        }}
        scroll={{
          x: true,
        }}
        style={{ overflow: "scroll", maxWidth: "100%" }}
      />
    </div>
  );
}

export default CampaignsTable;
