import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
const useDelete = () => {
  const [loading, setLoading] = useState(false);
  const deletePackage = async (id, callback) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;
    try {
      setLoading(true);
      const res = await axios.delete(`http://localhost:5000/api/package/${id}`);
      if (res.data.success) {
        toast.success(res.data.message || "Deleted successfully");
        if (callback) callback(); 
      }
    } catch (error) {
      console.error("Delete error", error);
      toast.error(error.message || "Failed to delete package");
    } finally {
      setLoading(false);
    }
  };

  return { deletePackage, loading };
};

export default useDelete;