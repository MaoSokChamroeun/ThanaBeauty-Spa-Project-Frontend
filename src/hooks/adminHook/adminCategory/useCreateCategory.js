import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const useCreateCategory = () => {
    const [formData, setFormData] = useState({
        name: "",
        path: ""
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCreateCategory = async (e) => {
        e.preventDefault(); 
        setLoading(true);

        try {
            setLoading(true)
            const token = sessionStorage.getItem("token");
            const res = await axios.post(
                "http://localhost:5000/api/category", 
                formData, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (res.data.success) {
                setLoading(false)
                toast.success(res.data.message || 'Category created successfully!')
                setFormData({ name: "", path: "" }); 
                navigate("/admin/dashboard/category");
            }
        } catch (error) {
            console.error("Create Category Error:", error);
            // alert(error.response?.data?.message || "");
            toast.error(error.message || "Failed to create category")
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        setFormData,
        handleCreateCategory,
        loading
    };
};

export default useCreateCategory;