import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import BasicDateCalendar from "./BasicDateCalender";
import Chart from "./Chart";

function Dashboard() {
  return (
    <div className="w-[72%] h-screen bg-gray-100 px-4 py-2">
      <div className="rounded-sm bg-white h-[96%]">
        <h2 className="font-bold text-left p-2 ml-4 ">Analytics</h2>
        <div className="grid grid-cols-4 p-4 space-x-2 text-sm">
          <div className="font-bold border-1 rounded-md bg-gray-100 h-28">
            <h1 className="mt-2">Total Task</h1>

            <div className="font-bold bg-gray-200 h-4 w-full rounded-md overflow-hidden"></div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"></div>
          </div>
          <div className=" font-bold border-1 rounded-md bg-sky-100 h-28">
            <h1 className="mt-2">Completed Task</h1>
          </div>
          <div className="font-bold border-1 rounded-md bg-yellow-100 h-28">
            <h1 className="mt-2">Pending Task</h1>
          </div>
          <div className="font-bold border-1 rounded-md bg-sky-200 h-28">
            <h1 className="mt-2">Decline Task</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 p-4 h-44 space-x-2">
          <div className="bg-white rounded-md">
            <h1 className="mt-4 text-left font-bold px-4">Total Task ratio</h1>
            <div className="mt-4">
              <Chart />
            </div>
          </div>
          <div className="bg-[white] rounded-md">
            <div className="mt-4 w-[96%] content-center px-8 rounded-sm">
              <BasicDateCalendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
