import axios from "axios";
import { useState } from "react";

const useDeleteCategory = () => {
  const [loading, setLoading] = useState(false);

  const deleteCategory = async (id, callback) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;

    try {
      setLoading(true);
      const token = sessionStorage.getItem("token");
      const res = await axios.delete(`http://localhost:5000/api/category/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (res.data.success || res.data.seccess) {
        alert("Deleted successfully");
        // ហៅ callback function ដើម្បី fetch ទិន្នន័យថ្មីមកបង្ហាញក្នុង Table វិញ
        if (callback) callback();
      }
    } catch (error) {
      console.error("Delete error", error);
      alert(error.response?.data?.message || "Failed to delete category");
    } finally {
      setLoading(false);
    }
  };

  return { deleteCategory, loading };
};

export default useDeleteCategory;