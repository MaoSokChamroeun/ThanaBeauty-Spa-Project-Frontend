import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";

const useGallery = () => {
    const [gallery , setGallery] = useState([]);
    const [loading , setLoading] = useState(false);
    const fetchAllGallery = async () =>{
        setLoading(true)
        try{
            const token = sessionStorage.getItem('token');
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/gallery/public`,{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            if (res.data.success) {
                setLoading(false)
                setGallery(res.data.data || res.data.result || []);
                console.log('Fetching Gallery : ',res.data.data)
            }
        }catch(error){
            console.log('Fetching Error ' , error)
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchAllGallery()
    },[])
    return (
        {
            gallery,loading
        }
    )
}

export default useGallery