'use client'

import React, { useState, useEffect } from 'react';
import ProgressBarLoader from './components/ProgressBarLoader';
import { IntroSection } from './components/Introduction';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='container-md'>
      {loading ? (
        <ProgressBarLoader />
      ) : (
        <div className='container-md'>
          <IntroSection />
        </div>
    )}
  </div>
  );
};