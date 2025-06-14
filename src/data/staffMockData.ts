
// Mock data for staff features based on database schema

export const mockPatients = [
  {
    id: "p1",
    tenant_id: "t1",
    name: "สมใจ ใจดี",
    phone: "081-234-5678",
    email: "somjai@email.com",
    dob: "1990-05-15",
    gender: "female" as const,
    address: "123 ถนนสุขุมวิท กรุงเทพฯ 10110",
    emergency_contact: "085-999-8888",
    medical_history: "โรคภูมิแพ้, ความดันโลหิตสูง",
    allergies: "แป้งสาลี, ถั่วลิสง",
    created_at: "2024-01-15T08:30:00Z",
    updated_at: "2024-01-20T14:22:00Z",
    is_deleted: false
  },
  {
    id: "p2",
    tenant_id: "t1",
    name: "วิชัย เก่งงาน",
    phone: "082-345-6789",
    email: "wichai@email.com",
    dob: "1985-12-03",
    gender: "male" as const,
    address: "456 ถนนพหลโยธิน กรุงเทพฯ 10400",
    emergency_contact: "086-777-6666",
    medical_history: "เบาหวาน",
    allergies: "ไม่มี",
    created_at: "2024-01-10T10:15:00Z",
    updated_at: "2024-01-18T16:45:00Z",
    is_deleted: false
  },
  {
    id: "p3",
    tenant_id: "t1",
    name: "มาลี สวยงาม",
    phone: "083-456-7890",
    email: "malee@email.com",
    dob: "1995-08-22",
    gender: "female" as const,
    address: "789 ถนนรัชดาภิเษก กรุงเทพฯ 10310",
    emergency_contact: "087-555-4444",
    medical_history: "ไม่มีประวัติโรคประจำตัว",
    allergies: "ยาปฏิชีวนะ",
    created_at: "2024-01-12T09:20:00Z",
    updated_at: "2024-01-19T11:30:00Z",
    is_deleted: false
  }
];

export const mockAppointments = [
  {
    id: "a1",
    customer_id: "p1",
    branch_id: "b1",
    doctor_id: "d1",
    type_id: "at1",
    status: "booked" as const,
    scheduled_at: "2024-06-15T09:00:00Z",
    duration_minutes: 60,
    notes: "ตรวจสุขภาพประจำปี",
    external_ref: "APP-001",
    is_deleted: false,
    created_at: "2024-06-10T14:30:00Z",
    customer_name: "สมใจ ใจดี",
    doctor_name: "นพ.สมชาย เก่งเวช",
    type_name: "ตรวจสุขภาพทั่วไป"
  },
  {
    id: "a2",
    customer_id: "p2",
    branch_id: "b1",
    doctor_id: "d2",
    type_id: "at2",
    status: "completed" as const,
    scheduled_at: "2024-06-14T14:00:00Z",
    duration_minutes: 45,
    notes: "รักษาตามนัด",
    external_ref: "APP-002",
    is_deleted: false,
    created_at: "2024-06-09T10:15:00Z",
    customer_name: "วิชัย เก่งงาน",
    doctor_name: "นพ.สุดา ใจดี",
    type_name: "รักษาโรคเบาหวาน"
  },
  {
    id: "a3",
    customer_id: "p3",
    branch_id: "b1",
    doctor_id: "d1",
    type_id: "at1",
    status: "no_show" as const,
    scheduled_at: "2024-06-13T10:30:00Z",
    duration_minutes: 30,
    notes: "ไม่มาตามนัด",
    external_ref: "APP-003",
    is_deleted: false,
    created_at: "2024-06-08T16:45:00Z",
    customer_name: "มาลี สวยงาม",
    doctor_name: "นพ.สมชาย เก่งเวช",
    type_name: "ตรวจสุขภาพทั่วไป"
  }
];

export const mockTreatments = [
  {
    id: "t1",
    customer_id: "p1",
    service_id: "s1",
    branch_id: "b1",
    doctor_id: "d1",
    treatment_date: "2024-06-14T09:00:00Z",
    notes: "ทำความสะอาดหินปูน ผลการรักษาดี",
    status: "completed" as const,
    is_deleted: false,
    created_at: "2024-06-14T09:00:00Z",
    customer_name: "สมใจ ใจดี",
    service_name: "ทำความสะอาดหินปูน",
    doctor_name: "นพ.สมชาย เก่งเวช"
  },
  {
    id: "t2",
    customer_id: "p2",
    service_id: "s2",
    branch_id: "b1",
    doctor_id: "d2",
    treatment_date: "2024-06-13T14:00:00Z",
    notes: "อุดฟัน 2 ซี่ ผลการรักษาดีมาก",
    status: "completed" as const,
    is_deleted: false,
    created_at: "2024-06-13T14:00:00Z",
    customer_name: "วิชัย เก่งงาน",
    service_name: "อุดฟัน",
    doctor_name: "นพ.สุดา ใจดี"
  }
];

