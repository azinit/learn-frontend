import { useState, useEffect } from "react";
import { API_DOMAIN } from "shared/get-env";

const useFetch = <T = any>(url: string, baseUrl = API_DOMAIN) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`${baseUrl}/${url}`)
            .then((r) => r.json())
            .then((r: T) => {
                setData(r);
                setLoading(false);
                setError(null);
            })
            .catch((err) => {
                setData(null);
                setLoading(false);
                setError(err);
            })
    }, [baseUrl, url]);

    return { loading, data, error };
}
export default useFetch;
