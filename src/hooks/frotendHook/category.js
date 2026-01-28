import axios from "axios"
import { useEffect, useState } from "react";
import Loading from "../../Admin/Loading";
const useFrontCategory = () => {
    const [categoriesFront , setCategoriesFront] = useState([]);
    const [loading , setLoading] = useState(true);
    const fetchCategoryFrontend = async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/category/public');
    setCategoriesFront(res.data.data || res.data.result || []);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};


    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchCategoryFrontend();
    } ,[])
    return ({
        categoriesFront , loading
    })
}

export default useFrontCategory;