// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const useUpdateCategory = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ name: "" } , {path : ""});
//   const [loading, setLoading] = useState(false);

//   // 1. Fetch the existing data to fill the form
//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         const token = localStorage.getItem("token")
//         const res = await axios.get(`http://localhost:5000/api/category/${id}`,{
//           headers : {
//               headers: {
//                 Authorization: `Bearer ${token}` 
//             }
//           }
//         });
//         if (res.data.success) {
//           setFormData(
//             { name: res.data.data.name },
//             {path : res.data.data.path}
//         );
//         }
//       } catch (error) {
//         console.error("Error fetching category:", error);
//       }
//     };
//     if (id) fetchCategory();
//   }, [id]);

//   // 2. Handle the Update
//   const handleUpdateCategory = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       // Send as JSON object
//       const res = await axios.put(`http://localhost:5000/api/category/${id}`, {
//         name: formData.name,
//         path : formData.path
//       });

//       if (res.data.success) {
//         alert("Category updated!");
//         navigate("/admin/dashboard/category"); // Redirect after success
//       }
//     } catch (error) {
//       console.error("Update error:", error);
//       alert("Failed to update category");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { formData, setFormData, handleUpdateCategory, loading };
// };

// export default useUpdateCategory;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const useUpdateCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", path: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        // ប្រើ sessionStorage ដូចកាលពី Login (ឬ localStorage បើអ្នកប្តូរ)
        const token = sessionStorage.getItem("token"); 
        const res = await axios.get(`http://localhost:5000/api/category/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (res.data.success) {
          const categoryData = res.data.data || res.data.result;
          setFormData({
            name: categoryData.name,
            path: categoryData.path
          });

          console.log(res.data.success)
        }
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };
    if (id) fetchCategory();
  }, [id]);

  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = sessionStorage.getItem("token");
      const res = await axios.put(
        `http://localhost:5000/api/category/${id}`, 
        formData, 
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (res.data.success) {
        alert("Category updated!");
        navigate("/admin/dashboard/category");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert(error.response?.data?.message || "Failed to update category");
    } finally {
      setLoading(false);
    }
  };

  return { formData, setFormData, handleUpdateCategory, loading };
};

export default useUpdateCategory;