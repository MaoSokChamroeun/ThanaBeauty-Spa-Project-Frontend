import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const useCreatePackage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    package_name: "",
    price: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    data.append("package_name", formData.package_name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("image", image);
    try {
      setLoading(true);
      const token = sessionStorage.getItem("token");
      const res = await axios.post("http://localhost:5000/api/package", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

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
  };
};

export default useCreatePackage;
