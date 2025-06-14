
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BranchInfo from '@/components/branch/BranchInfo';
import BranchRevenue from '@/components/branch/BranchRevenue';
import BranchPerformance from '@/components/branch/BranchPerformance';
import BranchStaff from '@/components/branch/BranchStaff';
import BranchSettings from '@/components/branch/BranchSettings';
import BranchTargets from '@/components/branch/BranchTargets';

const Branch = () => {
  return (
    <div className="space-y-6">
      <Routes>
        <Route index element={<BranchInfo />} />
        <Route path="revenue" element={<BranchRevenue />} />
        <Route path="performance" element={<BranchPerformance />} />
        <Route path="staff" element={<BranchStaff />} />
        <Route path="settings" element={<BranchSettings />} />
        <Route path="targets" element={<BranchTargets />} />
        <Route path="net-profit" element={<div className="p-8 text-center text-gray-600">กำไรสุทธิสาขา - กำลังพัฒนา</div>} />
        <Route path="expenses" element={<div className="p-8 text-center text-gray-600">ต้นทุน / รายจ่ายสาขา - กำลังพัฒนา</div>} />
        <Route path="productivity" element={<div className="p-8 text-center text-gray-600">Productivity สาขา - กำลังพัฒนา</div>} />
        <Route path="queue-avg" element={<div className="p-8 text-center text-gray-600">คิวเฉลี่ยต่อวัน - กำลังพัฒนา</div>} />
        <Route path="recommendations" element={<div className="p-8 text-center text-gray-600">คำแนะนำ: ปิด / เปิดสาขาใหม่ - กำลังพัฒนา</div>} />
      </Routes>
    </div>
  );
};

export default Branch;
