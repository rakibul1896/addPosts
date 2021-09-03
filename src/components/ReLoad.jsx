import React from 'react';
import img from '../images/reload.svg';

const ReLoad = () => {
  const reloadPage = () => {
    window.location.reload();
  }
  return (
    <div className="mt-20" onClick={(reloadPage)}>
      <button className="bg-white lg:text-lg border-2 border-gray-800 px-4 py-1 block mx-auto">
        <img src={img} alt="" className="w-4 lg:w-6 inline-block mr-2" /> load
        recent posts
      </button>
    </div>
  );
};

export default ReLoad;
