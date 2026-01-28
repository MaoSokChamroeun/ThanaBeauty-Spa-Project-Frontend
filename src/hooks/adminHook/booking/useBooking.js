import axios from "axios"
import { useEffect, useState } from "react";

const useBooking = () => {
    const [booking, setBooking] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllBooking = async () => {
        setLoading(true);
        try {
            const token = sessionStorage.getItem("token")
            const res = await axios.get('http://localhost:5000/api/booking',{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            });
            if (res.data.success) {
                setBooking(res.data.data);
            }
        } catch (error) {
            console.error('Fetching Error:', error);
        } finally {
            // This ensures loading is false whether it succeeds or fails
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllBooking();
    }, []);

    return { booking, loading, getAllBooking };
};

export default useBooking;