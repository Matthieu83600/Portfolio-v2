'use client'

import React, { useEffect, useState } from "react";
import Layout from './layout';
import ProgressBarLoader from '../components/ProgressBarLoader';
import { MentionsLegales } from "../components/mentions";

export default function Mentions() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
    <div className='container-md'>
      {loading ? (
        <ProgressBarLoader />
      ) : (
        <div className="container-md">
          <MentionsLegales />
        </div>
    )}
  </div>
  </Layout>
  );
};