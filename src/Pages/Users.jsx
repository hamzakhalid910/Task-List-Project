import React, { useState } from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import UserList from "../Components/UserList";
import { FaUser, FaLock } from "react-icons/fa";

function Users() {
  return (
    <div className="h-fit">
      <div className="h-fit">
        <Header pageName="User's" />
      </div>
      <div className="flex h-fit">
        <Menu />
        <UserList />
      </div>
    </div>
  );
}

export default Users;
