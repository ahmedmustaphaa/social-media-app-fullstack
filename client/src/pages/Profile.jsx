import React, { useState } from "react";
import { MapPin, CalendarDays, CheckCircle2 } from "lucide-react";

function Profile() {
  const[items,setItems]=useState('');
  console.log(items)
  return (
    <div className="flex flex-col w-full px-6 py-8 bg-gray-50 min-h-screen">
      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-2xl mx-auto md:w-[90%] overflow-hidden">
        {/* Cover */}
        <div className="h-60 bg-gradient-to-r from-purple-400 to-pink-300 relative">
          {/* Avatar */}
          <div className="absolute -bottom-12 left-8">
            <img
              src="https://ui-avatars.com/api/?name=Ahmed+Mustafa&background=F97316&color=fff&size=128"
              alt="avatar"
              className="w-24 h-24 rounded-full border-4 border-white shadow-md"
            />
          </div>
          {/* Edit button */}
          <button className="absolute top-4 right-4 px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100 transition">
            Edit
          </button>
        </div>

        {/* Profile Info */}
        <div className="pt-16 px-8 pb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-800">
              ahmed mustafa
            </h2>
            <CheckCircle2 className="w-5 h-5 text-indigo-500" />
          </div>
          <p className="text-gray-500">@ahmedmustafagenior</p>

          <p className="mt-3 text-gray-700">Hey there! I am using PingUp.</p>

          {/* Meta info */}
          <div className="flex items-center gap-6 mt-3 text-gray-500 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Add location
            </span>
            <span className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" /> Joined 2 days ago
            </span>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-5 border-t pt-4 text-[#808080]">
            <span>
              <strong>0</strong> Posts
            </span>
            <span>
              <strong>0</strong> Followers
            </span>
            <span>
              <strong>1</strong> Following
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-6">
          
         {['Posts', 'Media', 'Likes'].map((n, index) => {
  return (
    <div
      key={index}
      onClick={() => setItems(index)}
      className={`cursor-pointer px-8 py-2 rounded-xl text-gray-600 transition 
        ${items === index ? 'bg-green-500 text-white' : 'bg-white hover:bg-gray-100'}`}
    >
      {n}
    </div>
  );
})}

      </div>
    </div>
  );
}

export default Profile;
