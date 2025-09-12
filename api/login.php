<?php
// login.php
header('Content-Type: application/json');
require_once 'db.php'; // สร้างไฟล์ db.php สำหรับเชื่อมต่อฐานข้อมูล

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

if (!$email || !$password) {
    echo json_encode(['success' => false, 'message' => 'กรุณากรอกข้อมูลให้ครบ']);
    exit;
}

$stmt = $conn->prepare('SELECT id, email, password FROM users WHERE email = ?');
$stmt->bind_param('s', $email);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    if (password_verify($password, $row['password'])) {
        echo json_encode(['success' => true, 'message' => 'เข้าสู่ระบบสำเร็จ', 'user_id' => $row['id']]);
    } else {
        echo json_encode(['success' => false, 'message' => 'รหัสผ่านไม่ถูกต้อง']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'ไม่พบผู้ใช้นี้']);
}
$stmt->close();
$conn->close();
?>
