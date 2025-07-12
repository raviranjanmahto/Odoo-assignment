import React from "react";
import UserTable from "../features/admin/UserTable";
import SwapTable from "../features/admin/SwapTable";
import BroadcastForm from "../features/admin/BroadcastForm";
import ExportReport from "../features/admin/ExportReport";

const AdminDashboard = () => {
  return (
    <div className="page-container">
      <h2>Admin Dashboard</h2>
      <UserTable />
      <SwapTable />
      <BroadcastForm />
      <ExportReport />
    </div>
  );
};

export default AdminDashboard;
