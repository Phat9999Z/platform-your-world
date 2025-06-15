
import React from 'react';
import { Route } from 'react-router-dom';
import Index from '@/pages/Index';
import MainMenu from '@/pages/MainMenu';
import StaffMenu from '@/pages/StaffMenu';
import NotFound from '@/pages/NotFound';

const PublicRoutes = () => {
  return (
    <>
      <Route path="/login" element={<Index />} />
      <Route path="/" element={<MainMenu />} />
      <Route path="/main-menu" element={<MainMenu />} />
      <Route path="/staff-menu" element={<StaffMenu />} />
      <Route path="*" element={<NotFound />} />
    </>
  );
};

export default PublicRoutes;
