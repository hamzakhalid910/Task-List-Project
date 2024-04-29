import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="border-2 w-[28%] bg-white-100 text-left border-1 p-4 ">
      <ul className=" mb-2 font-bold">
        <li className="px-2">MENU</li>
      </ul>
      <Link to="/dashboard">
        <button
          className={`shadow w-[96%] text-left font-bold px-2 mt-2 rounded-md py-2  hover:bg-sky-200 ${
            active === "dashboard" ? "text-sky-500" : "text-black"
          }`}
          onClick={() => setActive("dashboard")}
        >
          Dashboard
        </button>
      </Link>
      <Link to="/users">
        <button
          className={`shadow w-[96%] text-left font-bold px-2 mt-2 rounded-md py-2  hover:bg-sky-200 ${
            active === "users" ? "text-sky-500" : "text-black"
          }`}
          onClick={() => setActive("users")}
        >
          Users
        </button>
      </Link>
      <Link to="/Task">
        <button
          className={`shadow w-[96%] text-left font-bold px-2 mt-2 rounded-md py-2  hover:bg-sky-200 ${
            active === "task" ? "text-sky-500" : "text-black"
          }`}
          onClick={() => setActive("task")}
        >
          Task
        </button>
      </Link>
      <Link to="/setting">
        <button
          className={`shadow w-[96%] text-left font-bold px-2 mt-2 rounded-md py-2  hover:bg-sky-200 ${
            active === "setting" ? "text-sky-500" : "text-black"
          }`}
          onClick={() => setActive("setting")}
        >
          Setting
        </button>
      </Link>
    </div>
  );
}

export default Menu;
