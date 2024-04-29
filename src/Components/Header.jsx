import React from "react";

function Header() {
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

      <div className="h-16 py-4 w-[50%] bg-white-100  content-center">
        <h2 className="font-bold text-left px-3">Dashboard</h2>
      </div>

      <div className="flex h-16 px-4 py-4 w-[22%] justify-start">
        <img
          className="object-contain h-8 w-8"
          src="src\Pages\Images\User.jpg" // Use the imported user logo image
          alt="User"
        />
        <p className="ml-2">Username</p>{" "}
      </div>
    </div>
  );
}

export default Header;
