import axios from "axios";
import { useEffect, useState } from "react";

const useSpaPackage = () => {
  const [spaPackage, setSpaPackage] = useState([]);
  const [loading , setLoading] = useState(false)
  const getAllSpaPackage = async () => {
    try {
        setLoading(true)
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/spa-packages/public`,
      );
      if (res.data.success) {
        setLoading(false)
        setSpaPackage(res.data.data);
      }
    } catch (error) {
      console.log("Fetching fails please try again" , error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getAllSpaPackage();
  },[])

  return {spaPackage , loading};
};

export default useSpaPackage;