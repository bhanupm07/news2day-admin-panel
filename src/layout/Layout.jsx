import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { NewsInfoContext } from "../context/newsInfoContext";
import MobileViewModal from "../components/MobileViewModal/MobileViewModal";

const Layout = () => {
  const { mobileView } = useContext(NewsInfoContext);

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex max-md:flex-col-reverse flex-1 mt-16">
        <Sidebar />
        <div className="flex-1 md:shadow-lg max-md:mb-24">
          <Outlet />
        </div>
      </div>
      {mobileView && <MobileViewModal />}
    </main>
  );
};

export default Layout;
