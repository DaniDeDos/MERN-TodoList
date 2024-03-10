import React from "react";
import { GrTasks } from "react-icons/gr";

const TaskManagementLink = () => {
  return (
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <GrTasks className="text-[#1dcc00] text-lg md:text-xl lg:text-2xl xl:text-3xl" />
      <span className="self-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold whitespace-nowrap text-[#1dcc00]">
        MERN
      </span>
      <p className="self-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold whitespace-nowrap text-white">
        TodoList
      </p>
    </a>
  );
};

export default TaskManagementLink;
