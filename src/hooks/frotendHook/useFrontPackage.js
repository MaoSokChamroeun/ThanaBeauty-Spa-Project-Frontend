import axios from "axios";
import { useEffect, useState } from "react";

const useFrontPackage = () => {
  const [frontPackage, setFrontPackage] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPublicPackage = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/services/public"
      );

      setFrontPackage(res.data.data);
    } catch (error) {
      console.error("Failed to fetch public packages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublicPackage();
  }, []);

  return {
    frontPackage,
    loading,
  };
};

export default useFrontPackage;
