import axios from "axios"
import { useEffect, useState } from "react"

const usePackage = () => {
    const [packages, setPackage] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllPackage = async () => {
        setLoading(true);
        try {
            const token = sessionStorage.getItem("token");
        const res = await axios.get('http://localhost:5000/api/package', {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        });
        if (res.data.success) {
            setPackage(res.data.data || res.data.result);
        }
        } catch (error) {
            console.error('Fetching error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllPackage();
    }, []);

    return {
        packages, 
        getAllPackage, 
        loading
    };
};

export default usePackage;