import React, { useState } from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import NotificationsList from "../Components/NotificationsList";
import { FaUser, FaLock } from "react-icons/fa";

function Notifications() {
  return (
    <div className="h-[96%]  ">
      <Header />

      <div className="flex ">
        <Menu />
        <NotificationsList />
      </div>
    </div>
  );
}

export default Notifications;
