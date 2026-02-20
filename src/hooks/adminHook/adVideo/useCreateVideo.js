import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useCreateVideo = () => {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleChangeVideo = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (preview) URL.revokeObjectURL(preview);
      setVideo(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleCreateVideo = async (e) => {
    e.preventDefault();

    if (!video) {
      toast.error("Please select a video first");
      return;
    }

    setLoading(true);

    const data = new FormData();
    data.append("title", title);
    data.append("video", video);

    try {
      const token = sessionStorage.getItem("token");
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}api/video`, 
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // remove if using cookies
          },
        }
      );

      if (res.data.success) {
        toast.success(res.data.message || "Video created successfully");
        setVideo(null);
        setPreview(null);
        setTitle("");
        navigate("/admin/dashboard/video");
      }
    } catch (error) {
      console.error("Upload error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Video upload failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    preview,
    title,
    setTitle,
    handleChangeVideo,
    handleCreateVideo,
    navigate
  };
};

export default useCreateVideo;
