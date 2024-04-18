import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

function AdminDashboard() {
  return (
    <>
      <div className="text-left border-2 w-4/12 p-4">
        <ul className="mb-4 font-bold">
          <li>Menu</li>
        </ul>
        <ul className="space-y-4 ">
          <li className="border-2 text-sky-500">Dashboard</li>
          <li>Users</li>
          <li>Tasks</li>
          <li>Setting</li>
        </ul>
      </div>
    </>
  );
}

export default AdminDashboard;
