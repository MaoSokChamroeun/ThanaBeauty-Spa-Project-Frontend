import axios from "axios";
import { useState } from "react";

const useDelete = () => {
  const [loading, setLoading] = useState(false);

  // Pass the ID and a callback function (like getAllPackage) to refresh the UI
  const deletePackage = async (id, callback) => {
    // 1. Ask for confirmation FIRST
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;

    try {
      setLoading(true);
      const res = await axios.delete(`http://localhost:5000/api/package/${id}`);

      // Check for your 'seccess' or 'success' key from backend
      if (res.data.seccess || res.data.success) {
        alert("Deleted successfully");
        if (callback) callback(); // This re-runs getAllPackage in the component
      }
    } catch (error) {
      console.error("Delete error", error);
      alert("Failed to delete package");
    } finally {
      setLoading(false);
    }
  };

  return { deletePackage, loading };
};

export default useDelete;