import React from "react";
import { Search } from "lucide-react";

function Discover() {
  return (
    <div className="flex flex-col w-full px-8 py-12 bg-gray-50 min-h-screen">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800">Discover People</h2>
      <p className="text-gray-500 mb-10 text-lg">
        Connect with amazing people and grow your network
      </p>

      {/* Search Box */}
      <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-5 w-full max-w-3xl">
        <div className="flex items-center gap-3">
          <Search className="w-6 h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search people by name, username, bio, or location..."
            className="w-full text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}

export default Discover;
