import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const useCreate = () => {
  const [formData, setFormData] = useState({
    title: { en: "", kh: "", ch: "" },
    content: { en: "", kh: "", ch: "" },
    slug: "",
    tags: "",
    author: "",
    isPublished: "false", // គួរដាក់ default ជា string "false" បើប្រើជាមួយ form-data
  });

  const [authorList, setAuthorList] = useState([]); // ប្តូរឈ្មោះកុំឱ្យស្ទួនជាមួយ field ក្នុង formData
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLangChange = (e, lang, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: { ...prev[field], [lang]: e.target.value },
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/admin/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data && res.data.success) {
          setAuthorList(res.data.data)
          setFormData((prev) => ({ ...prev, author: res.data.data.username }));
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchAuthor();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title.en", formData.title.en);
    data.append("title.kh", formData.title.kh);
    data.append("title.ch", formData.title.ch);
    data.append("content.en", formData.content.en);
    data.append("content.kh", formData.content.kh);
    data.append("content.ch", formData.content.ch);
    data.append("slug", formData.slug);
    data.append("tags", formData.tags);
    data.append("author", formData.author);
    data.append("isPublished", formData.isPublished);

    if (image) data.append("image", image);

    try {
      const token = sessionStorage.getItem("token");
      const res = await axios.post("http://localhost:5000/api/post", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
       
        toast.success(res.data.message || "Post created successfully!");
        navigate("/admin/dashboard/posts");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.log("Error", error);
    }
  };

  return {
    authorList,
    formData,
    handleChange,
    handleLangChange,
    handleSubmit,
    preview,
    image,
    handleImageChange,
  };
};

export default useCreate;
