import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

export default function Post() {
  const [dataPost, setDataPost] = useState([]);
  const navigate = useNavigate();
  // const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    const login = localStorage.getItem('login');
    // console.log(login);
    if (JSON.parse(login)) {
      navigate('/post');
    } else {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios('https://dummyjson.com/posts');
        // console.log(data);
        setDataPost(data.data.posts);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return dataPost.length ? (
    <div>
      {dataPost.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              navigate(`/post/${item.id}`);
            }}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  ) : (
    <div>Loading..</div>
  );
}
