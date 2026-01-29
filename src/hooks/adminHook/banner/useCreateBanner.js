import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useCreateBanner = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (preview) URL.revokeObjectURL(preview);

      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handCreateBanner = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please select an image first");
      return;
    }
    setLoading(true);
    const data = new FormData();
    data.append("image", image);
    try {
      setLoading(true);
      const token = sessionStorage.getItem("token");
      const res = await axios.post(`http://localhost:5000/api/banner`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setLoading(false);
        toast.success(res.data.message || "Banner Create Successfully");
        setImage(null);
        setPreview(null);
        navigate("/admin/dashboard/banner");
      }
    } catch (error) {
      setLoading(false);
      console.error("Upload error:", error.response?.data || error.message);
      toast.error(error.message || "Banner Create fials");
    }
  };

  return {
    loading,
    preview,
    handleChangeImage,
    handCreateBanner,
    navigate,
  };
};

export default useCreateBanner;
