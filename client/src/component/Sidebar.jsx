import React from "react";
import {useUser ,UserButton,useClerk} from '@clerk/clerk-react'
import { assets, dummyUserData } from "../assets/assets";
import {
  Home,
  MessageCircle,
  Users,
  Search,
  User,
  PlusCircle,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";


const user=dummyUserData;

const {signOut}=useClerk;
console.log(user)

function Sidebar({setMenu}) {
  // Array بتخزن الـ Routes
  const menuItems = [
    { label: "Feed", icon: Home, path: "/" },
    { label: "Messages", icon: MessageCircle, path: "/messages" },
    { label: "Connections", icon: Users, path: "/connections" },
    { label: "Discover", icon: Search, path: "/discover" },
    { label: "Profile", icon: User, path: "/profile" },
  ];

  return (
    <div className="w-64 h-screen flex flex-col justify-between">
      {/* Logo */}
      <div>
        <h3>
          <img src={assets.logo} alt="logo" className="h-14 px-6 pt-4" />
        </h3>
        <h5 className="border-b border-[#D1D5DC] mt-4"></h5>

        {/* Sidebar Menu */}
        <div className="mt-6 flex flex-col gap-2 w-[90%] mx-auto">
  {menuItems.map((item, index) => (
  <NavLink
    key={index}
    to={item.path}
    className={({ isActive }) =>
      `flex items-center gap-3 px-6 py-2 rounded-lg transition-all duration-150 relative
      ${
        isActive
          ? "bg-[#EEF2FF] text-indigo-600 font-medium"
          : "text-gray-700 hover:bg-gray-100"
      }`
    }
    onClick={()=>setMenu(false)}
  >
    {({isActive})=>(
        <>
        <item.icon size={20} />
        <span>{item.label}</span>

        <span
          className={`absolute right-2 h-6 w-1 rounded-2xl bg-fuchsia-950 transition-all duration-300 ease-in-out
          ${isActive ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
        ></span>
      </>
    )}
  </NavLink>
))}

        </div>
      </div>

      {/* Create Post Button */}
      <div className="px-4 py-6">
        <NavLink
          to="/create-postc"
          className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md hover:opacity-90 transition"
        >
          <PlusCircle size={18} />
          Create Post
        </NavLink>
      </div>
     
    <div className="flex items-center justify-between bg-white border border-gray-200 shadow-sm rounded-2xl p-4 px-6 w-full max-w-lg">
      {/* Left Section: Avatar + Info */}
      <div className="flex items-center gap-4">
        {/* Clerk user avatar */}
        <UserButton appearance={{ elements: { avatarBox: "w-12 h-12" } }} />

        {/* User Info */}
        <div>
          <h1 className="text-lg font-semibold text-gray-800">
            {user.full_name}
          </h1>
          <h2 className="text-sm text-gray-500">@{user.username}</h2>
        </div>
      </div>

      {/* Log Out Button */}
      <button
        onClick={signOut}
        className="flex items-center gap-2 px-4 py-2  rounded-xl font-medium shadow-sm  transition"
      >
        <LogOut className="w-4 h-4" />
        <UserButton/>
      </button>
    </div>

       
    </div>
  );
}

export default Sidebar;
