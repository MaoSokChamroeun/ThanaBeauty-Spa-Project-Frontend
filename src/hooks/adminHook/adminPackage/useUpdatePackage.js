import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const useUpdatePackage = () => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    package_name: "",
    price: "",
    description : ""
  });
  
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // 1. Fetch existing data when the component mounts
  useEffect(() => {
    const fetchPackage = async () => {
      try {
        setLoading(true)
        const token = sessionStorage.getItem("token")
        const res = await axios.get(`http://localhost:5000/api/package/${id}`,{
          headers : {
            Authorization : `Bearer ${token}`
          }
        });
        if (res.data.success) {
          setLoading(false)
          setFormData({
            package_name: res.data.data.package_name,
            price: res.data.data.price,
            description : res.data.data.description
          });
          setPreview(`http://localhost:5000/public/packages/${res.data.data.image}`);
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
  data.append("package_name", formData.package_name);
  data.append("price", formData.price);
  data.append("description" , formData.description);
  
  if (image) {
    data.append("image", image);
  }
  try {
    setLoading(true)
    const token = sessionStorage.getItem("token")
    const res = await axios.put(`http://localhost:5000/api/package/${id}`, data, {
      headers: {
         "Content-Type": "multipart/form-data",
         Authorization : `Bearer ${token}`
        },
    });
    if (res.data.success) {
      toast.success(res.data.message || "Package Updated successfully");
      navigate("/admin/dashboard/package");
    }
  } catch (error) {
    console.error("Update error details:", error.response?.data || error.message);
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
  };
};

export default useUpdatePackage;