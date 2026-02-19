import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import Sidebar from "../Sidebar";
import HeroBar from "../HeroBar";
import useUpdateVideo from "../../hooks/adminHook/adVideo/useUpdateVideo";

const UpdateVideo = () => {
  const {
    loading,
    title,
    setTitle,
    preview,
    oldVideo,
    handleChangeVideo,
    handleUpdateVideo,
  } = useUpdateVideo();

  return (
    <div className="flex gap-2">
      <Sidebar />
      <HeroBar>
        <h1 className="text-[35px] p-2 font-bold">Update Video</h1>

        <button className="bg-blue-600 w-20 h-10 rounded-xs">
          <Link to={"/admin/dashboard/video"} className="text-white">
            Back
          </Link>
        </button>

        <form
          onSubmit={handleUpdateVideo}
          className="bg-white p-6 mt-5 rounded-xl shadow-md space-y-4 border border-gray-100"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Video Title
            </label>
            <input
              type="text"
              placeholder="Enter video title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>

          {/* Upload new video */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Replace Video (optional)
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={handleChangeVideo}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
            />
          </div>

          {/* Preview */}
          <div className="mt-4">
            <p className="text-xs text-gray-500 mb-2">Video Preview:</p>

            {preview ? (
              <video
                src={preview}
                controls
                className="w-40 h-40 object-cover rounded-lg border shadow-sm"
              />
            ) : oldVideo ? (
              <video
                src={`http://localhost:5000/public/videos/${oldVideo}`}
                controls
                className="w-40 h-40 object-cover rounded-lg border shadow-sm"
              />
            ) : null}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-40 cursor-pointer bg-blue-600 text-white py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:bg-blue-300"
            >
              {loading ? <Loading /> : "Update"}
            </button>

            <Link
              to="/admin/dashboard/video"
              className="w-30 text-center bg-red-500 text-white py-2.5 rounded-lg font-bold hover:bg-gray-300 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </form>
      </HeroBar>
    </div>
  );
};

export default UpdateVideo;
