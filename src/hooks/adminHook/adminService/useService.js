// import axios from "axios"
// import { useEffect, useState } from "react"

// const useService = () => {
//     const [services, setServices] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const getAllService = async () => {
//         setLoading(true);
//         try {
//             const res = await axios.get('http://localhost:5000/api/services');
//             if (res.data.success) {
//                 setServices(res.data.data || []);
//                 console.log(res.data.data)
//             }
//         } catch (error) {
//             console.error('Fetching error:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         getAllService();
//     }, []);

//     return {
//         services, 
//         getAllService, 
//         loading
//     };
// };

// export default useService;

import axios from "axios";
import { useEffect, useState } from "react";

const useService = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllService = async () => {
        setLoading(true);
        try {
            const token = sessionStorage.getItem("token");
            const res = await axios.get('http://localhost:5000/api/services', {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        });

            if (res.data.success) {
                setServices(res.data.data || []);
            }
        } catch (error) {
            // Handle 401 (Unauthorized) or 403 (Forbidden)
            console.error('Fetching error:', error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllService();
    }, []);

    return { services, getAllService, loading };
};

export default useService;