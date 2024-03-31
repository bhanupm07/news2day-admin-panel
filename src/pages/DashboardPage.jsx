import React from "react";
import { FaUser, FaCommentDots } from "react-icons/fa";
import { ImStatsBars2 } from "react-icons/im";
import { MdOutlineManageHistory } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import { PiUserSquareFill } from "react-icons/pi";
import { BiSolidAward } from "react-icons/bi";
import { SiSlideshare } from "react-icons/si";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  // array of objects containing contents to be mapped
  const dashboardContent = [
    {
      icon: <ImStatsBars2 />,
      name: "content statistics",
      path: "/performance",
    },
    {
      icon: <MdOutlineManageHistory />,
      name: "manage news feeds",
      path: "/manage",
    },
    {
      icon: <HiDocumentReport />,
      name: "performance report",
      path: "/performance",
    },
    {
      icon: <FaUser />,
      name: "user activity",
      path: "/in-progress",
    },
    {
      icon: <PiUserSquareFill />,
      name: "users only status",
      path: "/in-progress",
    },
    {
      icon: <BiSolidAward />,
      name: "top performed news",
      path: "/in-progress",
    },
    {
      icon: <SiSlideshare />,
      name: "top shared news",
      path: "/in-progress",
    },
    {
      icon: <FaCommentDots />,
      name: "top commented news",
      path: "/in-progress",
    },
  ];

  // maping over the content array to get the jsx
  const dashboardContentJsx = dashboardContent.map((content, i) => {
    return (
      <Link
        to={content.path}
        key={i}
        className="w-40 max-sm:w-36 flex flex-col gap-2 items-center justify-center p-4 rounded-lg shadow-lg border border-gray-200 hover:bg-gray-100/50 cursor-pointer"
      >
        <span className="text-blue-500 text-xl">{content.icon}</span>
        <span className="text-center capitalize font-medium">
          {content.name}
        </span>
      </Link>
    );
  });

  return (
    <main className="p-8">
      <div className="flex flex-wrap max-md:justify-center gap-8 max-sm:gap-6 max-[400px]:gap-4">
        {dashboardContentJsx}
      </div>
    </main>
  );
};

export default DashboardPage;
