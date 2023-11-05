// import React from 'react';

import { useEffect, useState } from 'react';
import Books from './Books';

export default function Test({ nama }) {
  useEffect(() => {
    return () => {
      console.log('component destroyed');
    };
  }, []);
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Component 2 {nama}</div>
      <Books name={3} nama={nama} />
    </>
  );
}
