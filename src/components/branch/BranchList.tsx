
import React, { useState } from "react";
import BranchFormDialog from "./BranchFormDialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Eye, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { branches as branchMockData } from "@/data/branchMockData";

const defaultBranches = branchMockData.length > 1 ? branchMockData : [
  { id: "BR001", name: "สาขาสยาม", address: "ถนนพระราม 1", manager: "คุณสมใจ", area: "สยาม", status: "active" },
  { id: "BR002", name: "สาขาเอกมัย", address: "ถนนเอกมัย", manager: "คุณปรีชา", area: "เอกมัย", status: "active" },
  { id: "BR003", name: "สาขาทองหล่อ", address: "ถนนทองหล่อ", manager: "คุณวราภรณ์", area: "ทองหล่อ", status: "active" },
];

const BranchList: React.FC = () => {
  const [branches, setBranches] = useState(defaultBranches);
  const [openDialog, setOpenDialog] = useState(false);
  const [editBranch, setEditBranch] = useState<any>(null);
  const navigate = useNavigate();

  const handleAdd = () => {
    setEditBranch(null);
    setOpenDialog(true);
  };

  const handleEdit = branch => {
    setEditBranch(branch);
    setOpenDialog(true);
  };

  const handleSave = branch => {
    if (branch.id) {
      // Edit
      setBranches(branches.map(b => (b.id === branch.id ? { ...b, ...branch } : b)));
    } else {
      // Add new
      setBranches([
        ...branches,
        { ...branch, id: "BR" + (branches.length + 1).toString().padStart(3, "0"), status: "active" },
      ]);
    }
    setOpenDialog(false);
  };

  const handleDelete = branchId => {
    setBranches(branches.filter(b => b.id !== branchId));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">สาขาทั้งหมด ({branches.length})</h2>
        <Button onClick={handleAdd} className="flex items-center gap-2" variant="default">
          <Plus className="w-4 h-4" /> เพิ่มสาขา
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {branches.map(branch => (
          <Card key={branch.id} className="p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-lg">{branch.name}</div>
                <div className="text-gray-500 text-sm">{branch.area}</div>
              </div>
              <Badge variant={branch.status === "active" ? "default" : "secondary"}>
                {branch.status === "active" ? "เปิดใช้งาน" : "ปิดใช้งาน"}
              </Badge>
            </div>
            <div className="text-xs text-gray-500">ที่อยู่: <span className="font-medium">{branch.address}</span></div>
            <div className="flex items-center gap-2 mt-2">
              <Button size="sm" variant="secondary" className="flex gap-1" onClick={() => navigate(`/branch/${branch.id}`)}>
                <Eye className="w-4 h-4" /> ดูข้อมูล
              </Button>
              <Button size="sm" variant="outline" className="flex gap-1" onClick={() => handleEdit(branch)}>
                <Edit className="w-4 h-4" /> แก้ไข
              </Button>
              <Button size="sm" variant="destructive" className="flex gap-1" onClick={() => handleDelete(branch.id)}>
                <Minus className="w-4 h-4" /> ลบ
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <BranchFormDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSave={handleSave}
        initialBranch={editBranch}
      />
    </div>
  );
};

export default BranchList;
