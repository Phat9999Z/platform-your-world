
import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RoleSelector from "@/components/auth/RoleSelector";

const Index = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("ceo"); // Default "ceo", or leave blank if you prefer.

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ username, password, role }); // Pass role to context
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-blue-100 via-slate-100 to-indigo-100">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-800">
          ระบบเข้าสู่ระบบ
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              ชื่อผู้ใช้
            </label>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              รหัสผ่าน
            </label>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <RoleSelector value={role} onChange={setRole} />
          <Button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800"
          >
            เข้าสู่ระบบ
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Index;
