import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import { X, Menu } from "lucide-react";

function Layout() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex relative h-screen overflow-hidden">
      {/* زرار القائمة */}
      <h2 className="absolute right-10 top-4 sm:hidden p-2 bg-white shadow-2xl rounded-2xl z-50">
        {menu ? (
          <X className="cursor-pointer" onClick={() => setMenu(false)} />
        ) : (
          <Menu className="cursor-pointer" onClick={() => setMenu(true)} />
        )}
      </h2>

      {/* Sidebar */}
      <div
        className={`
          bg-white border-r border-[#E5E7EB] shadow-2xl z-40
          transform transition-all duration-500 ease-in-out
          md:relative md:translate-x-0 md:opacity-100
          ${menu ? "fixed top-0 left-0 h-full w-[288px] translate-x-0 opacity-100" : "fixed top-0 left-0 h-full w-[288px] -translate-x-full opacity-0"}
        `}
      >
        <Sidebar setMenu={setMenu}/>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-[#F8FAFC]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
