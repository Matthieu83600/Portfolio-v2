// components/ProgressBarLoader.js
import React from 'react';
import ReactLoading from 'react-loading';

const ProgressBarLoader = () => {
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
      <ReactLoading type="bars" color="#0070f3" height={4} width={200} />
      <span className='mb-10'>Initialisation du portfolio en cours...</span>
    </div>
  );
};

export default ProgressBarLoader;
