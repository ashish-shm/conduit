import React, { useEffect, useState } from "react";

function useFetch(url) {
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => setError(err));
  }, []);

  return { data, error };
}

export default useFetch;
