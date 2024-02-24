'use client'
import React, { useState, useEffect } from 'react';
import ProgressBarLoader from '../components/ProgressBarLoader';
import { ProjectCard } from '../components/ProjectCard';

export default function Projects() {
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
          <div className="flex flex-col gap-4 items-center py-5">
            <h1 className='text-3xl font-bold text-center'>Mes projets</h1>
          </div> 
          <ProjectCard />
        </div>
    )}
  </div>
  );
};