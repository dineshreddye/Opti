import { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

export const useCampaignsTable = (initialData) => {
  const [tableData, setTableData] = useState();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    setTableData(initialData);
  }, [initialData]);

  // Handle row selection
  const handleRowSelection = (selectedKeys) => {
    setSelectedRowKeys(selectedKeys);
  };

  // Toggle a value in a specific column
  const handleToggle = (recordKey) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.key === recordKey ? { ...item, toggle: !item.toggle } : item,
      ),
    );
  };

  // Download table data as Excel file
  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "TableData");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "table_data.xlsx");
  };

  return {
    tableData,
    selectedRowKeys,
    handleRowSelection,
    handleToggle,
    handleDownloadExcel,
  };
};
