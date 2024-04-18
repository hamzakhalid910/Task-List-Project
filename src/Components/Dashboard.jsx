import React from "react";

function Dashboard() {
  return (
    <div className="w-[72%] bg-green-200">
      <div className="grid grid-cols-4 p-4 space-x-2 text-sm">
        <div className="border-1 rounded-md bg-[grey] h-16">
          <h1>Total Task</h1>
        </div>
        <div className="border-1 rounded-md bg-[grey] h-16">
          <h1>Completed Task</h1>
        </div>
        <div className="border-1 rounded-md bg-[grey] h-16">
          <h1>Pending Task</h1>
        </div>
        <div className="border-1 rounded-md bg-[grey] h-16">
          <h1>Decline Task</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 p-4 h-44 space-x-2">
        <div className="bg-[grey] rounded-md">
          <h1>Total Task ratio</h1>
        </div>
        <div className="bg-[grey] rounded-md"></div>
      </div>
    </div>
  );
}

export default Dashboard;
