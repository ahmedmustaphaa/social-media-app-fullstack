import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import {toast} from 'react-hot-toast'
function StorieModel({ setShowModel, fetchStories }) {
  const bgColor = ["#4f46e5", "#7c3aed", "#db2777", "#e11d48", "#ca8a04", "#0d9488"];
  const [mode, setMode] = useState("text");
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);
  const [previewUrl, setPrevUrl] = useState(null);
  const [selectedBg, setSelectedBg] = useState(bgColor[0]);

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMode("media"); 
      setMedia(file);
      setPrevUrl(URL.createObjectURL(file));
    }
  };

  const handleCreateStory = async () => {
    // هنا هتعمل API call أو أي حاجة لحفظ الاستوري
    setShowModel(false);

    toast.success("story addedd successfully")
  };

  return (
    <div className="fixed inset-0 z-50 min-h-screen bg-black/80 backdrop-blur text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
    
        <div className="mb-4 flex items-center justify-between text-center">
          <button
            className="text-white p-2 cursor-pointer"
            onClick={() => setShowModel(false)}
          >
            <ArrowLeft />
          </button>
          <h2 className="text-lg font-semibold flex-1">Create Story</h2>
          <span className="w-10"></span>
        </div>

        {/* Preview Box */}
        <div
          className="rounded-lg h-96 flex items-center justify-center relative overflow-hidden"
          style={{ backgroundColor: mode === "text" && selectedBg }}
        >
          {mode === "text" && (
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="bg-transparent text-white w-full h-full p-6 outline-none resize-none text-center text-lg"
              placeholder="What's on your mind?"
            ></textarea>
          )}

          {mode === "media" && previewUrl && (
            media?.type.startsWith("image") ? (
              <img
                src={previewUrl}
                alt="story preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={previewUrl}
                controls
                autoPlay
                loop
                className="w-full h-full object-cover"
              />
            )
          )}
        </div>

        {/* Background Color Picker (لو نص فقط) */}
        {mode === "text" && (
          <div className="flex gap-2 mt-4 justify-center">
            {bgColor.map((color, i) => (
              <button
                key={i}
                onClick={() => setSelectedBg(color)}
                className="w-8 h-8 rounded-full border-2 border-white"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <label className="flex-1 cursor-pointer bg-gray-700 py-2 px-4 rounded-lg text-center">
            Upload Media
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleMediaUpload}
              className="hidden"
            />
          </label>

          <button
            onClick={handleCreateStory}
            className="flex-1 bg-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default StorieModel;
