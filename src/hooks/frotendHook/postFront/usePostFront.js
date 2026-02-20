import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";
const usePostFront = () => {
    const [postFront , setPostFront] = useState([]);
    const [loading , setLoading] = useState(true)
     const fetchPostsFront = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_API_URL}api/posts/public`);

      if (res.data.success) {
        setLoading(false);
        setPostFront(res.data.data);
        
      }
    } catch (error) {
      console.log("Fetching error", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPostsFront();
  },[])
    return(
        {loading , postFront}
    )
}

export default usePostFront