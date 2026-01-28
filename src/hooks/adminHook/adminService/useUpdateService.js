
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const useUpdateService = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ១. កែសម្រួល State ឱ្យទៅជា Object សម្រាប់ភាសា
  const [formData, setFormData] = useState({
    title: { kh: "", en: "", ch: "" },
    description: { kh: "", en: "", ch: "" },
    price: "",
    duration: "",
    category: "",
  });

  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const res = await axios.get('http://localhost:5000/api/category', {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        });
        if (res.data.success) {
            setCategories(res.data.data || res.data.result);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);
useEffect(() => {
  // ការពារការហៅ API បើគ្មាន ID
  if (!id || id === "undefined") return;

  const fetchService = async () => {
    try {
      // កែតម្រូវមកប្រើ sessionStorage ឱ្យត្រូវតាមកូដ Login របស់អ្នក
      const token = sessionStorage.getItem("token");
      
      const res = await axios.get(`http://localhost:5000/api/services/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (res.data.success) {
        // ពិនិត្យមើល structure ឱ្យច្បាស់ (data ឬ result)
        const item = res.data.data || res.data.result;
        
        setFormData({
          title: item.title || { kh: "", en: "", ch: "" },
          description: item.description || { kh: "", en: "", ch: "" },
          price: item.price || "",
          duration: item.duration || "",
          // យកតែ ID របស់ category មកប្រើក្នុង select input
          category: item.category?._id || item.category || "", 
        });

        // បង្ហាញរូបភាពចាស់ក្នុង preview
        if (item.image) {
          setPreview(`http://localhost:5000/public/services/${item.image}`);
        }
      }
    } catch (error) {
      console.error("Fetch error:", error.response?.data || error.message);
    }
  };

  fetchService();
}, [id]);

  // ៣. បន្ថែម Function សម្រាប់ Handle ភាសា (ដូចក្នុង useCreate)
  const handleLangChange = (e, lang, field) => {
    setFormData({
      ...formData,
      [field]: {
        ...formData[field],
        [lang]: e.target.value
      }
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // const handleUpdateSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   const data = new FormData();
    
  //   // ៤. Append ភាសានីមួយៗតាម format "title.en" ដើម្បីឱ្យ Backend ស្រួល Parse
  //   data.append("title.kh", formData.title.kh);
  //   data.append("title.en", formData.title.en);
  //   data.append("title.ch", formData.title.ch);

  //   data.append("description.kh", formData.description.kh);
  //   data.append("description.en", formData.description.en);
  //   data.append("description.ch", formData.description.ch);

  //   data.append("price", formData.price);
  //   data.append("duration", formData.duration);
  //   data.append("category", formData.category);
    
  //   if (image) {
  //     data.append("image", image);
  //   }

  //   try {
  //     const res = await axios.put(`http://localhost:5000/api/services/${id}`, data, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });

  //     if (res.data.success) {
  //       navigate("/admin/dashboard/services");
  //     }
  //   } catch (error) {
  //     console.error("Update error:", error.response?.data || error.message);
  //     alert("Failed to update service");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
const handleUpdateSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const data = new FormData();
  
  // Append ភាសា និងទិន្នន័យផ្សេងៗ (កូដចាស់របស់អ្នកគឺល្អហើយ)
  data.append("title.kh", formData.title.kh);
  data.append("title.en", formData.title.en);
  data.append("title.ch", formData.title.ch);
  data.append("description.kh", formData.description.kh);
  data.append("description.en", formData.description.en);
  data.append("description.ch", formData.description.ch);
  data.append("price", formData.price);
  data.append("duration", formData.duration);
  data.append("category", formData.category);
  
  if (image) {
    data.append("image", image);
  }

  try {
    // ចំណុចត្រូវកែ៖ ទាញយក Token មកប្រើ
    const token = sessionStorage.getItem("token"); 

    const res = await axios.put(`http://localhost:5000/api/services/${id}`, data, {
      headers: { 
        "Content-Type": "multipart/form-data",
        // បន្ថែម Authorization Header នៅទីនេះ
        Authorization: `Bearer ${token}` 
      },
    });

    if (res.data.success) {
      alert("Service updated successfully!");
      navigate("/admin/dashboard/services");
    }
  } catch (error) {
    console.error("Update error:", error.response?.data || error.message);
    alert(error.response?.data?.message || "Failed to update service");
  } finally {
    setLoading(false);
  }
};
  return {
    formData,
    categories,
    handleUpdateSubmit,
    handleImageChange,
    handleLangChange, // បញ្ជូនវាទៅ UI ដើម្បីប្រើក្នុង Input
    handleChange,
    loading,
    preview,
    navigate,
  };
};

export default useUpdateService;