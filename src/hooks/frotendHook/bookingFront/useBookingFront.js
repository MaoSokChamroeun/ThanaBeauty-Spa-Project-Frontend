import axios from "axios"
import { useState } from "react";


const useBookingFront = () => {
    const [formData , setFormData] = useState({
        client_name : "",
        phone : "",
        service_id : "",
        package_id : "",
        description: ""
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
    const handleSumbitBooking = async(e) =>{
        e.preventDefault();
        const data = new FormData();
        data.append("client_name" , formData.client_name)
        data.append("phone" , formData.phone),
        data.append("service_id" , formData.service_id)
        data.append("package_id" , formData.package_id)
        data.append("description" , formData.description )
        try{
            const res = await axios.post('http://localhost:5000/api/booking', data);
            if(res.data.success){
                alert('Order successfully');
            }
        }catch(error){
            console.log(error)
        }
    }
    return (
        {
            handleSumbitBooking,
            handleChange
        }
    )
}

export default useBookingFront