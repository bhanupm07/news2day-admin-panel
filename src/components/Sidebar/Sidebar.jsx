import React from "react";
import { MdSpaceDashboard, MdOutlineManageHistory } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { HiDocumentReport } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const activeClass =
    "flex max-md:flex-col max-md:flex-grow items-center gap-1 md:p-6 max-md:p-4 md:bg-gray-100 md:border-l-4 max-md:border-b-4 md:border-blue-500 max-md:border-white max-md:text-green-300";
  const normalClass =
    "flex max-md:flex-col max-md:flex-grow items-center gap-1 md:p-6 max-md:p-4 md:hover:bg-gray-100 max-md:hover:border-white md:border-l-4 max-md:border-b-4 border-transparent";

  return (
    <aside className="flex md:flex-col md:pt-2 md:w-72 md:sticky md:top-16 md:self-start max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:bg-blue-500 max-md:text-white max-md:z-50">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClass : normalClass)}
      >
        <MdSpaceDashboard className="md:text-blue-500 text-2xl" />
        <span className="max-[400px]:text-sm">Dashboard</span>
      </NavLink>
      <NavLink
        to="/create"
        className={({ isActive }) => (isActive ? activeClass : normalClass)}
      >
        <IoIosCreate className="md:text-blue-500 text-2xl" />
        <span className="max-[400px]:text-sm">Create</span>
      </NavLink>
      <NavLink
        to="/manage"
        className={({ isActive }) => (isActive ? activeClass : normalClass)}
      >
        <MdOutlineManageHistory className="md:text-blue-500 text-2xl" />
        <span className="max-[400px]:text-sm">Manage</span>
      </NavLink>
      <NavLink
        to="/performance"
        className={({ isActive }) => (isActive ? activeClass : normalClass)}
      >
        <HiDocumentReport className="md:text-blue-500 text-2xl" />
        <span className="max-[400px]:text-sm">Performance</span>
      </NavLink>
    </aside>
  );
};

export default Sidebar;
