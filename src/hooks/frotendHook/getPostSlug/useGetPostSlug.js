import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useGetPostSlug = () => {
    const [postSlug, setPostSlug] = useState([]); 
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();
    useEffect(() => {
        const fetchSlugPost = async () => {
            if (!slug) return; 
            
            try {
                setLoading(true);
                const res = await axios.get(`${import.meta.env.VITE_API_URL}api/posts/slug/${slug}`);  
                if (res.data.success) {
                    setPostSlug(res.data.data); 
                }
            } catch (error) {
                console.error("Error fetching slug posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSlugPost();
    }, [slug]); 

    return { postSlug, loading };
};

export default useGetPostSlug;