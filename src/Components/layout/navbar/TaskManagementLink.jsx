import React from "react";
import { GrTasks } from "react-icons/gr";

const TaskManagementLink = () => {
  return (
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <GrTasks className="text-[#1dcc00]" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#1dcc00]">
        MERN
      </span>
      <p className="self-center text-2xl font-semibold whitespace-nowrap text-white">
        TodoList
      </p>
    </a>
  );
};

export default TaskManagementLink;
