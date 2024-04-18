import React from "react";
// import logo from "../Pages/Images/Logo.jpg";

function Header() {
  return (
    <div className="flex justify-center items-center ">
      <div className="h-20 w-[28%] border-2 rounded-md flex py-4 px-2">
        <img
          className="object-contain h-12 w-12"
          src="src\Pages\Images\Logo.png"
          alt="img"
        />
        <h1 className=" text-sky-400 font-bold text-left ml-2 h-12 content-center">
          Task List Manager
        </h1>
      </div>

      <div className="h-20 py-4 w-[72%] bg-white-100 border-2 rounded-md content-center">
        <h2 className="font-bold text-left px-3">Dashboard</h2>
      </div>
    </div>
  );
}

export default Header;
