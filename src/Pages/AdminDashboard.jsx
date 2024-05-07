import React from "react";

import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Dashboard from "../Components/Dashboard";
import BasicDateCalendar from "../Components/BasicDateCalender";
import { FaUser, FaLock } from "react-icons/fa";

function AdminDashboard() {
  return (
    <div className="h-[96%] ">
      <Header pageName="DashBoard"></Header>

      <div className="flex ">
        <Menu />
        <Dashboard />
      </div>
    </div>
  );
}

export default AdminDashboard;
