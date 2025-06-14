
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { branches as branchMockData } from "@/data/branchMockData";

const defaultBranches = branchMockData.length > 1 ? branchMockData : [
  { id: "BR001", name: "สาขาสยาม", address: "ถนนพระราม 1", manager: "คุณสมใจ", area: "สยาม", status: "active" },
  { id: "BR002", name: "สาขาเอกมัย", address: "ถนนเอกมัย", manager: "คุณปรีชา", area: "เอกมัย", status: "active" },
  { id: "BR003", name: "สาขาทองหล่อ", address: "ถนนทองหล่อ", manager: "คุณวราภรณ์", area: "ทองหล่อ", status: "active" },
];

const MOCK_FINANCES = [
  { id: 1, year: 2024, month: "มิ.ย.", revenue: 230000, expense: 55000, profit: 175000 },
  { id: 2, year: 2024, month: "พ.ค.", revenue: 228000, expense: 60000, profit: 168000 },
];

const MOCK_HRS = [
  { id: 1, name: "นพ.ศักดิ์ชัย", position: "แพทย์", salary: 95000 },
  { id: 2, name: "คุณพิมพ์", position: "เจ้าหน้าที่", salary: 30000 },
];

const TAB_CONFIG = [
  { key: "info", label: "ข้อมูลสาขา" },
  { key: "finance", label: "การเงิน" },
  { key: "hr", label: "พนักงาน" },
  { key: "expense", label: "รายจ่าย" },
  { key: "revenue", label: "รายได้" },
];

const BranchDetail: React.FC = () => {
  const { branchId } = useParams<{ branchId: string }>();
  const navigate = useNavigate();
  const [tab, setTab] = useState("info");
  const branch = defaultBranches.find((b) => b.id === branchId);

  // Mock state for CRUD
  const [finances, setFinances] = useState(MOCK_FINANCES);
  const [hrs, setHrs] = useState(MOCK_HRS);

  if (!branch) {
    return (
      <div className="p-10 text-center">
        <div className="text-xl font-bold mb-4">ไม่พบข้อมูลสาขา</div>
        <Button onClick={() => navigate("/branch")}>กลับหน้าสาขาทั้งหมด</Button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <Button variant="outline" onClick={() => navigate("/branch")}>← กลับหน้าสาขาทั้งหมด</Button>
      <div className="flex gap-3 mt-4">
        {TAB_CONFIG.map(tabItem => (
          <Button
            key={tabItem.key}
            variant={tab === tabItem.key ? "default" : "outline"}
            onClick={() => setTab(tabItem.key)}
            className="rounded-full"
          >
            {tabItem.label}
          </Button>
        ))}
      </div>

      {tab === "info" && (
        <Card>
          <CardHeader>
            <CardTitle>ข้อมูลสาขา {branch.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div><b>ชื่อสาขา:</b> {branch.name}</div>
            <div><b>พื้นที่:</b> {branch.area}</div>
            <div><b>ที่อยู่:</b> {branch.address}</div>
            <div><b>ผู้จัดการ:</b> {branch.manager}</div>
            <div><Badge variant={branch.status === "active" ? "default" : "outline"}>{branch.status === "active" ? "เปิดใช้งาน" : "ปิด"}</Badge></div>
          </CardContent>
        </Card>
      )}

      {tab === "finance" && (
        <Card>
          <CardHeader>
            <CardTitle>การเงิน</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm mb-4">
              <thead>
                <tr>
                  <th>ปี</th>
                  <th>เดือน</th>
                  <th>รายได้</th>
                  <th>รายจ่าย</th>
                  <th>กำไร</th>
                </tr>
              </thead>
              <tbody>
                {finances.map(f => (
                  <tr key={f.id}>
                    <td>{f.year}</td>
                    <td>{f.month}</td>
                    <td>{f.revenue.toLocaleString()}</td>
                    <td>{f.expense.toLocaleString()}</td>
                    <td>{f.profit.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}

      {tab === "hr" && (
        <Card>
          <CardHeader><CardTitle>พนักงาน</CardTitle></CardHeader>
          <CardContent>
            <table className="w-full text-sm mb-4">
              <thead>
                <tr>
                  <th>ชื่อ</th>
                  <th>ตำแหน่ง</th>
                  <th>เงินเดือน</th>
                </tr>
              </thead>
              <tbody>
                {hrs.map(h => (
                  <tr key={h.id}>
                    <td>{h.name}</td>
                    <td>{h.position}</td>
                    <td>{h.salary.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}

      {tab === "expense" && (
        <Card>
          <CardHeader><CardTitle>รายจ่าย</CardTitle></CardHeader>
          <CardContent>
            <div>ยังไม่เปิดใช้งาน CRUD รายจ่าย (mock)</div>
          </CardContent>
        </Card>
      )}

      {tab === "revenue" && (
        <Card>
          <CardHeader><CardTitle>รายได้</CardTitle></CardHeader>
          <CardContent>
            <div>ยังไม่เปิดใช้งาน CRUD รายได้ (mock)</div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BranchDetail;
