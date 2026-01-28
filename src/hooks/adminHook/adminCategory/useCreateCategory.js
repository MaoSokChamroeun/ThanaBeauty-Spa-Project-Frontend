// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const useCreateCategory = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         path: ""
//     });
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleCreateCategory = async (e) => {
//         e.preventDefault(); 
        
//         setLoading(true);
//         try {
//             // FIX: Pass the 'formData' object so 'name' and 'path' are included
//             const res = await axios.post("http://localhost:5000/api/category", formData);

//             // Using your backend's specific success key
//             if (res.data.success || res.data.seccess) {
//                 alert("Category created successfully!");
//                 setFormData({ name: "", path: "" }); 
//                 navigate("/admin/dashboard/category");
//             }
//         } catch (error) {
//             console.error("Create Category Error:", error);
//             // This alert displays the "name are required" message from your backend
//             alert(error.response?.data?.message || "Failed to create category");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return {
//         formData,
//         setFormData,
//         handleCreateCategory,
//         loading
//     };
// };

// export default useCreateCategory;

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
                alert("Category created successfully!");
                setFormData({ name: "", path: "" }); 
                navigate("/admin/dashboard/category");
            }
        } catch (error) {
            console.error("Create Category Error:", error);
            // បង្ហាញ Error Message ពី Backend (ដូចជា "Name is required")
            alert(error.response?.data?.message || "Failed to create category");
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