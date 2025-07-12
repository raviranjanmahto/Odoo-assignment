import React from "react";
import { useDownloadReportQuery } from "./adminApi";

const ExportReport = () => {
  const { data, isLoading } = useDownloadReportQuery();

  const handleDownload = () => {
    if (!data?.url) return;
    window.open(data.url, "_blank");
  };

  return (
    <div className="admin-section">
      <h3>Export Reports</h3>
      <button onClick={handleDownload} disabled={isLoading}>
        Download Feedback & Swaps Report
      </button>
    </div>
  );
};

export default ExportReport;
