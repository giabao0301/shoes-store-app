import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        'http://172.17.28.120:3000/api/products/',
      );
      if (response.status !== 200) throw new Error('Something went wrong!');
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {data, isLoading, error, refetch};
};

export default useFetch;
