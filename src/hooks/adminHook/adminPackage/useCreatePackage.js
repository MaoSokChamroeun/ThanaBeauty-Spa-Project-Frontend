import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const useCreatePackage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: { en: "", kh: "", ch: "" },
    description: { en: "", kh: "", ch: "" },
  });
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
   const handleLangChange = (e, lang, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [lang]: e.target.value,
      },
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("title.en", formData.title.en);
    data.append("title.kh", formData.title.kh);
    data.append("title.ch", formData.title.ch);
    data.append("description.en", formData.description.en);
    data.append("description.kh", formData.description.kh);
    data.append("description.ch", formData.description.ch);
    data.append("image", image);
    try {
      setLoading(true);
      const token = sessionStorage.getItem("token");
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/package`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (res.data.success) {
        setLoading(false);
        toast.success(res.data.message || "Package Created successfully");
        navigate("/admin/dashboard/package");
      }
    } catch (error) {
      console.error("Upload error", error);
      toast.error(error.message || "Failed to create package");
    } finally {
      setLoading(false);
    }
  };
  return {
    handleSubmit,
    handleImageChange,
    handleChange,
    loading,
    preview,
    navigate,
    handleLangChange,
    formData
  };
};

export default useCreatePackage;
