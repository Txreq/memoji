import { useState, useEffect } from "react";

const useEmoji = (url) => {
    const [isPending, setPendingStatus] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        setPendingStatus(false);

        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                setPendingStatus(false);
                setData(result);
            })
            .catch((err) => {
                setPendingStatus(false);
                setError(err.message);
                throw new Error(err);
            });
    }, []);

    return { data, isPending, error };
};

export default useEmoji;
