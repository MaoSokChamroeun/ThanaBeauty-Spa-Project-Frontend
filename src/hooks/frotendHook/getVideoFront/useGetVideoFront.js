import axios from "axios"
import { useEffect, useState } from "react";

const useGetVideoFront = () => {
    const [video , setVideo] = useState([])
    const [loading , setLoading] = useState(false)
    const fetchAllVideo = async () => {
        setLoading(true)
        try{
            const res = await axios.get('http://localhost:5000/api/video/public');
            if (res.data.success) {
                setLoading(false)
                setVideo(res.data.data);
            }
        }catch(error){
            console.log('Fetching error', error)
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchAllVideo()
    },[])
    return (
        {
            video,loading
        }
    )
}

export default useGetVideoFront