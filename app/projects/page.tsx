'use client'
import React, { useState, useEffect } from 'react';
import ProgressBarLoader from '../components/ProgressBarLoader';
import { ProjectCard } from '../components/ProjectCard';
import { Filter } from '../components/Filter';

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(undefined);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleFilterClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className='container-md'>
      {loading ? (
        <ProgressBarLoader />
      ) : (
        <div className='container-md'>
          <div className="flex flex-col gap-4 items-center py-5">
            <h1 className='text-3xl font-bold text-center'>Mes projets</h1>
          </div> 
          <Filter onClick={handleFilterClick} activeCategory={activeCategory}/>
          <ProjectCard activeCategory={activeCategory}/>
        </div>
    )}
  </div>
  );
};