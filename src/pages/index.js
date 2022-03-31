import React from 'react';
import dynamic from 'next/dynamic';
import { homeLayout } from '../views/layouts/home';

const LayoutRenderer = dynamic(() => import('../views/components/LayoutRenderer'), { ssr: false });

const Home = () => {
  return <LayoutRenderer layout={homeLayout} />;
};

export default Home;
