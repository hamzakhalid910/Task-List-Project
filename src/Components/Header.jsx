import React from "react";
import { Link } from "react-router-dom";
import { TaskListIcon } from "./TaskListIcon";

function Header({ pageName }) {
  return (
    <div className=" flex justify-between items-center">
      <div className="w-[15%] h-16 flex items-center py-4 pl-6">
        <div>
          <TaskListIcon />
        </div>
        <h1 className=" text-sky-400 font-bold text-lg text-left ml-2 h-12 content-center">
          Task List Manager
        </h1>
      </div>

      <div className=" border-l-2 border-gray-100 flex h-16 py-4 w-[65%] content-center">
        <h2 className="font-bold text-left pl-10 content-center text-2xl">
          {pageName}
        </h2>
      </div>

      <div className="flex py-4 h-16 py-2 border-b w-[5%] content-center justify-end ">
        <Link to="/notifications">
          <img className="h-7 w-7" src="src\Pages\Images\bell.png" alt="" />
        </Link>
      </div>

      <div className="border-b flex h-16 px-4 py-2 w-[15%] justify-start content-center">
        <img
          className="object-contain h-11 w-8 content-center"
          src="src\Pages\Images\User.jpg"
          alt="User"
        />
        <div className="content-center">
          <p className="ml-2 font-bold">Hamza Khalid</p>
          <p className="ml-2 text-gray-500 text-sm text-left">Status-200</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
