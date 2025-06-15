
import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import AdminRoutes from '@/routes/AdminRoutes';
import StaffRoutes from '@/routes/StaffRoutes';
import PublicRoutes from '@/routes/PublicRoutes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Routes>
            <PublicRoutes />
            <AdminRoutes />
            <StaffRoutes />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
