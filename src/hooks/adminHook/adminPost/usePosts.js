import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const token = sessionStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}api/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setLoading(false);
        setPosts(res.data.data);
      }
    } catch (error) {
      console.log("Fetching error", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPosts();
  },[])

  return (
    {posts , loading , fetchPosts}
  )
};


export default usePosts;
