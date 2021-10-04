import React, {useState, useEffect} from "react";

interface ReturnFetch {
  loading: Boolean,
  data: any,
  error: any 
};

export function useFetch(uri: string): ReturnFetch {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then(data => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return {
    loading,
    data,
    error
  };
}