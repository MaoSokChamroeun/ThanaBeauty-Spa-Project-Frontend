import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const usePostDelete = () => {
  const [loading, setLoading] = useState(false);
  const deletePost = async (id, callback) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?",
    );
    if (!confirmDelete) return;

    try {
      setLoading(true);
      const token = sessionStorage.getItem("token")
      const res = await axios.delete(
        `http://localhost:5000/api/posts/${id}`,{
            headers : {
                Authorization : `Bearer ${token}`
            }
        }
      );
      if (res.data.seccess || res.data.success) {
        setLoading(false);
        toast.success(res.data.message || "Deleted Post successfully");
        if (callback) callback(); 
      }
    } catch (error) {
      toast.error(error.message || "Failed to delete package");
    } finally {
      setLoading(false);
    }
  };

  return { deletePost, loading };
};

export default usePostDelete;
