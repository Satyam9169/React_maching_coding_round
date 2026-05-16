import React, {useState, useEffect} from "react";

const useFetchData = (API) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null)
            const response = await fetch(API);
            if(!response.ok){
                throw new Error(`HTTPS network ${response.status} Issue`);
            }
            const data = await response.json();
            setUser(data)
        }catch(err){
            setError(err.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=> {
        if(API){
            fetchData()
        }
    }, [API])

    return {user, loading, error};

}

export default useFetchData;