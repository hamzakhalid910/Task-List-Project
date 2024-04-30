import React from "react";

import Header from "./Header";
import Menu from "./Menu";

function NotificationsList() {
  return (
    <div className="bg-gray-100 w-[72%]">
      <div className=" w-[100%] text-left ">
        <h1 className="text-2xl px-12 mt-4 font-bold">Notification</h1>
        <p className="text-xs mt-1 px-12 ">You have 2 unread notifications.</p>
      </div>
      <div>
        <div>
          <h1 className="flex text-xl px-12 mt-8 color-gray-400 font-bold">
            Today
          </h1>
        </div>
        <div className=" mt-2 flex">
          <img
            className="w-[4%] h-[28%]  mx-12 mt-2"
            src="src\Pages\Images\Notification.png"
          ></img>
          <div>
            <p className=" text-lg text-black-900 mt-1 flex">Pending Task</p>
            <p className="text-xs mt-3">
              Lorem ispum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className=" mt-2 flex">
          <img
            className="w-[4%] h-[28%]  mx-12 mt-2"
            src="src\Pages\Images\Notification.png"
          ></img>
          <div>
            <p className=" text-lg text-black-900 mt-1 flex">Pending Task</p>
            <p className="text-xs mt-3">
              Lorem ispum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className=" mt-2 flex">
          <img
            className="w-[4%] h-[28%]  mx-12 mt-2"
            src="src\Pages\Images\Notification.png"
          ></img>
          <div>
            <p className=" text-lg text-black-900 mt-1 flex">Pending Task</p>
            <p className="text-xs mt-3">
              Lorem ispum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotificationsList;
