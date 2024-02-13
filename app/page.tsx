'use client'
import React, { useState, useEffect } from 'react';
import ProgressBarLoader from './components/ProgressBarLoader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {loading ? (
        <ProgressBarLoader />
      ) : (
        <div>
        {/* Contenu de votre page une fois le chargement terminé */}
        <h1>Bienvenue sur votre application Next.js</h1>
      </div>
    )}
  </main>
);
};