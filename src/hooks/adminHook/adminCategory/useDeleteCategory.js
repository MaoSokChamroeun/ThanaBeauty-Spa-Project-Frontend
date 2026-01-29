import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
const useDeleteCategory = () => {
  const [loading, setLoading] = useState(false);

  const deleteCategory = async (id, callback) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?",
    );
    if (!confirmDelete) return;
    try {
      setLoading(true);
      const token = sessionStorage.getItem("token");
      const res = await axios.delete(
        `http://localhost:5000/api/category/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (res.data.success || res.data.seccess) {
        toast.success(res.data.message || "Deleted successfully");
        if (callback) callback();
      }
    } catch (error) {
      console.error("Delete error", error);
      toast.error(error.message || "Failed to delete category");
    } finally {
      setLoading(false);
    }
  };

  return { deleteCategory, loading };
};

export default useDeleteCategory;
