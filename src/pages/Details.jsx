import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
  const params = useParams();
  //   console.log(params);
  const [dataDetails, setDataDetails] = useState({});
  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await axios(`https://dummyjson.com/posts/${params.id}`);
        console.log(data);
        setDataDetails(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, []);

  return (
    <>
      <div>{dataDetails.body}</div>
      <input type="file" />
    </>
  );
}
