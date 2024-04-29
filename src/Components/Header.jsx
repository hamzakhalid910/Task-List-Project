import React from "react";
import { Link } from "react-router-dom";

function Header({ pageName }) {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[28%] flex items-center border-2 py-1.5 px-2">
        <img
          className="object-contain h-12 w-12"
          src="src\Pages\Images\Logo.png" // Adjust the path to your project structure
          alt="img"
        />
        <h1 className="text-sky-400 font-bold text-left ml-2 h-12 content-center">
          Task List Manager
        </h1>
      </div>

      <div className="flex h-16 py-4 w-[50%] content-center">
        <h2 className="font-bold text-left px-3">{pageName}</h2>
      </div>

      <div className="flex w-[5%] justify-center ">
        <Link to="/notifications">
          <img className="h-8 w-8" src="src\Pages\Images\bell.png" alt="" />
        </Link>
      </div>

      <div className=" flex h-16 px-4 py-4 w-[17%] justify-start">
        <img
          className="object-contain h-8 w-8"
          src="src\Pages\Images\User.jpg"
          alt="User"
        />
        <p className="ml-2">Hamza Khalid</p>{" "}
      </div>
    </div>
  );
}

export default Header;
