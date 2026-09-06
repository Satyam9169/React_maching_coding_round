import React, { useState, useEffect } from "react";

const useFetchData = (API) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let controller = new AbortController();
        const fetchData = async () => {
            try {
                setLoading(true)
                setError(null)
                const response = await fetch(URL, {
                    signal: controller.signal
                });
                if (!response.ok) throw new Error(`HTTPS ${response.status} error`)
                const result = await response.json()
                setData(result)
            } catch (err) {
                console.error(err)
                if (err.name === "AbortError") {
                    console.log("🛑 API REQUEST CANCELLED:", url);
                    return;
                }
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
        return () => controller.abort();
    }, [URL])

    return { data, loading, error }

}

export default useFetchData;