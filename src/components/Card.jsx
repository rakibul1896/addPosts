import React from 'react';
import profileImg from '../images/user.png';
import heart from '../images/heart.svg';
import ShowMedia from './ShowMedia';

const Card = (props) => {
  return (
    <div className="w-11/12 sm:w-8/12 lg:w-1/2 xl:w-680 mx-auto mt-8 bg-white p-4">
      <div className="flex text-xl">
        <div className='flex-shrink-0'>
          <img src={profileImg} alt="" className="h-9 w-9 rounded-full -mt-1" />
        </div>
        <div className='ml-4 pr-8'>
          <div className="flex">
            <h6 className="font-semibold">rakibul_1234</h6>
            <p className="text-gray-400 ml-1">.</p>
            <p className="text-gray-400 ml-1">3min</p>
          </div>

          <div className="mx-auto">
            <p className="py-3 text-lg font-normal">
              {props.text}
            </p>
            {props.media && <ShowMedia media={props.media} />}
            <div className="flex mt-3">
              <img src={heart} alt="" className="w-5 mr-2" />
              <h1>3.5k</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
