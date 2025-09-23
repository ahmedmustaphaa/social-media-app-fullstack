import React, { useEffect, useState } from "react";
import { dummyPostsData, dummyRecentMessagesData } from "../assets/assets";
import Loading from "../component/Loading";
import Stories from "../component/Stories";
import RecentMessage from "../component/RecentMessage";
import {Link} from 'react-router-dom'
function Feed() {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate fetching data
    setFeeds(dummyPostsData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex items-start justify-center xl:gap-8 xl:pr-5 py-10 h-full overflow-y-auto">
      {/* Stories + Posts */}
      <div className="flex-1 max-w-2xl px-4 md:px-0">
        <Stories />
        <div className="p-4 space-y-6">
          {/* هنا هتحط البوستات */}
          {feeds.map((post, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl shadow-md border border-gray-100"
            >
              <h2 className="font-semibold">{post.user.name}</h2>
              <p className="text-gray-700 mt-2">{post.content}</p>
            </div>
          ))}
        </div>
      </div>

     

      {/* Right Sidebar */}
      <div className="hidden xl:block w-64 space-y-6">
        <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <h1 className="font-semibold text-gray-800">Sponsored</h1>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <h1 className="font-semibold text-gray-800">Recent Messages</h1>
         
<div>
  {dummyRecentMessagesData.map((mR, index) => {
    return (
      <Link key={index} to={`/chat/${mR.from_user_id._id}`}>
        <RecentMessage post={mR} />
      </Link>
    );
  })}
</div>
        </div>
      </div>


      
    </div>
  );
}

export default Feed;
