import React, { useCallback, useState } from "react";
import { json } from "react-router-dom";

const UseFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // o usecallback ta sendo utilizado para evitar que seja criada a funçao request toda vez que o componente for rederizado
  const request = useCallback(async (url, options) => {
    let json;
    let response;

    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();

      if (!response.ok) throw new Error(json.message); // tratament de error para que saiba o que aconteceu
    } catch (err) {
      json = null;

      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
    }
    return { response, json } 
  }, []);

  return {data, loading, error, request };
};

export default UseFetch;
