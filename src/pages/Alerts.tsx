
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatVolume from '@/components/alerts/ChatVolume';
import ResponseTime from '@/components/alerts/ResponseTime';

const Alerts = () => {
  return (
    <div>
      <Routes>
        <Route path="/chat-volume" element={<ChatVolume />} />
        <Route path="/response-time" element={<ResponseTime />} />
        <Route path="/off-script" element={
          <div className="p-8 text-center text-gray-600">
            คำถามนอกสคริปต์ - กำลังพัฒนา
          </div>
        } />
        <Route path="/bot-fail" element={
          <div className="p-8 text-center text-gray-600">
            Bot Fail Rate - กำลังพัฒนา
          </div>
        } />
        <Route index element={
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">ประสิทธิภาพการสื่อสาร</h1>
            <p className="text-gray-600">จัดการและวิเคราะห์การสื่อสารจากทุกช่องทาง</p>
            <div className="mt-8 bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-600">กรุณาเลือกเมนูจากแถบด้านข้างเพื่อดูรายละเอียด</p>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
};

export default Alerts;
