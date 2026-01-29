import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const useDeleteService = () => {
  const [loading, setLoading] = useState(false);
  const deleteService = async (id, callback) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?",
    );
    if (!confirmDelete) return;

    try {
      setLoading(true);
      const res = await axios.delete(
        `http://localhost:5000/api/services/${id}`,
      );
      if (res.data.seccess || res.data.success) {
        setLoading(false);
        toast.success(res.data.message || "Deleted Services successfully");
        if (callback) callback(); 
      }
    } catch (error) {
      toast.error(error.message || "Failed to delete package");
    } finally {
      setLoading(false);
    }
  };

  return { deleteService, loading };
};

export default useDeleteService;