export const mockInvoices = [
  {
    id: "i1",
    customer_id: "p1",
    branch_id: "b1",
    total_amount: 1500.00,
    vat_amount: 105.00,
    is_vat_included: true,
    payment_status: "paid" as const,
    payment_method_id: "pm1",
    external_ref: "INV-001",
    is_deleted: false,
    created_at: "2024-06-14T09:30:00Z",
    customer_name: "สมใจ ใจดี",
    payment_method_name: "เงินสด",
    items: [
      {
        id: "ii1",
        service_name: "ทำความสะอาดหินปูน",
        quantity: 1,
        unit_price: 1500.00,
        total_price: 1500.00
      }
    ]
  },
  {
    id: "i2",
    customer_id: "p2",
    branch_id: "b1",
    total_amount: 2500.00,
    vat_amount: 175.00,
    is_vat_included: true,
    payment_status: "pending" as const,
    payment_method_id: "pm2",
    external_ref: "INV-002",
    is_deleted: false,
    created_at: "2024-06-13T15:00:00Z",
    customer_name: "วิชัย เก่งงาน",
    payment_method_name: "โอนเงิน",
    items: [
      {
        id: "ii2",
        service_name: "อุดฟัน",
        quantity: 2,
        unit_price: 1250.00,
        total_price: 2500.00
      }
    ]
  }
];

export const mockFollowUps = [
  {
    id: "f1",
    customer_id: "p1",
    method: "phone",
    staff_id: "u1",
    result: "contacted",
    note: "ลูกค้าสนใจบริการทำความสะอาดหินปูนเพิ่มเติม",
    next_follow_date: "2024-07-15",
    created_at: "2024-06-14T10:00:00Z",
    customer_name: "สมใจ ใจดี",
    staff_name: "พนักงาน A"
  },
  {
    id: "f2",
    customer_id: "p3",
    method: "line",
    staff_id: "u2",
    result: "no_answer",
    note: "ส่งข้อความทาง LINE แล้ว รอการตอบกลับ",
    next_follow_date: "2024-06-18",
    created_at: "2024-06-15T14:30:00Z",
    customer_name: "มาลี สวยงาม",
    staff_name: "พนักงาน B"
  }
];

export const mockCrmTasks = [
  {
    id: "ct1",
    customer_id: "p1",
    assigned_to: "u1",
    priority: "high" as const,
    status: "open" as const,
    due_date: "2024-06-20",
    created_at: "2024-06-14T08:00:00Z",
    customer_name: "สมใจ ใจดี",
    assignee_name: "พนักงาน A",
    task_description: "ติดตามการนัดครั้งถัดไป"
  },
  {
    id: "ct2",
    customer_id: "p2",
    assigned_to: "u2",
    priority: "medium" as const,
    status: "in_progress" as const,
    due_date: "2024-06-18",
    created_at: "2024-06-13T16:00:00Z",
    customer_name: "วิชัย เก่งงาน",
    assignee_name: "พนักงาน B",
    task_description: "ติดตามการชำระเงิน"
  }
];

export const mockChatLogs = [
  {
    id: "cl1",
    tenant_id: "t1",
    branch_id: "b1",
    platform: "line",
    sender: "customer",
    receiver: "staff",
    message: "สอบถามเรื่องการนัดหมาย",
    is_bot: false,
    is_fallback: false,
    received_at: "2024-06-14T10:30:00Z",
    responded_at: "2024-06-14T10:32:00Z",
    response_time_secs: 120
  },
  {
    id: "cl2",
    tenant_id: "t1",
    branch_id: "b1",
    platform: "facebook",
    sender: "customer",
    receiver: "bot",
    message: "ราคาการรักษา",
    is_bot: true,
    is_fallback: false,
    received_at: "2024-06-14T11:00:00Z",
    responded_at: "2024-06-14T11:00:30Z",
    response_time_secs: 30
  }
];

export const mockServices = [
  {
    id: "s1",
    category_id: "sc1",
    name: "ทำความสะอาดหินปูน",
    description: "ทำความสะอาดหินปูนและขัดฟันขาว",
    price: 1500.00,
    duration_minutes: 60,
    status: "active" as const,
    is_deleted: false,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: "s2",
    category_id: "sc1",
    name: "อุดฟัน",
    description: "อุดฟันผุ หรือซ่อมแซมฟัน",
    price: 1250.00,
    duration_minutes: 45,
    status: "active" as const,
    is_deleted: false,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: "s3",
    category_id: "sc1",
    name: "ตรวจสุขภาพช่องปาก",
    description: "ตรวจสุขภาพช่องปากและให้คำแนะนำ",
    price: 500.00,
    duration_minutes: 30,
    status: "active" as const,
    is_deleted: false,
    created_at: "2024-01-01T00:00:00Z"
  }
];

export const mockDoctors = [
  {
    id: "d1",
    user_id: "du1",
    branch_id: "b1",
    specialization: "ทันตแพทย์ทั่วไป",
    license_number: "DEN-12345",
    status: "active" as const,
    is_deleted: false,
    created_at: "2024-01-01T00:00:00Z",
    name: "นพ.สมชาย เก่งเวช"
  },
  {
    id: "d2",
    user_id: "du2",
    branch_id: "b1",
    specialization: "ทันตกรรมจัดฟัน",
    license_number: "DEN-67890",
    status: "active" as const,
    is_deleted: false,
    created_at: "2024-01-01T00:00:00Z",
    name: "นพ.สุดา ใจดี"
  }
];

export const mockPaymentMethods = [
  {
    id: "pm1",
    name: "เงินสด",
    description: "ชำระด้วยเงินสด",
    gateway_identifier: "cash",
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: "pm2",
    name: "โอนเงิน",
    description: "โอนเงินผ่านธนาคาร",
    gateway_identifier: "bank_transfer",
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: "pm3",
    name: "บัตรเครดิต",
    description: "ชำระด้วยบัตรเครดิต",
    gateway_identifier: "credit_card",
    created_at: "2024-01-01T00:00:00Z"
  }
];
