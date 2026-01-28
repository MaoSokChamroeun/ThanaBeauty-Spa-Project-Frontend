import axios from "axios";
import { useState } from "react";

const useDeleteBooking = () => {
  const [loading, setLoading] = useState(false);

  // Pass the ID and a callback function (like getAllPackage) to refresh the UI
  const deleteBooking = async (id, callback) => {
    // 1. Ask for confirmation FIRST
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;

    try {
      setLoading(true);
      const token = sessionStorage.getItem("token")
      const res = await axios.delete(`http://localhost:5000/api/booking/${id}`,{
        headers : {
          Authorization : `Bearer ${token}`
        }
      });

      if (res.data.seccess || res.data.success) {
        alert("Deleted successfully");
        if (callback) callback(); 
      }
    } catch (error) {
      console.error("Delete error", error);
      alert("Failed to delete package");
    } finally {
      setLoading(false);
    }
  };

  return { deleteBooking, loading };
};

export default useDeleteBooking;