
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StaffChatSupport from '@/components/staff/chat/StaffChatSupport';
import StaffChatHistory from '@/components/staff/chat/StaffChatHistory';
import StaffChatSettings from '@/components/staff/chat/StaffChatSettings';

const StaffChat = () => {
  return (
    <div className="space-y-6">
      <Routes>
        <Route index element={<StaffChatSupport />} />
        <Route path="history" element={<StaffChatHistory />} />
        <Route path="settings" element={<StaffChatSettings />} />
      </Routes>
    </div>
  );
};

export default StaffChat;
