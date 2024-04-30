import React from "react";
import { Link } from "react-router-dom";
import { TaskListIcon } from "./TaskListIcon";

function Header({ pageName }) {
  return (
    <div className=" flex justify-between items-center">
      <div className="border-b w-[28%] h-16 flex items-center py-4 px-2">
        <div>
          <TaskListIcon />
        </div>
        <h1 className=" text-sky-400 font-bold text-left ml-2 h-12 content-center">
          Task List Manager
        </h1>
      </div>

      <div className=" border-b flex h-16 py-4 w-[50%] content-center">
        <h2 className="font-bold text-left px-3">{pageName}</h2>
      </div>

      <div className="flex py-4 h-16 border-b w-[5%] justify-center ">
        <Link to="/notifications">
          <img className="h-8 w-8" src="src\Pages\Images\bell.png" alt="" />
        </Link>
      </div>

      <div className="border-b flex h-16 px-4 py-4 w-[17%] justify-start">
        <img
          className="object-contain h-8 w-8"
          src="src\Pages\Images\User.jpg"
          alt="User"
        />
        <div className="">
          <p className="ml-2 font-bold">Hamza Khalid</p>
          <p className="ml-2 ">Status 200</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
