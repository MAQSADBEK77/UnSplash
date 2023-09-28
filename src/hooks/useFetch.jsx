import { useState, useEffect, useCallback } from "react";
function useFetch(api) {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(false);
  const [isError, setisError] = useState(false);
  const API =
    "https://api.unsplash.com/search/photos?client_id=DWXcwlgGsaGBexfHpoqLquyl95XrXKTnwl9UUNF-HhQ&page=1&query=/" +
    api;
  const useCall = useCallback(() => {
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(API);
        if (res.ok) {
          const data = await res.json();
          setData(data);
          setisPending(true);
        } else {
          setisError(true);
          setisPending(true);
        }
      };
      fetchData();
    }, [API]);
  }, [API]);
  useCall();
  return { data, isPending, isError };
}
// DWXcwlgGsaGBexfHpoqLquyl95XrXKTnwl9UUNF - HhQ;
// JeAwCoOXDozgz64rtfmaR8n1yc-7_E5JRt8b8vp02AY
export default useFetch;
