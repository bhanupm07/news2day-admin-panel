import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <main className="flex justify-start items-center gap-3 p-4 px-6 shadow-lg fixed top-0 left-0 right-0 z-50 bg-white">
      <img src={logo} alt="" className="w-10 h-10 rounded-md" />
      <h1 className="text-2xl font-bold max-[400px]:text-xl">
        News2day Admin Panel
      </h1>
    </main>
  );
};

export default Header;
