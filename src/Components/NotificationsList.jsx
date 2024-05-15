import React from "react";
import { NotificationIcon } from "./NotificationsIcon";
import { NotificationsDot } from "./NotificationsDot";
import Header from "./Header";
import Menu from "./Menu";

function NotificationsList() {
  return (
    <div className="bg-gray-100 w-[85%] h-screen">
      <div className=" w-[100%] text-left ">
        <h1 className=" px-12 mt-4 font-bold text-xl text-gray-600">
          Notification
        </h1>
        <p className="text-xs mt-1 px-12 ">You have 2 unread notifications.</p>
      </div>
      <div>
        <div>
          <h1 className="flex text-xl px-12 mt-8 color-gray-400 font-semibold text-gray-400">
            Today
          </h1>
        </div>
        <div className=" mt-2 flex">
          <NotificationsDot />
          <NotificationIcon />
          <div>
            <p className=" text-lg text-black-900 mt-1 flex font-semibold">
              Pending Task
            </p>
            <p className="text-xs mt-3">
              Lorem ispum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className=" mt-2 flex">
          <NotificationsDot />

          <NotificationIcon />
          <div>
            <p className=" text-lg text-black-900 mt-1 flex font-semibold">
              Due Task Date
            </p>
            <p className="text-xs mt-3">
              Lorem ispum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className=" mt-2 flex">
          <NotificationsDot />

          <NotificationIcon />
          <div>
            <p className=" text-lg text-black-900 mt-1 flex font-semibold">
              Pending Task
            </p>
            <p className="text-xs mt-3">
              Lorem ispum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="flex text-xl px-12 mt-8 color-gray-400 font-semibold text-gray-400 font-semibold">
              Yesterday
            </h1>
          </div>
          <div className=" mt-2 ml-10 flex">
            <NotificationIcon />
            <div>
              <p className=" text-lg text-black-900 mt-1 flex font-semibold">
                Pending Task
              </p>
              <p className="text-xs mt-3">
                Lorem ispum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className=" mt-2 ml-10 flex">
            <NotificationIcon />
            <div>
              <p className=" text-lg text-black-900 mt-1 flex font-semibold">
                Pending Task
              </p>
              <p className="text-xs mt-3">
                Lorem ispum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotificationsList;
