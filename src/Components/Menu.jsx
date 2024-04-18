import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="w-[28%] bg-white-100 text-left border-2 p-4 ">
      <ul className="mb-4 font-bold">
        <li className="px-2">Menu</li>
      </ul>
      <Link to="/dashboard">
        <button className="shadow-sm w-[96%] text-left font-bold px-2 mt-2 border-2 rounded-md py-2  hover:bg-sky-200">
          Dashboard
        </button>
      </Link>
      <Link to="/users">
        <button className="w-[96%] text-left px-2 mt-2 border-2 rounded-md py-2  hover:bg-sky-200">
          Users
        </button>
      </Link>
      <Link to="/Task">
        <button className="w-[96%] text-left px-2 mt-2 border-2 rounded-md py-2  hover:bg-sky-200">
          Task
        </button>
      </Link>
      <Link to="/setting">
        <button className="w-[96%] text-left px-2 mt-2 border-2 rounded-md py-2  hover:bg-sky-200">
          Setting
        </button>
      </Link>
    </div>
  );
}

export default Menu;
