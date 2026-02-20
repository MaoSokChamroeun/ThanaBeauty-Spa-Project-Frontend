import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const useDeleteVideo = () => {
  const [loading, setLoading] = useState(false);

  const deleteVideo = async (id , callback) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;
    try {
      setLoading(true);
      const token = sessionStorage.getItem('token')
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/video/${id}`,{
        headers : {
          Authorization : `Bearer ${token}`
        }
      });
      if (res.data.success) {
        toast.success(res.data.message || "Video successfully");
        if (callback) callback(); 
      }
    } catch (error) {
      console.error("Delete error", error);
      toast.error(error.message || "Failed to delete banner");
    } finally {
      setLoading(false);
    }
  };

  return { deleteVideo, loading };
};

export default useDeleteVideo;