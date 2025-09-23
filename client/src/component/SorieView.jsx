import React, { useEffect, useState } from "react";

function SorieView({ viewStory, setViewStory }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!viewStory) return;

    const duration = 5000; // مدة الستوري = 5 ثواني
    const intervalTime = 50; // كل قد إيه نزود
    const step = 100 / (duration / intervalTime); // الزيادة كل مرة

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setViewStory(null);
          return 100;
        }
        return prev + 0.8;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [viewStory, setViewStory]);

  return (
    <div className="inset-0 bg-black flex items-center justify-center w-full h-full fixed z-50">
      {/* Story Content */}
      <div className="w-full h-full flex items-center justify-center">
        {viewStory?.media_type === "text" && (
          <div
            className="w-full h-full flex items-center justify-center p-3"
            style={{ backgroundColor: viewStory.background_color }}
          >
            <p className="text-white text-center text-lg">{viewStory.content}</p>
          </div>
        )}

        {viewStory?.media_type === "image" && (
          <img
            src={viewStory.media_url}
            alt="story"
            className="w-full h-full object-cover"
          />
        )}

        {viewStory?.media_type === "video" && (
          <video
            autoPlay
            loop
            onEnded={()=>setViewStory(null)}
            muted
            src={viewStory.media_url}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-700">
        <div
          className="h-1 bg-white transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SorieView;
