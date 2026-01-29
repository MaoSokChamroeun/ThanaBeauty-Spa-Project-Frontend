import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const useUpdateService = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ១. កែសម្រួល State ឱ្យទៅជា Object សម្រាប់ភាសា
  const [formData, setFormData] = useState({
    title: { kh: "", en: "", ch: "" },
    description: { kh: "", en: "", ch: "" },
    price: "",
    duration: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const token = sessionStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/category", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data.success) {
          setLoading(false);
          setCategories(res.data.data || res.data.result);
        }
      } catch (error) {
        toast.error(error.message || "Failed to Fetch Category");
      }
    };
    fetchCategories();
  }, []);
  useEffect(() => {
    if (!id || id === "undefined") return;

    const fetchService = async () => {
      try {
        setLoading(true);
        const token = sessionStorage.getItem("token");
        const res = await axios.get(
          `http://localhost:5000/api/services/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (res.data.success) {
          setLoading(false);
          const item = res.data.data || res.data.result;
          setFormData({
            title: item.title || { kh: "", en: "", ch: "" },
            description: item.description || { kh: "", en: "", ch: "" },
            price: item.price || "",
            duration: item.duration || "",
            category: item.category?._id || item.category || "",
          });
          if (item.image) {
            setPreview(`http://localhost:5000/public/services/${item.image}`);
          }
        }
      } catch (error) {
        toast.error(error.message || "Service fetch Fails :(");
      }
    };

    fetchService();
  }, [id]);

  const handleLangChange = (e, lang, field) => {
    setFormData({
      ...formData,
      [field]: {
        ...formData[field],
        [lang]: e.target.value,
      },
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleUpdateSubmit = async (e) => {
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
    data.append("duration", formData.duration);
    data.append("category", formData.category);

    if (image) {
      data.append("image", image);
    }
    try {
      setLoading(true);
      const token = sessionStorage.getItem("token");
      const res = await axios.put(
        `http://localhost:5000/api/services/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (res.data.success) {
        toast.success(res.data.message || "Service updated successfully!");
        navigate("/admin/dashboard/services");
      }
    } catch (error) {
      console.error("Update error:", error.response?.data || error.message);
      toast.error(error.message || "Failed to update service");
    } finally {
      setLoading(false);
    }
  };
  return {
    formData,
    categories,
    handleUpdateSubmit,
    handleImageChange,
    handleLangChange, 
    handleChange,
    loading,
    preview,
    navigate,
  };
};

export default useUpdateService;
