import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from '../App';

export default function Books({ name, test }) {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div className="text-[#fff] bg-gray-900 py-[4rem]">
      Books {name} {test}
    </div>
  );
}

Books.propTypes = {
  name: PropTypes.string.isRequired,
};
