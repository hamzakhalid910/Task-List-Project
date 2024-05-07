import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import BasicDateCalendar from "./BasicDateCalender";
import Chart from "./Chart";

function Dashboard() {
  return (
    <div className="w-[85%] bg-gray-100 px-4 py-2 lg:h-screen flex">
      <div className="flex-wrap mx-auto my-auto w-[94%] bg-white h-[90%] rounded-xl border-2 border-blue-100">
        <h2 className="font-bold text-left p-2 ml-4 text-xl ">Analytics</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 space-x-2 text-sm">
          <div className="mt-2 font-bold border-1 rounded-md bg-purple-100 h-28 sm:100 md:50">
            <h1 className="mt-2 px-4 text-left ">Total Task</h1>
            <h2 className="mt-2 text-left px-4 h-10 text-xl text-gray-400">
              90/100
            </h2>

            <div class="ml-3 px-4 w-[90%] rounded-full h-3.5 bg-blue-400"></div>
          </div>
          <div className="mt-2  font-bold border-1 rounded-md bg-sky-100 h-28">
            <h1 className="mt-2 px-4 text-left">Completed Task</h1>
            <h2 className="mt-2 text-left px-4 h-10 text-xl text-gray-500">
              80/100
            </h2>
            <div class="ml-3 px-4 w-[80%]  rounded-full h-3.5 bg-green-500"></div>
          </div>
          <div className="mt-2 font-bold border-1 rounded-md bg-orange-100 h-28">
            <h1 className="mt-2 px-4 text-left">Pending Task</h1>
            <h2 className="mt-2 text-left px-4 h-10 text-xl text-gray-500">
              50/100
            </h2>
            <div class="ml-3 px-4 w-[50%] rounded-full h-3.5 bg-orange-500"></div>
          </div>
          <div className="mt-2 font-bold border-1 rounded-md bg-green-100 h-28">
            <h1 className="mt-2 px-4 text-left">Decline Task</h1>
            <h2 className=" mt-4 lg:mt-2 text-left px-4 h-10 text-xl text-gray-500">
              10/100
            </h2>
            <div class="ml-3 px-4 w-[10%]  rounded-full h-3.5 bg-red-500"></div>
          </div>
        </div>
        <div className="w-[100%] ">
          <div className="flex lg:w-[100%] border-2 p-4 space-x-2">
            <div className="border-2 w-[60%] bg-white rounded-md">
              <h1 className="mt-4 text-left font-bold px-4">
                Total Task ratio
              </h1>
              <div className="my-auto">
                <Chart />
              </div>
            </div>
            <div className="flex w-[96%] lg:w-[40%] items-center mt-2 md:mt-10 justify-end ">
              <div className="md:justify-end mt-2 lg-mt-0 bg-white rounded-md">
                <div className="w-[96%]">
                  <BasicDateCalendar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
