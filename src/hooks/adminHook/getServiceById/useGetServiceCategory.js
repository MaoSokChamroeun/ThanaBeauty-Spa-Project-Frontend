import { useState, useEffect } from "react";
import axios from "axios";

const useGetServiceCategory = (slug) => {
  const [servicesCategory, setServicesCategory] = useState([]);
  const [loading , setLoading] = useState(false);
  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/services/category/${slug}`);
        if(response.data.success){
          setLoading(false)
            setServicesCategory(response.data); 
        }
       
      } catch (error) {
        console.error("Fetch Error:", error);
        setServicesCategory([]);
      }
    };

    if (slug) {
      fetchServices();
    }
  }, [slug]); 

  return { servicesCategory , loading};
};

export default useGetServiceCategory;