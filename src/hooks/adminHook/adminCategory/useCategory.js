import axios from "axios";
import { useEffect, useState } from "react"

const useCategory = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const getAllCategory = async () => {
        try {
            setLoading(true);
            const token = sessionStorage.getItem("token");
            const res = await axios.get('http://localhost:5000/api/category', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.data.success) {
                setCategories(res.data.data || res.data.result || []);
            }
        } catch (error) {
            console.error("Error 401: បញ្ហាការផ្ទៀងផ្ទាត់សិទ្ធិ!", error);
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