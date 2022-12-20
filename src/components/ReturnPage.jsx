import React from 'react';
import { Link } from 'react-router-dom';

const ReturnPage = () => {
  return (
    <div className="flex justify-end">
      <Link to="/">
        <button className="text-2xl font-bold transition duration-500 hover:text-green-400">
          X
        </button>
      </Link>
    </div>
  );
};

export default ReturnPage;
