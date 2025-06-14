
import { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Calendar, Users, FileText, MessageSquare, DollarSign, UserCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Logo from "@/components/Logo";
import MenuCard from "@/components/MenuCard";
import ChatSupport from "@/components/ChatSupport";
import { useAuth } from "@/contexts/AuthContext";

const StaffMenu = () => {
  const { toast } = useToast();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { logout } = useAuth();

  const handleLogout = () => {
    toast({
      title: "ออกจากระบบ",
      description: "กำลังออกจากระบบ...",
    });
    
    logout();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col pt-[100px]">
      {/* Header with Logo */}
      <header className="w-full flex justify-center py-8">
        <Logo />
      </header>

      {/* System Name */}
      <div className="w-full text-center text-teal-700 text-lg font-semibold tracking-wide mb-6">
        Staff Portal - Clinic Management
      </div>
      
      <hr className="max-w-4xl mx-auto w-full border-t border-teal-700/30 mb-8" />

      {/* Main Content */}
      <main className="flex-grow flex items-start justify-center px-6 pb-10">
        <div className="w-full max-w-3xl">
          {/* Menu Grid - Optimized for Staff */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            {/* Patient Management */}
            <Link to="/staff/patients" className="block">
              <MenuCard 
                title="Patient Management" 
                subtitle="ข้อมูลผู้ป่วย"
                icon={<Users size={32} />} 
                variant="primary" 
                backgroundImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80"
              />
            </Link>

            {/* Appointment Booking */}
            <Link to="/staff/appointments" className="block">
              <MenuCard 
                title="Appointment" 
                subtitle="จองคิว / ดูตารางนัด"
                icon={<Calendar size={32} />} 
                variant="primary" 
                backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
              />
            </Link>

            {/* Treatment Records */}
            <Link to="/staff/treatments" className="block">
              <MenuCard 
                title="Treatment" 
                subtitle="บันทึกการรักษา"
                icon={<FileText size={32} />} 
                variant="primary" 
                backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&q=80"
              />
            </Link>

            {/* Invoice & Payment */}
            <Link to="/staff/invoicing" className="block">
              <MenuCard 
                title="Invoice & Payment" 
                subtitle="ออกใบเสร็จ / รับชำระ"
                icon={<DollarSign size={32} />} 
                variant="secondary" 
              />
            </Link>

            {/* Customer Follow-up */}
            <Link to="/staff/followup" className="block">
              <MenuCard 
                title="Customer Follow-up" 
                subtitle="ติดตามลูกค้า"
                icon={<UserCheck size={32} />} 
                variant="secondary" 
              />
            </Link>

            {/* Chat Support */}
            <Link to="/staff/chat" className="block">
              <MenuCard 
                title="Chat Support" 
                subtitle="ตอบแชทลูกค้า"
                icon={<MessageSquare size={32} />} 
                variant="primary" 
                backgroundImage="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=400&q=80"
              />
            </Link>

          </div>
          
          {/* Quick Stats for Staff */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-teal-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-teal-700">12</div>
              <div className="text-sm text-teal-600">นัดวันนี้</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-700">3</div>
              <div className="text-sm text-blue-600">รอการรักษา</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-700">5</div>
              <div className="text-sm text-green-600">รอติดตาม</div>
            </div>
          </div>
          
          {/* Logout Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-medium px-4 py-2 rounded-md"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </main>

      {/* Chat Support Dialog */}
      {isChatOpen && <ChatSupport onClose={() => setIsChatOpen(false)} />}

      {/* Footer */}
      <footer className="w-full text-center p-4 mt-8 text-teal-700">
        © 2025 Mula Global. สงวนลิขสิทธิ์ทั้งหมด
      </footer>
    </div>
  );
};

export default StaffMenu;
