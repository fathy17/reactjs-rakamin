import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <div>About</div>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate('/post');
        }}
      >
        Post
      </button>
    </>
  );
}
