'use client'
import React, { useState, useEffect } from 'react';
import ProgressBarLoader from './components/ProgressBarLoader';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <ProgressBarLoader />
      ) : (
        <div>
        {/* Contenu de votre page une fois le chargement terminé */}
        <ThemeSwitcher />
        <h1>Bienvenue sur votre application Next.js</h1>
      </div>
    )}
  </div>
);
};