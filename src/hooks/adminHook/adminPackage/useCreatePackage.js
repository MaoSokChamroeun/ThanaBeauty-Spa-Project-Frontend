import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const useCreatePackage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    package_name: "",
    price: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

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
      const token = sessionStorage.getItem("token");
      const res = await axios.post("http://localhost:5000/api/package", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setLoading(false);
        navigate("/admin/dashboard/package");
      }
    } catch (error) {
      console.error("Upload error", error);
      alert("Failed to create package");
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
