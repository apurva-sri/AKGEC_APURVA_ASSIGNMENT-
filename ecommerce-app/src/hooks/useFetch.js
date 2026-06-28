import { useEffect, useState } from "react";

function useFetch(fetchFunction, ...params) {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchFunction(...params);

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [...params]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;
