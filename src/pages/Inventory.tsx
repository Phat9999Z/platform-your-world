
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InventoryDashboard from '@/components/inventory/InventoryDashboard';
import InventoryList from '@/components/inventory/InventoryList';
import InventoryCreate from '@/components/inventory/InventoryCreate';
import InventoryAnalytics from '@/components/inventory/InventoryAnalytics';
import InventoryCategories from '@/components/inventory/InventoryCategories';

const Inventory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">จัดการสินค้าคงคลัง</h1>
          <p className="text-gray-600">ระบบบริหารจัดการสินค้าและวัสดุสิ้นเปลือง</p>
        </div>
        
        <Routes>
          <Route index element={<InventoryDashboard />} />
          <Route path="list" element={<InventoryList />} />
          <Route path="create" element={<InventoryCreate />} />
          <Route path="analytics" element={<InventoryAnalytics />} />
          <Route path="categories" element={<InventoryCategories />} />
        </Routes>
      </div>
    </div>
  );
};

export default Inventory;
