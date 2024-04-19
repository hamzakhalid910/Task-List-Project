import React, { useState } from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import UserList from "../Components/UserList";
import { FaUser, FaLock } from "react-icons/fa";
// import Logo from "./Images/Logo.PNG";

function Users() {
  return (
    // <div className="h-screen ">
    //   <Header />

    //   <div className="ml-auto flex">
    //     <Menu />
    //     <UserList />
    //   </div>
    // </div>
    <div className="h-[96%]  ">
      <Header />

      <div className="flex ">
        <Menu />
        <UserList />
      </div>
    </div>
  );
}

export default Users;
