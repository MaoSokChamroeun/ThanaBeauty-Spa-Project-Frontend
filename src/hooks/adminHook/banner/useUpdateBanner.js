import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const useUpdateBanner = () => {
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const fetchBanners = async () => {
      setLoading(true);
      try {
        const token = sessionStorage.getItem("token")
        const res = await axios.get(`http://localhost:5000/api/banner/${id}`,{
          headers : {
            Authorization : `Bearer ${token}`
          }
        });
        if (res.data.success) {
          setLoading(false);
          const item = res.data.data;
          setPreview(`http://localhost:5000/public/banners/${item.image}`);
        }
      } catch (error) {
        console.error("Error fetching banner:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateBanner = async (e) => {
    e.preventDefault();
    const data = new FormData();
    if (image) {
      data.append("image", image);
    }
    try {
      setLoading(true);
      const token = sessionStorage.getItem("token");
      const res = await axios.put(
        `http://localhost:5000/api/banner/${id}`,
        data,{
          headers : {
            Authorization : `Bearer ${token}`
          }
        }
      );
      if (res.data.success) {
        setLoading(false);
        toast.success(res.data.message || "Banner updated successfully");
        navigate("/admin/dashboard/banner");
      }
    } catch (error) {
      console.error("Error updating banner:", error);
    } finally {
      setLoading(false);
    }
  };
  return {
    preview,
    loading,
    navigate,
    handleImageChange,
    handleUpdateBanner,
  };
};

export default useUpdateBanner;
