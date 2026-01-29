import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useUpdateCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", path: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setLoading(true);
        const token = sessionStorage.getItem("token");
        const res = await axios.get(
          `http://localhost:5000/api/category/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (res.data.success) {
          setLoading(false);
          const categoryData = res.data.data || res.data.result;
          setFormData({
            name: categoryData.name,
            path: categoryData.path,
          });
        }
      } catch (error) {
        toast.error(error.message || "Category fetching fails");
      }
    };
    if (id) fetchCategory();
  }, [id]);

  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = sessionStorage.getItem("token");
      const res = await axios.put(
        `http://localhost:5000/api/category/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (res.data.success) {
        toast.success(res.data.message || "Category Updated successfully");
        navigate("/admin/dashboard/category");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert(error.response?.data?.message || "Failed to update category");
    } finally {
      setLoading(false);
    }
  };

  return { formData, setFormData, handleUpdateCategory, loading };
};

export default useUpdateCategory;
