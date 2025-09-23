import React, { useEffect, useState } from "react";
import { dummyStoriesData } from "../assets/assets";
import { Plus } from "lucide-react";
import StorieModel from "./StorieModel";
import SorieView from "./SorieView";

function Stories() {
  const [stories, setStories] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [viewStory, setViewStory] = useState(null);

  useEffect(() => {
    setStories(dummyStoriesData);
  }, []);

  return (
    <div className="w-full py-4">
      <div className="flex gap-4 overflow-x-auto no-scrollbar">
        {/* Add Story Card */}
        <div onClick={()=>{setShowModel(true)}} className="min-w-[120px] aspect-[3/4] bg-gradient-to-b from-indigo-50 to-white shadow-sm cursor-pointer border-2 border-dashed border-indigo-800 rounded-xl flex flex-col items-center justify-center p-4 transition hover:scale-105">
          <div className="bg-indigo-500 p-2 rounded-full text-white shadow-md">
            <Plus />
          </div>
          <h1 className="text-[#314158] pt-2 font-semibold text-sm">
            Create Story
          </h1>
        </div>

        {/* Stories Cards */}
        {stories.map((story, index) => (
          <div
            key={index}
            onClick={()=>setViewStory(story)}
            className="relative min-w-[120px] aspect-[3/4] rounded-xl overflow-hidden shadow-md group cursor-pointer transition hover:scale-105"
          >
            {/* Background for text story */}
            {story.media_type === "text" && (
              <div
                className="w-full h-full flex items-center justify-center p-3"
                style={{ backgroundColor: story.background_color }}
              >
                <p className="text-white text-center text-sm">
                  {story.content}
                </p>
              </div>
            )}

            {/* Image Story */}
            {story.media_type === "image" && (
              <img
                src={story.media_url}
                alt="story"
                className="w-full h-full object-cover hover:scale-110 transition duration-500 opacity-70 hover:opacity-80"
              />
            )}

            {/* Video Story */}
            {story.media_type === "video" && (
              <video
                autoPlay
                loop
                muted
                src={story.media_url}
                className="w-full h-full object-cover opacity-80"
              />
            )}

            {/* Content overlay (for image/video) */}
            {story.media_type !== "text" && (
              <>
                <p className="absolute bottom-8 left-3 right-3 text-white text-sm truncate">
                  {story.content}
                </p>
                <p className="absolute bottom-2 right-3 text-xs text-white/70">
                  {new Date(story.createdAt).toLocaleString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
      {showModel  && <StorieModel setShowModel={setShowModel}/>}
{viewStory && (
  <SorieView viewStory={viewStory} setViewStory={setViewStory} />
)}

      
    </div>
  );
}

export default Stories;
