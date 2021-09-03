import React from 'react';
// import two from '../images/two.jpg';

const ShowMedia = ({media}) => {
  return (
    <div className="flex justify-center items-center w-full mx-auto overflow-hidden">
      <img
        src={media}
        alt=""
        className="flex-shrink-0 max-w-9/11 max-h-11/12 rounded-2xl"
      />
    </div>
  );
};

export default ShowMedia;


{/* <div className="relative mt-5 w-full h-full mx-auto overflow-hidden rounded-2xl">
      <img
        src={media}
        alt=""
        className="absolute rounded-2xl"
      />
    </div> */}