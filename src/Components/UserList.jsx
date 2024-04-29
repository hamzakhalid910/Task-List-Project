import React from "react";

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
  return (
    <div className="w-[72%] bg-gray-100 p-4 h-screen">
      <div className=" bg-white p-2 rounded-md">
        <div className="flex w-[100%] font-bold text-left">
          <div className="flex-grow py-2 items-center px-1">Customer Name</div>
          <div className="flex-grow py-2 items-center ">Project Name</div>
          <div className="flex-grow py-2 items-center">Task Start Date</div>
          <div className="flex-grow py-2 items-center">Task End Date</div>
          <div className="flex-grow py-2 item-center">OverDue Day</div>
        </div>
        <div className="bg-green w-[100%] rounded-md ">
          {Users.map((user, index) => (
            <div key={index} className="flex w-[100%] rounded-md">
              <div className=" flex w-[20%]  border-b items-center py-2 px-4">
                {user.CustomerName}
              </div>
              <div className=" flex w-[20%] border-b items-center py-2 px-4">
                {user.ProjectName}
              </div>
              <div className=" flex w-[20%] border-b items-center py-2 px-4">
                {user.TaskStartDate}
              </div>
              <div className=" flex w-[20%] border-b items-center py-2 px-4">
                {user.TaskEndDate}
              </div>
              <div className=" flex w-[20%] border-b items-center py-2 px-4">
                {user.OverdueDay}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserList;
