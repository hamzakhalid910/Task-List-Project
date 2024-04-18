import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import { FaUser, FaLock } from "react-icons/fa";
// import Logo from "./Images/Logo.PNG";

function Task() {
  return (
    <div className="h-screen ">
      <Header />

      <div className="flex ">
        <Menu />
      </div>
    </div>
  );
}

export default Task;
