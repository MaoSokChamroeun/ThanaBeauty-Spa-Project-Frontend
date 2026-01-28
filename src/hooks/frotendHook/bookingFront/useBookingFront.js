import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useBookingFront = () => {
  const [loading, setLoading] = useState(false);
  const [packages, setPackages] = useState([]); 
  const [formData, setFormData] = useState({
    client_name: "",
    phone: "",
    service: "", 
    package: "", 
    description: "",
    booking_date: "", // New Field
  booking_time: "", // New Field
  });
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/package/public");
        if (res.data.success) {
          setPackages(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching packages", error);
      }
    };
    fetchPackages();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSumbitBooking = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/booking/public", formData);
      if (res.data.success) {
        toast.success(res.data.message || 'Order successfully')
        setFormData({ client_name: "", phone: "", service: "", package: "", description: "" });
      }
    } catch (error) {
      console.error("Submit Error:", error.response?.data);
      alert("Error: " + (error.response?.data?.message || "Failed to book"));
    } finally {
      setLoading(false);
    }
  };

  return { handleSumbitBooking, handleChange, formData, loading, packages };
};

export default useBookingFront;