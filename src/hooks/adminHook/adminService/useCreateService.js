import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useCreateService = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: { kh: "", en: "", ch: "" },
    description: { kh: "", en: "", ch: "" },
    price: "",
    category: "",
    duration: "",
  });

  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch categories (admin)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/category", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCategories(res.data.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Handle normal inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle language inputs
  const handleLangChange = (e, lang, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [lang]: e.target.value,
      },
    }));
  };

  // Handle image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("title.kh", formData.title.kh);
    data.append("title.en", formData.title.en);
    data.append("title.ch", formData.title.ch);

    data.append("description.kh", formData.description.kh);
    data.append("description.en", formData.description.en);
    data.append("description.ch", formData.description.ch);

    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("duration", formData.duration);

    if (image) {
      data.append("image", image);
    }

    try {
      setLoading(true)
      const token = sessionStorage.getItem("token");
      const res = await axios.post("http://localhost:5000/api/services", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setLoading(false)
        toast.success(res.data.message || "Service created successfully!");
        navigate("/admin/dashboard/services");
      }
    } catch (error) {
      console.error("Create error:", error.response?.data || error.message);
      toast.error(error.message || "Failed to create service")
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    categories,
    handleChange,
    handleLangChange,
    handleCreateSubmit,
    handleImageChange,
    preview,
    loading,
    navigate,
  };
};

export default useCreateService;
