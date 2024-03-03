'use client'

import React, { useState, useEffect } from 'react';
import ProgressBarLoader from './components/ProgressBarLoader';
import { IntroSection } from './components/Introduction';
import { AboutSection } from './components/About';
import { TechnologiesSection } from './components/Technologies';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/Contact';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='container-md'>
      {loading ? (
        <ProgressBarLoader />
      ) : (
        <div className='container-md'>
          <IntroSection />
          <AboutSection />
          <TechnologiesSection />
          <ProjectsSection />
          <ContactSection />
        </div>
    )}
    </div>
  );
};