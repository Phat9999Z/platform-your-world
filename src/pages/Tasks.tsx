
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TasksDashboard from '@/components/tasks/TasksDashboard';
import TasksList from '@/components/tasks/TasksList';
import TasksCalendar from '@/components/tasks/TasksCalendar';
import TasksAnalytics from '@/components/tasks/TasksAnalytics';
import TasksCreate from '@/components/tasks/TasksCreate';

const Tasks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">จัดการงาน (Executive)</h1>
          <p className="text-gray-600">ระบบบริหารจัดการงานสำหรับผู้บริหาร</p>
        </div>
        
        <Routes>
          <Route index element={<TasksDashboard />} />
          <Route path="list" element={<TasksList />} />
          <Route path="calendar" element={<TasksCalendar />} />
          <Route path="analytics" element={<TasksAnalytics />} />
          <Route path="create" element={<TasksCreate />} />
        </Routes>
      </div>
    </div>
  );
};

export default Tasks;
