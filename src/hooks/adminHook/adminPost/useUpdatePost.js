import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useUpdatePost = () => {
  const { id } = useParams();
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [author, setAuthor] = useState([]);

  const [formData, setFormData] = useState({
    title: { en: "", kh: "", ch: "" },
    content: { en: "", kh: "", ch: "" },
    slug: "",
    tags: "",
    author: "",
    isPublished: "false",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleLangChange = (e, lang, field) => {
    setFormData({
      ...formData,
      [field]: {
        ...formData[field],
        [lang]: e.target.value,
      },
    });
  };

  // Fetch Authors
  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const res = await axios.get(`${import.meta.env.VITE_API_URL}api/admin/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data.success) {
          setAuthor(res.data.data);
          setFormData((prev) => ({ ...prev, author: res.data.data.username }));
        }
      } catch (error) {
        console.error("Fetch Author Error:", error);
      }
    };
    fetchAuthor();
  }, []);

  // Fetch Existing Post Data
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const token = sessionStorage.getItem("token");
        const res = await axios.get(`${import.meta.env.VITE_API_URL}api/posts/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.success) {
          const itemPost = res.data.data;
          setFormData({
            title: itemPost.title || { kh: "", en: "", ch: "" },
            content: itemPost.content || { kh: "", en: "", ch: "" },
            slug: itemPost.slug || "",
            tags: itemPost.tags || "",
            author: itemPost.author || "",
            isPublished: itemPost.isPublished?.toString() || "false",
          });

          if (itemPost.image) {
            setPreview(`${import.meta.env.VITE_API_URL}public/posts/${itemPost.image}`);
          }
        }
      } catch (error) {
        console.error("Fetch Post Error:", error);
        toast.error("Failed to load post data");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [id]);

  const handleUpdatePost = async (e) => {
    e.preventDefault(); // Fixed typo "preventDefualt"
    const data = new FormData();

    // Append nested objects for Multer/Backend parsing
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

    if (image) {
      data.append("image", image);
    }

    try {
      setLoading(true);
      const token = sessionStorage.getItem("token");
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}api/posts/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (res.data.success) {
        toast.success(res.data.message || "Post updated successfully");
        navigate("/admin/dashboard/posts");
      }
    } catch (error) {
      console.error("Update Error:", error);
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleImageChange,
    handleUpdatePost,
    loading,
    preview,
    handleLangChange,
    author,
  };
};

export default useUpdatePost;
