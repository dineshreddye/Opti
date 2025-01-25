import React, { useMemo } from "react";

import ReportCard from "../../../../components/ReportCard";

import { getReportsConfig } from "./reports.config";

import "./ReportsByMetrics.css";

function ReportsByMetrics({ metrics }) {
  const reportsConfig = useMemo(() => {
    return getReportsConfig(metrics);
  }, [metrics]);

  return (
    <div className="revenue-card-container">
      {reportsConfig.map((report) => (
        <ReportCard
          key={report.title}
          title={report.title}
          value={report.value}
          data={report.graphValues}
          dotColor={report.dotColor}
        />
      ))}
    </div>
  );
}

export default ReportsByMetrics;
