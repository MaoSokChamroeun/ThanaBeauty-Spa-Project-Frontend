import axios from "axios";
import { useState } from "react";

const useDeleteBanner = () => {
  const [loading, setLoading] = useState(false);

  const deleteBanner = async (id , callback) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;
    try {
      setLoading(true);
      const res = await axios.delete(`http://localhost:5000/api/banner/${id}`);
      if (res.data.success) {
        alert("Deleted successfully");
        if (callback) callback(); 
      }
    } catch (error) {
      console.error("Delete error", error);
      alert("Failed to delete banner");
    } finally {
      setLoading(false);
    }
  };

  return { deleteBanner, loading };
};

export default useDeleteBanner;