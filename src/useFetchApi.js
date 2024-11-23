import { useEffect, useState } from "react";

function useFetchApi(url) {
  const [data, setData] = useState(null);
  const [isLoding, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        setIsLoading(false);
        setData(results);
      })
      .catch(() => {
        setIsLoading(false);
        setErrorMessage("There was an error");
      });
  }, [url]);

  return { data, isLoding, errorMessage };
}

export default useFetchApi;
