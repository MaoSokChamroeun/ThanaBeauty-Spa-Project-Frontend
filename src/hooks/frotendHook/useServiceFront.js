import axios from "axios";
import { useEffect, useState } from "react";

const useServiceFront = () => {
  const [servicesFront, setServicesFront] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPublicServices = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/services/public"
      );

      setServicesFront(res.data.data || res.data.services || []);
    } catch (error) {
      console.error("Failed to fetch public services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublicServices();
  }, []);

  return {
    servicesFront,
    loading,
  };
};

export default useServiceFront;
