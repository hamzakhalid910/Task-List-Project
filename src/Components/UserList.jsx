import React, { useState, useEffect } from "react";

const Users = [
  {
    CustomerName: "John Wick",
    ProjectName: "Lorem ipsum",
    TaskStartDate: "Ross Gellar",
    TaskEndDate: "01-03-2024",
    OverdueDay: "3 Day's",
  },
  {
    CustomerName: "Adam Smith",
    ProjectName: "Lorem ipsum",
    TaskStartDate: "Ross Gellar",
    TaskEndDate: "01-03-2024",
    OverdueDay: "2 Day's",
  },
  {
    CustomerName: "Hamza Khalid",
    ProjectName: "Lorem ipsum",
    TaskStartDate: "Ross Gellar",
    TaskEndDate: "04-03-2024",
    OverdueDay: "2 Day's",
  },
  {
    CustomerName: "Azaan Noor",
    ProjectName: "Lorem ipsum",
    TaskStartDate: "Ross Gellar",
    TaskEndDate: "07-03-2024",
    OverdueDay: "5 Day's",
  },
  {
    CustomerName: "Ibrahim Pasha",
    ProjectName: "Lorem ipsum",
    TaskStartDate: "Ross Gellar",
    TaskEndDate: "08-03-2024",
    OverdueDay: "3 Day's",
  },
  {
    CustomerName: "Haider Ali",
    ProjectName: "Lorem ipsum",
    TaskStartDate: "Ross Gellar",
    TaskEndDate: "11-03-2024",
    OverdueDay: "7 Day's",
  },
  {
    CustomerName: "Nasar Haroon",
    ProjectName: "Lorem ipsum",
    TaskStartDate: "Ross Gellar",
    TaskEndDate: "09-03-2024",
    OverdueDay: "3 Day's",
  },
];

function UserList() {
  const arrayDataItems = Users.map((User) => (
    <li key={Users.CustomerName}>
      <p>{Users.ProjectName}</p>
      <p>{Users.TaskStartDate}</p>
    </li>
  ));
  return (
    <div className="grid grid-cols-5 space-x-4 ">
      <div className=" border-2">
        <h1 className="py-2 font-bold">Customer Name</h1>
      </div>
      <div className="border-2">
        <h1>Project Name</h1>
      </div>
      <div>
        <h1>Task Start Date</h1>
      </div>
      <div>
        <h1>Task End Date</h1>
      </div>
      <div>
        <h1>OverDue Day</h1>
      </div>
    </div>
  );
}

export default UserList;
