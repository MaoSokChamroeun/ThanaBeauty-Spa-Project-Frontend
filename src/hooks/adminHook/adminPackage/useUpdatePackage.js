import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const useUpdatePackage = () => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: { en: "", kh: "", ch: "" },
    description: { en: "", kh: "", ch: "" },
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // 1. Fetch existing data when the component mounts
  useEffect(() => {
    const fetchPackage = async () => {
      try {
        setLoading(true);
        const token = sessionStorage.getItem("token");
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/spa-packages/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (res.data.success) {
          setLoading(false);
          const packagePost = res.data.data;
          setFormData({
            title: packagePost.title || { kh: "", en: "", ch: "" },
            description: packagePost.description || { kh: "", en: "", ch: "" },
          });
          setPreview(packagePost.image);
        }
      } catch (error) {
        console.error("Fetch error", error);
      }
    };
    fetchPackage();
  }, [id]);

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
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  // 2. The Update Submit function
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("title.en", formData.title.en);
    data.append("title.kh", formData.title.kh);
    data.append("title.ch", formData.title.ch);
    data.append("description.en", formData.description.en);
    data.append("description.kh", formData.description.kh);
    data.append("description.ch", formData.description.ch);

    if (image) {
      data.append("image", image);
    }
    try {
      setLoading(true);
      const token = sessionStorage.getItem("token");
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/spa-packages/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (res.data.success) {
        toast.success(res.data.message || "Package Updated successfully");
        navigate("/admin/dashboard/package");
      }
    } catch (error) {
      console.error(
        "Update error details:",
        error.response?.data || error.message,
      );
      toast.error(error.message || "Sorry Update fails :(");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleUpdateSubmit,
    handleImageChange,
    handleChange,
    loading,
    preview,
    navigate,
    handleLangChange
  };
};

export default useUpdatePackage;
