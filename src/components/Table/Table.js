import React from "react";
import PropTypes from "prop-types";

import { Table } from "antd";

function ReusableTable({ columns, data, loading, pagination, components }) {
  return (
    <div className="reusable-table overflow-scroll">
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={pagination}
        rowKey={(record) => record.key || record.id || Math.random()}
        components={components}
      />
    </div>
  );
}

// Prop Types Validation
ReusableTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired, // Header text
      dataIndex: PropTypes.string.isRequired, // Data key in the row
      key: PropTypes.string, // Unique key for the column
    }),
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired, // Data for the rows
  loading: PropTypes.bool, // Loading state
  pagination: PropTypes.oneOfType([
    PropTypes.bool, // Enable/disable pagination
    PropTypes.object, // Pagination configuration
  ]),
};

// Default Props
ReusableTable.defaultProps = {
  loading: false,
  pagination: { pageSize: 10 },
};

export default ReusableTable;
