import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"
const useGalleryFront = () => {
    const [galleryFront , setGalleryFront] = useState([])
    const [loading , setLoading] = useState(true)
    const fetchAllBannerFront = async () =>{
        setLoading(true)
        try{
            const res = await axios.get(`${import.meta.env.VITE_API_URL}api/gallery/public`);
            setLoading(false)
            setGalleryFront(res.data.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchAllBannerFront();
    },[])
    return (
        {
            galleryFront,loading
        }
    )
}
export default useGalleryFront