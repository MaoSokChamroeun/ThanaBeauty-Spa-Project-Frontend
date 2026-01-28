import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useCreateBanner = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Cleanup function to prevent memory leaks
    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Revoke old preview if it exists
            if (preview) URL.revokeObjectURL(preview);
            
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handCreateBanner = async (e) => {
        e.preventDefault();
        
        if (!image) {
            alert("Please select an image first");
            return;
        }

        setLoading(true);
        const data = new FormData();
        data.append("image", image);

        try {
            const token = sessionStorage.getItem("token");
            const res = await axios.post(`http://localhost:5000/api/banner`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization : `Bearer ${token}`
                }
            });

            if (res.data.success) {
                setLoading(false);
                setImage(null);
                setPreview(null);
                navigate("/admin/dashboard/banner");
            }
        } catch (error) {
            setLoading(false);
            console.error("Upload error:", error.response?.data || error.message);
            alert("Failed to upload banner. Please try again.");
        }
    };

    return {
        loading,
        preview,
        handleChangeImage,
        handCreateBanner,
        navigate
    };
};

export default useCreateBanner;