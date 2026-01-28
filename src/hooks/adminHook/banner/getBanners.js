
import { useEffect, useState } from "react";
import axios from "axios";

const useBanners = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                setLoading(true);
                const token = sessionStorage.getItem("token");
                const res = await axios.get('http://localhost:5000/api/banner', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (res.data.success) {
                    setBanners(res.data.data);
                }
            } catch (error) {
            
                console.error("Error fetching banners:", error.response?.data?.message || error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBanners();
    }, []);

    return { banners, loading };
};

export default useBanners;