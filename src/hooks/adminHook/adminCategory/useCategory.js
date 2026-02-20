import axios from "axios";
import { useEffect, useState } from "react"

const useCategory = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const getAllCategory = async () => {
        try {
            setLoading(true);
            const token = sessionStorage.getItem("token");
            const res = await axios.get(`${import.meta.env.VITE_API_URL}api/category`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.data.success) {
                setCategories(res.data.data || res.data.result || []);
            }
        } catch (error) {
            console.error("Error 401: Unathurization!", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getAllCategory();
    }, [])
    return (
        {
            categories, loading
        }
    )
}

export default useCategory