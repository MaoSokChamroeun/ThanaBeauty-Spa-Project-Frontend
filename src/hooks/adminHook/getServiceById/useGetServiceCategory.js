// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const useGetServiceCategory = () => {
//   const { slug } = useParams();
//   const [servicesCategory, setServicesCategory] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Only fetch if slug exists
//     if (!slug) return;

//     const fetchServices = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(
//           `http://localhost:5000/api/services/category/${slug}`
//         );
//         // Ensure we are setting an array even if data is null
//         setServicesCategory(res.data.data || []);
//       } catch (error) {
//         console.error("Error fetching services:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, [slug]);

//   // Return data and state as an object, NOT JSX
//   return { servicesCategory, loading };
// };

// export default useGetServiceCategory;


import { useState, useEffect } from "react";
import axios from "axios";

const useGetServiceCategory = (slug) => {
  const [servicesCategory, setServicesCategory] = useState([]);
  const [loading , setLoading] = useState(false);
  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true)
      try {
        const token = sessionStorage.getItem("token");
        const response = await axios.get(`http://localhost:5000/api/services/category/${slug}`,{
          headers : {
            Authorization : `Bearer ${token}`
          }
        });
        
        if(response.data.success){
          setLoading(false)
            setServicesCategory(response.data); 
            console.log(response.data)
        }
       
      } catch (error) {
        console.error("Fetch Error:", error);
        setServicesCategory([]);
      }
    };

    if (slug) {
      fetchServices();
    }
  }, [slug]); 

  return { servicesCategory , loading};
};

export default useGetServiceCategory;