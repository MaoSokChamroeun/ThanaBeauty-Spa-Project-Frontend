import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"
const useBannerFront = () => {
    const [bannerFront , setBannerFront] = useState([])
    const [loading , setLoading] = useState(true)
    const fetchAllBannerFront = async () =>{
        setLoading(true)
        try{
            const res = await axios.get(`http://localhost:5000/api/banner/public`);
            setLoading(false)
            setBannerFront(res.data.data)
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
            bannerFront,loading
        }
    )
}
export default useBannerFront