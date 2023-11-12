import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      <button
        onClick={() => {
          navigate('/about');
        }}
      >
        About
      </button>
      {/* <Link to={'/about'}>About</Link> */}
      {/* <a href="/about">about</a> */}
    </>
  );
}
