
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageSquare, Send, Search, Clock, User, Smile } from 'lucide-react';
import { mockChatLogs } from '@/data/staffMockData';
import { useToast } from '@/hooks/use-toast';

const StaffChatSupport = () => {
  const { toast } = useToast();
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [platformFilter, setPlatformFilter] = useState('all');
  const [chatLogs] = useState(mockChatLogs);

  const filteredChats = chatLogs.filter(chat => 
    platformFilter === 'all' || chat.platform === platformFilter
  );

  // Group chats by sender (customer)
  const groupedChats = filteredChats.reduce((acc, chat) => {
    const key = `${chat.sender}-${chat.platform}`;
    if (!acc[key]) {
      acc[key] = {
        id: key,
        sender: chat.sender,
        platform: chat.platform,
        lastMessage: chat.message,
        lastTime: chat.received_at,
        messages: []
      };
    }
    acc[key].messages.push(chat);
    // Update last message if this one is newer
    if (new Date(chat.received_at) > new Date(acc[key].lastTime)) {
      acc[key].lastMessage = chat.message;
      acc[key].lastTime = chat.received_at;
    }
    return acc;
  }, {} as any);

  const chatList = Object.values(groupedChats).sort((a: any, b: any) => 
    new Date(b.lastTime).getTime() - new Date(a.lastTime).getTime()
  );

  const selectedChatData = selectedChat ? groupedChats[selectedChat] : null;

  const getPlatformBadge = (platform: string) => {
    const variants = {
      line: 'bg-green-100 text-green-800',
      facebook: 'bg-blue-100 text-blue-800',
      website: 'bg-purple-100 text-purple-800'
    };
    const labels = {
      line: 'LINE',
      facebook: 'Facebook',
      website: 'Website'
    };
    return (
      <Badge className={variants[platform as keyof typeof variants]}>
        {labels[platform as keyof typeof labels] || platform}
      </Badge>
    );
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;

    // In a real app, this would send the message to the backend
    console.log('Sending message:', newMessage);
    
    toast({
      title: "ส่งข้อความสำเร็จ",
      description: `ส่งข้อความไปยัง ${selectedChatData?.sender} แล้ว`,
    });

    setNewMessage('');
  };

  const quickReplies = [
    "สวัสดีครับ/ค่ะ ยินดีให้บริการ",
    "ขอบคุณสำหรับการติดต่อ",
    "กรุณารอสักครู่ กำลังตรวจสอบข้อมูลให้",
    "หากมีคำถามเพิ่มเติม สามารถสอบถามได้เสมอ",
    "ขอบคุณครับ/ค่ะ หวังว่าจะได้ให้บริการอีก"
  ];

  const responseStats = {
    total: chatLogs.length,
    avgResponseTime: Math.round(chatLogs.reduce((sum, chat) => sum + (chat.response_time_secs || 0), 0) / chatLogs.length),
    botHandled: chatLogs.filter(chat => chat.is_bot).length,
    humanHandled: chatLogs.filter(chat => !chat.is_bot).length
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">แชทสนับสนุนลูกค้า</h1>
          <p className="text-gray-600">ตอบคำถามและสนับสนุนลูกค้าแบบเรียลไทม์</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{responseStats.total}</div>
              <div className="text-sm text-gray-600">ข้อความทั้งหมด</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{responseStats.avgResponseTime}s</div>
              <div className="text-sm text-gray-600">เวลาตอบเฉลี่ย</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{responseStats.botHandled}</div>
              <div className="text-sm text-gray-600">Bot ตอบ</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{responseStats.humanHandled}</div>
              <div className="text-sm text-gray-600">คนตอบ</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              รายการแชท
            </CardTitle>
            <CardDescription>
              <Select value={platformFilter} onValueChange={setPlatformFilter}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="เลือกแพลตฟอร์ม" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ทุกแพลตฟอร์ม</SelectItem>
                  <SelectItem value="line">LINE</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="website">Website</SelectItem>
                </SelectContent>
              </Select>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {(chatList as any[]).map((chat) => (
                <div
                  key={chat.id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedChat === chat.id ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'
                  } border`}
                  onClick={() => setSelectedChat(chat.id)}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="font-medium text-sm">{chat.sender}</span>
                    </div>
                    {getPlatformBadge(chat.platform)}
                  </div>
                  <div className="text-sm text-gray-600 truncate">
                    {chat.lastMessage}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                    <Clock className="h-3 w-3" />
                    {new Date(chat.lastTime).toLocaleTimeString('th-TH', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              ))}
              
              {chatList.length === 0 && (
                <div className="text-center py-4 text-gray-500">
                  ไม่มีแชทในขณะนี้
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle>
                {selectedChatData ? (
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    {selectedChatData.sender}
                    {getPlatformBadge(selectedChatData.platform)}
                  </div>
                ) : (
                  'เลือกแชทเพื่อเริ่มการสนทนา'
                )}
              </CardTitle>
            </CardHeader>
            
            {selectedChatData ? (
              <>
                <CardContent className="flex-1 overflow-y-auto">
                  <div className="space-y-3">
                    {selectedChatData.messages.map((message: any, index: number) => (
                      <div
                        key={index}
                        className={`flex ${message.sender === 'customer' ? 'justify-start' : 'justify-end'}`}
                      >
                        <div
                          className={`max-w-xs p-3 rounded-lg ${
                            message.sender === 'customer'
                              ? 'bg-gray-100 text-gray-800'
                              : 'bg-blue-500 text-white'
                          }`}
                        >
                          <div className="text-sm">{message.message}</div>
                          <div className={`text-xs mt-1 ${
                            message.sender === 'customer' ? 'text-gray-500' : 'text-blue-100'
                          }`}>
                            {new Date(message.received_at).toLocaleTimeString('th-TH', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                            {message.is_bot && ' (Bot)'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                {/* Quick Replies */}
                <div className="px-6 py-2 border-t">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {quickReplies.map((reply, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => setNewMessage(reply)}
                        className="text-xs"
                      >
                        {reply.length > 20 ? reply.substring(0, 20) + '...' : reply}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Message Input */}
                <div className="p-6 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="พิมพ์ข้อความ..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <CardContent className="flex-1 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>เลือกแชทจากรายการทางซ้ายเพื่อเริ่มการสนทนา</p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StaffChatSupport;
