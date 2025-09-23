import React from "react";

function RecentMessage({ post }) {
  return (
    <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition">
      <img
        src={post.from_user_id.profile_picture}
        alt={post.from_user_id.username}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1">
        <p className="font-medium">{post.from_user_id.username}</p>
        <p className="text-sm text-gray-600 truncate">{post.text}</p>
      </div>
      {!post.seen && <span className="w-2 h-2 bg-blue-500 rounded-full"></span>}
    </div>
  );
}

export default RecentMessage;
