import { useEffect, useState } from "react";
import axios from "axios";

function DataFromApi(BASE_URL) {
  const [backendData, setbackendData] = useState([{}]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}`, Headers);
        setbackendData(data);
        if (error) {
          setError();
        }
      } catch (e) {
        setError(e);
        // console.log(e);
        setbackendData([{}]);
      }
    };
    fetchData();
  }, [error, BASE_URL]);

  return backendData;
}
export default DataFromApi;
