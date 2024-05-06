import React, { useState } from "react"; // Import useState from React

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
  {
    CustomerName: "Nasar Haroon",
    ProjectName: "Lorem ipsum",
    TaskStartDate: "Ross Gellar",
    TaskEndDate: "09-03-2024",
    OverdueDay: "3 Day's",
  },
  {
    CustomerName: "Ali Hammad",
    ProjectName: "Lorem ipsum",
    TaskStartDate: "Ross Gellar",
    TaskEndDate: "09-03-2024",
    OverdueDay: "3 Day's",
  },
  {
    CustomerName: "Umer Hamza",
    ProjectName: "Lorem ipsum",
    TaskStartDate: "Ross Gellar",
    TaskEndDate: "09-03-2024",
    OverdueDay: "3 Day's",
  },
  {
    CustomerName: "Ali Haroon",
    ProjectName: "Lorem ipsum",
    TaskStartDate: "Ross Gellar",
    TaskEndDate: "09-03-2024",
    OverdueDay: "3 Day's",
  },
];

function UserList() {
  const [showDropdownIndex, setShowDropdownIndex] = useState(null);

  const handleImageClick = (index) => {
    setShowDropdownIndex(index === showDropdownIndex ? null : index);
  };

  const handleActionClick = (action, index) => {
    // Implement your action logic here based on the action type and user index
    switch (action) {
      case "delete":
        console.log("Delete user at index:", index);
        break;
      case "view":
        console.log("View user at index:", index);
        break;
      case "edit":
        console.log("Edit user at index:", index);
        break;
      default:
        break;
    }
  };
  return (
    <div className="w-[72%] bg-gray-100 p-4 h-screen">
      <div className=" bg-white p-2 rounded-md">
        <h1 className="text-left font-bold text-lg py-2 ml-1">Online Users</h1>
        <div className="flex w-[100%] font-semibold text-left ml-4">
          <div className="flex-grow py-2 items-center px-1">Customer Name</div>
          <div className="flex-grow py-2 items-center ">Project Name</div>
          <div className="flex-grow py-2 items-center">Task Start Date</div>
          <div className="flex-grow py-2 items-center">Task End Date</div>
          <div className="flex-grow py-2 item-center">OverDue Day</div>
        </div>
        <div className="bg-green w-[100%] rounded-md ">
          {Users.map((user, index) => (
            <div key={index} className="flex w-[100%] rounded-md ml-4">
              <div className="underline text-blue-500 flex w-[20%]  border-b items-center py-2 px-4">
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
              <div className=" flex w-[20%] border-b items-center py-2 px-4 relative">
                {user.OverdueDay}
                <img
                  src="src\Pages\Images\Options.png"
                  alt="Image"
                  className="ml-6 w-6 h-6"
                  onClick={() => handleImageClick(index)}
                />
                {showDropdownIndex === index && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <button
                      className="block w-full py-2 text-left px-4 hover:bg-gray-100"
                      onClick={() => handleActionClick("delete", index)}
                    >
                      Delete
                    </button>
                    <button
                      className="block w-full py-2 text-left px-4 hover:bg-gray-100"
                      onClick={() => handleActionClick("view", index)}
                    >
                      View
                    </button>
                    <button
                      className="block w-full py-2 text-left px-4 hover:bg-gray-100"
                      onClick={() => handleActionClick("edit", index)}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          <br />
          <div className="flex ">
            <p className="text-left text-gray-500 ml-4 text-sm">
              Rows per page 10
            </p>
            <div className="ml-40">
              <span className="mr-5">1</span>
              <span className="mr-5">2</span>
              <span className="mr-5">3</span>
              <span className="mr-5">...</span>
              <span className="mr-5">10</span>
              <span className="mr-5">11</span>
              <span className="mr-5">12</span>
            </div>
            <p className="ml-44 text-left text-gray-500 ml-4 text-sm">
              Go to page ------
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
