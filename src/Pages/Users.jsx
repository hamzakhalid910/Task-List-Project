import React, { useState } from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import UserList from "../Components/UserList";
import { FaUser, FaLock } from "react-icons/fa";

function Users() {
  return (
    <div className="h-[96%]">
      <Header pageName="Users" />

      <div className="flex ">
        <Menu />
        <UserList />
      </div>
    </div>
  );
}

export default Users;
