import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import UserIcon from "./UserIcon";
import { TaskIcon } from "./TaskIcon";
import { SettingIcon } from "./SettingIcon";

function Menu() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="w-[28%] bg-white-100 text-left border-1 p-4 h-screen">
      <ul className="mb-2 font-bold">
        <li className="px-2">MENU</li>
      </ul>
      <Link to="/dashboard">
        <button
          className={`flex shadow w-[96%] text-left font-bold px-2 mt-2 rounded-md py-2 hover:bg-sky-200 ${
            active === "dashboard" ? "text-sky-500" : "text-black"
          }`}
          onClick={() => setActive("dashboard")}
        >
          <div className="mt-1 mr-1">
            <MenuIcon />
          </div>
          {/* Conditional rendering of text based on screen size */}
          <span className="hidden sm:inline-block">Dashboard</span>
        </button>
      </Link>
      <Link to="/users">
        <button
          className={`font-blue flex shadow w-[96%] text-left font-bold px-2 mt-2 rounded-md py-2 hover:bg-sky-200 ${
            active === "users" ? "text-sky-500" : "text-black"
          }`}
          onClick={() => setActive("users")}
        >
          <div className="mr-1">
            <UserIcon />
          </div>
          <span className="hidden sm:inline-block ">Users</span>
        </button>
      </Link>
      <Link to="/Task">
        <button
          className={`flex shadow w-[96%] text-left font-bold px-2 mt-2 rounded-md py-2 hover:bg-sky-200 ${
            active === "task" ? "text-sky-500" : "text-black"
          }`}
          onClick={() => setActive("task")}
        >
          <div className="mr-1">
            <TaskIcon />
          </div>
          <span className="hidden sm:inline-block">Task</span>
        </button>
      </Link>
      <Link to="/setting">
        <button
          className={`flex shadow w-[96%] text-left font-bold px-2 mt-2 rounded-md py-2 hover:bg-sky-200 ${
            active === "setting" ? "text-sky-500" : "text-black"
          }`}
          onClick={() => setActive("setting")}
        >
          <div className="mr-1">
            <SettingIcon />
          </div>
          <span className="hidden sm:inline-block">Setting</span>
        </button>
      </Link>
    </div>
  );
}

export default Menu;
