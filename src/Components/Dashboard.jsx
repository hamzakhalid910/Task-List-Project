import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import BasicDateCalendar from "./BasicDateCalender";
import Chart from "./Chart";

function Dashboard() {
  return (
    <div className="w-[72%] bg-gray-100 px-4 py-2 h-[96%] ">
      <div className="rounded-sm bg-white h-[96%]">
        <h2 className="font-bold text-left p-2 ml-4 ">Analytics</h2>
        <div className="grid grid-cols-4 p-4 space-x-2 text-sm">
          <div className="font-bold border-1 rounded-md bg-gray-100 h-28">
            <h1 className="mt-2 px-4 text-left ">Total Task</h1>
            <h2 className="mt-2 text-left px-4 h-10 text-xl text-gray-600">
              90/100
            </h2>

            <div class="ml-3 px-4 w-[90%] bg-gray-500 rounded-full h-2.5 dark:bg-gray-700"></div>
          </div>
          <div className=" font-bold border-1 rounded-md bg-sky-100 h-28">
            <h1 className=" px-4 text-left">Completed Task</h1>
            <h2 className="mt-2 text-left px-4 h-10 text-xl text-gray-600">
              90/100
            </h2>
            <div class="ml-3 mt-2 px-4 w-[90%] bg-gray-500 rounded-full h-2.5 dark:bg-gray-700"></div>
          </div>
          <div className="font-bold border-1 rounded-md bg-yellow-100 h-28">
            <h1 className="mt-2 px-4 text-left">Pending Task</h1>
            <h2 className="mt-2 text-left px-4 h-10 text-xl text-gray-600">
              90/100
            </h2>
            <div class="ml-3 px-4 w-[90%] bg-gray-500 rounded-full h-2.5 dark:bg-gray-700"></div>
          </div>
          <div className="font-bold border-1 rounded-md bg-sky-200 h-28">
            <h1 className="mt-2 px-4 text-left">Decline Task</h1>
            <h2 className=" mt-2 text-left px-4 h-10 text-xl text-gray-600">
              90/100
            </h2>
            <div class="ml-3 px-4 w-[90%] bg-gray-500 rounded-full h-2.5 dark:bg-gray-700"></div>
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
