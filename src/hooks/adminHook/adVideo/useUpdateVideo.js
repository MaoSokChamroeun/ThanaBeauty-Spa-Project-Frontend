import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useUpdateVideo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [video, setVideo] = useState(null);
  const [preview, setPreview] = useState(null);
  const [oldVideo, setOldVideo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const res = await axios.get(
          `http://localhost:5000/api/video/${id}`,{
            headers : {
                Authorization : `Bearer ${token}`
            }
          }
        );

        const data = res.data.data;

        setTitle(data.title);
        setOldVideo(data.video);
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        toast.error("Failed to load video");
      }
    };
    fetchVideo();
  }, [id]);
  const handleChangeVideo = (e) => {
    const file = e.target.files[0];

    if (file) {
      setVideo(file);
      if (preview) URL.revokeObjectURL(preview);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateVideo = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);

    if (video) {
      formData.append("video", video);
    }

    try {
      const token = sessionStorage.getItem("token");
      const res = await axios.put(
        `http://localhost:5000/api/video/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        toast.success(res.data.message || "Video updated successfully");
        navigate("/admin/dashboard/video");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Video update failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    title,
    setTitle,
    preview,
    oldVideo,
    handleChangeVideo,
    handleUpdateVideo,
  };
};

export default useUpdateVideo;
