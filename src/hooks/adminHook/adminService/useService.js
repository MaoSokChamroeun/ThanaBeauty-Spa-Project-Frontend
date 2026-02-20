
import axios from "axios";
import { useEffect, useState } from "react";

const useService = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllService = async () => {
        setLoading(true);
        try {
            const token = sessionStorage.getItem("token");
            const res = await axios.get(`${import.meta.env.VITE_API_URL}api/services`, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        });

            if (res.data.success) {
                setServices(res.data.data || []);
            }
        } catch (error) {
            // Handle 401 (Unauthorized) or 403 (Forbidden)
            console.error('Fetching error:', error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllService();
    }, []);

    return { services, getAllService, loading };
};

export default useService;